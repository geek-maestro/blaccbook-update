// context/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  signInWithCredential,
  GoogleAuthProvider,
  getAuth,
} from 'firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { Alert } from 'react-native';
import { router } from 'expo-router';
import { addDocument, auth, db, updateDocument } from '../../firebase_config';
import { client } from '~/app/_layout';
import { doc, getDoc } from 'firebase/firestore';

interface AuthContextType {
  user: User | null;
  login: UseMutationResult<void, Error, { email: string; password: string }, unknown>;
  register: UseMutationResult<
    void,
    Error,
    { email: string; password: string; firstName: string; lastName: string },
    unknown
  >;
  logout: UseMutationResult<void, Error, void, unknown>;
  googleLogin: UseMutationResult<void, Error, void, unknown>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        router.push('/tabs');
      }
    });
    return unsubscribe;
  }, []);

  const login = useMutation<void, Error, { email: string; password: string }>({
    mutationFn: async ({ email, password }) => {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const { user } = userCredential;

      // Fetch user profile from Firestore
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) throw new Error('User profile not found');

      const userProfile = docSnap.data();

      // Populate user cache
      client.setQueryData(['user'], {
        uid: user.uid,
        email: user.email,
        name: userProfile.name,
        image: userProfile.image ?? user.photoURL,
        ...userProfile, // includes any custom fields like role, phone, etc.
      });
    },
    onSuccess: () => {
      Alert.alert('Success', 'Login successful');
      router.push('/tabs');
    },
    onError: (error) => {
      throw error;
    },
  });

  const register = useMutation<
    void,
    Error,
    { email: string; password: string; firstName: string; lastName: string }
  >({
    mutationFn: async ({ email, password, firstName, lastName }) => {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const { user } = userCredential;
      await addDocument('users', {
        uid: user.uid,
        email: user.email,
        createdAt: new Date().toISOString(),
        provider: 'email',
        name: firstName + ' ' + lastName,
      });
    },
    onSuccess: () => {
      router.push('/auth/verification');
    },
    onError: (error) => {
      throw error;
    },
  });

  const logout = useMutation<void, Error, void>({
    mutationFn: async () => {
      await signOut(auth);
    },
    onSuccess: () => router.push('/auth'),
  });

  const googleLogin = useMutation<void, Error, void>({
    mutationFn: async () => {
      try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        console.log(userInfo, 'user info');
        const { idToken } = userInfo.data;
        if (!idToken) throw new Error('Google ID token missing');
        const credential = GoogleAuthProvider.credential(idToken);
        const userCredential = await signInWithCredential(auth, credential);

        await updateDocument('users', userCredential.user.uid, {
          email: userCredential.user.email,
          provider: 'google',
          createdAt: new Date().toISOString(),
          name: userCredential.user.displayName,
          image: userCredential.user.photoURL,
        });
      } catch (error: any) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          console.log('User cancelled Google login');
        } else {
          console.error('Google Login Error:', error);
          throw error;
        }
      }
    },

    onSuccess: () => {
      const user = auth.currentUser;
      client.setQueryData(['user'], {
        email: user?.email,
        image: user?.photoURL,
        uid: user?.uid,
        name: user?.displayName,
      });
      router.push('/tabs');
    },
    onError: (error) => {
      console.error('Google Login Error:', error);
      Alert.alert('Google Login Error', error.message);
    },
  });

  return (
    <AuthContext.Provider value={{ user, login, register, logout, googleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
