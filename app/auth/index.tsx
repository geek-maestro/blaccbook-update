import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { Text, TextInput } from 'react-native-paper';
import { router } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Icons } from '~/components/Icons';
import { useAuth } from '../api/utils/context/authContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [savePassword, setSavePassword] = useState(false);
  const { login, googleLogin } = useAuth()

  const handleLogin = async () => {
    try {
      await login.mutateAsync({email, password});
    } catch (err) {
      console.log("login error", err.message)
      Alert.alert('Login Error', login.error?.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin.mutateAsync();
    } catch (err: any) {
      Alert.alert('Google Sign-In Error', googleLogin.error?.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Back Button */}
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Welcome Back,</Text>
          <Text style={styles.loginText}>
            Login to your Blaccbook <Text style={styles.accountText}>account</Text>
          </Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Enter Email or Mobile</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your mobile number"
              value={email}
              onChangeText={setEmail}
              mode="outlined"
              outlineColor="#E5E7EB"
              activeOutlineColor="#2174EE"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              mode="outlined"
              outlineColor="#E5E7EB"
              activeOutlineColor="#2174EE"
            />
          </View>

          <View style={styles.passwordOptions}>
            <View style={styles.savePasswordContainer}>
              <TouchableOpacity
                style={[styles.checkbox, savePassword && styles.checkboxChecked]}
                onPress={() => setSavePassword(!savePassword)}
              />
              <Text style={styles.savePasswordText}>Save Password</Text>
            </View>
            <TouchableOpacity onPress={() => router.push('/auth/forgotPassword')}>
              <Text style={styles.forgotPasswordText}>Forgot Password</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Login Button */}
        <TouchableOpacity 
          style={styles.loginButton}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>{login.isPending ? 'Logging in...' : 'Login'}</Text>
        </TouchableOpacity>

        {/* Or Divider */}
        <View style={styles.orContainer}>
          <Text style={styles.orText}>Or</Text>
        </View>

        {/* Social Sign In */}
        <View style={styles.socialContainer}>
          <Text style={styles.signInWithText}>Sign In with</Text>
          <View style={styles.socialIcons}>
            <TouchableOpacity style={styles.socialButton}>
              <MaterialCommunityIcons name="facebook" size={24} color="#1877F2" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton} onPress={handleGoogleLogin}>
              <Icons.Google.Colored size={26} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <MaterialCommunityIcons name="apple" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Sign Up Link */}
        <View style={styles.signUpContainer}>
          <Text style={styles.noAccountText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => router.push('/auth/signup')}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  backButton: {
    marginTop: 10,
  },
  header: {
    marginTop: 20,
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  loginText: {
    fontSize: 16,
    color: '#111827',
  },
  accountText: {
    color: '#2174EE',
  },
  form: {
    gap: 20,
  },
  inputContainer: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    color: '#111827',
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#FFFFFF',
    height: 50,
  },
  passwordOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  savePasswordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#D1D5DB',
  },
  checkboxChecked: {
    backgroundColor: '#2174EE',
    borderColor: '#2174EE',
  },
  savePasswordText: {
    fontSize: 14,
    color: '#6B7280',
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#2174EE',
  },
  loginButton: {
    backgroundColor: '#2174EE',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  orContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  orText: {
    color: '#6B7280',
    fontSize: 14,
  },
  socialContainer: {
    alignItems: 'center',
    gap: 20,
  },
  signInWithText: {
    fontSize: 14,
    color: '#111827',
  },
  socialIcons: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  socialButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  noAccountText: {
    fontSize: 14,
    color: '#111827',
  },
  signUpText: {
    fontSize: 14,
    color: '#2174EE',
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
});

export default Login;
