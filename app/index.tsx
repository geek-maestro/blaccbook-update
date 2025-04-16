import { Stack, Redirect } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState<boolean | null>(null);

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      const status = await AsyncStorage.getItem('@BlaccBook:hasSeenOnboarding');
      setHasSeenOnboarding(status === 'true');
    };
    checkOnboardingStatus();
  }, []);

  if (hasSeenOnboarding === null) {
    return null; // or a loading screen
  }

  if (!hasSeenOnboarding) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <>
      <Stack.Screen 
        options={{ 
          title: 'BlaccBook',
          headerStyle: { backgroundColor: '#f8f8f8' },
        }} 
      />
      <View style={styles.container}>
        <Button 
          mode="contained" 
          onPress={() => router.push('/restaurant')}
          style={styles.button}
        >
          Browse Restaurants
        </Button>
        <Button 
          mode="contained" 
          onPress={() => router.push('/history')}
          style={styles.button}
        >
          View History
        </Button>
        <Button 
          mode="contained" 
          onPress={() => router.push('/ratings')}
          style={styles.button}
        >
          Ratings & Reviews
        </Button>
        <Button 
          mode="contained" 
          onPress={() => router.push('/rate-service')}
          style={styles.button}
        >
          Rate Our Service
        </Button>
        <Button 
          mode="contained" 
          onPress={() => router.push('/detailed-rating')}
          style={styles.button}
        >
          Detailed Rating
        </Button>
        <Button 
          mode="contained" 
          onPress={() => router.push('/profile')}
          style={styles.button}
        >
          My Profile
        </Button>
      </View>
      <Redirect href={'/auth'} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    gap: 16
  },
  button: {
    width: '100%',
    borderRadius: 12
  }
});
