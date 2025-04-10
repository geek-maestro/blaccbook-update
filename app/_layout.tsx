import '../global.css';

import { Stack } from 'expo-router';
import { DefaultTheme, PaperProvider } from 'react-native-paper';

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
  return (
    <PaperProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </PaperProvider>
  );
}
