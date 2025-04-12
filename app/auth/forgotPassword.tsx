import {
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import { Text, TextInput } from 'react-native-paper';
import { router, Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSendCode = () => {
    // TODO: Implement send code logic
    router.push('/auth/verification');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen 
        options={{
          headerShown: false
        }}
      />
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
          <Text style={styles.title}>Forgot Password?</Text>
          <Text style={styles.subtitle}>
            Enter your email address to receive a verification code
          </Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              mode="outlined"
              outlineColor="#E5E7EB"
              activeOutlineColor="#2174EE"
              keyboardType="email-address"
              left={<TextInput.Icon icon="email" color="#6B7280" />}
            />
          </View>
        </View>

        {/* Send Code Button */}
        <TouchableOpacity 
          style={styles.sendButton}
          onPress={handleSendCode}
        >
          <Text style={styles.sendButtonText}>Receive Code</Text>
        </TouchableOpacity>


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
    marginBottom: 30,
  },
  header: {
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    lineHeight: 24,
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
  sendButton: {
    backgroundColor: '#2174EE',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  returnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 20,
  },
  returnText: {
    color: '#2174EE',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default ForgotPassword;
