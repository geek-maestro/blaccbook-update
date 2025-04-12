import {
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput as RNTextInput,
} from 'react-native';
import React, { useState, useRef } from 'react';
import { Text } from 'react-native-paper';
import { router, Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const Verification = () => {
  const [code, setCode] = useState(['', '', '', '']);
  const inputRefs = useRef([]);

  const handleCodeChange = (text: string, index: number) => {
    if (text.length <= 1) {
      const newCode = [...code];
      newCode[index] = text;
      setCode(newCode);
      
      // Move to next input if there's a value
      if (text.length === 1 && index < 3) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyPress = (event: any, index: number) => {
    if (event.nativeEvent.key === 'Backspace' && index > 0 && !code[index]) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerify = () => {
    // TODO: Implement verification logic
    router.push('/auth/newPassword');
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
          <Text style={styles.title}>Enter Verification Code</Text>
          <Text style={styles.subtitle}>
            We have sent a verification code to your email address
          </Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <View style={styles.codeContainer}>
            {[0, 1, 2, 3].map((index) => (
              <RNTextInput
                key={index}
                ref={ref => inputRefs.current[index] = ref}
                style={styles.codeInput}
                maxLength={1}
                value={code[index]}
                onChangeText={(text) => handleCodeChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                keyboardType="number-pad"
                selectionColor="#2174EE"
              />
            ))}
          </View>
        </View>

        {/* Verify Button */}
        <TouchableOpacity 
          style={styles.verifyButton}
          onPress={handleVerify}
        >
          <Text style={styles.verifyButtonText}>Verify</Text>
        </TouchableOpacity>

        {/* Resend Code */}
        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>Didn't receive the code? </Text>
          <TouchableOpacity>
            <Text style={styles.resendButton}>Resend</Text>
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
    alignItems: 'center',
    marginBottom: 30,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    marginTop: 20,
  },
  codeInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    fontSize: 24,
    textAlign: 'center',
    backgroundColor: '#F9FAFB',
  },
  verifyButton: {
    backgroundColor: '#2174EE',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  verifyButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  resendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  resendText: {
    color: '#6B7280',
    fontSize: 14,
  },
  resendButton: {
    color: '#2174EE',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default Verification;
