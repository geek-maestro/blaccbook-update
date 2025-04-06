import { Stack, Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function Home() {
  return (
    <>
      <Stack.Screen 
        options={{ 
          title: 'BlaccBook',
          headerStyle: { backgroundColor: '#f8f8f8' },
        }} 
      />
      <View style={styles.container}>
        <Link href="/gallery" asChild>
          <Button 
            mode="contained" 
            style={styles.button}
            contentStyle={styles.buttonContent}
          >
            Browse Restaurants
          </Button>
        </Link>
        
        <Link href="/history" asChild>
          <Button 
            mode="contained" 
            style={[styles.button, { marginTop: 16 }]}
            contentStyle={styles.buttonContent}
          >
            View History
          </Button>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  button: {
    width: '100%',
    borderRadius: 12,
  },
  buttonContent: {
    paddingVertical: 8,
  },
});
