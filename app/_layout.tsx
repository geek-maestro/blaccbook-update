import '../global.css';

import { Stack } from 'expo-router';
import { DefaultTheme, PaperProvider } from 'react-native-paper';
import { AuthProvider } from './api/utils/context/authContext';
import { focusManager, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useEffect } from 'react';
import { AppState } from 'react-native';
import { LocationContext, LocationProvider } from './api/utils/context/locationContext';

export const client = new QueryClient();

export default function Layout() {
  const theme = {
    ...DefaultTheme,
    myOwnProperty: true,
    colors: {
      ...DefaultTheme.colors,
      primary: '#2174EE',
      secondary: '#103A77',
      accent: '#9b59b6',
    },
  };

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (state) => {
      focusManager.setFocused(state === 'active');
    });
    return () => subscription.remove();
  }, []);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '547353025123-5ti5ae8vkbi2701j7bnrbpv5ec15tf3p.apps.googleusercontent.com',
    });
  }, []);

  return (
    <QueryClientProvider client={client}>
      <AuthProvider>
        <LocationProvider>
          <PaperProvider>
            <Stack screenOptions={{ headerShown: false }} />
          </PaperProvider>
        </LocationProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
