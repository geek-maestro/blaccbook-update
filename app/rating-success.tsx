import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function RatingSuccess() {
  return (
    <View style={styles.container}>
      <Stack.Screen 
        options={{ 
          headerShown: false
        }} 
      />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => router.back()}
          style={styles.closeButton}
        >
          <Ionicons name="close" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>
          Glad you ordered from us!!
        </Text>
        <Text style={styles.description}>
          Your review may take some time to show up, but we are happy for people to see what your review was
        </Text>

        {/* Done Button */}
        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            onPress={() => router.push('/')}
            style={styles.button}
            buttonColor="#2563EB"
          >
            Done
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  header: {
    paddingTop: 48,
    paddingHorizontal: 16
  },
  closeButton: {
    padding: 8
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 32
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#111827'
  },
  description: {
    marginTop: 8,
    fontSize: 16,
    color: '#6B7280',
    lineHeight: 24
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 48,
    left: 24,
    right: 24
  },
  button: {
    borderRadius: 9999
  }
}); 