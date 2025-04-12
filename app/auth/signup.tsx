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
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { Icons } from '../../components/Icons';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [getEmails, setGetEmails] = useState(false);

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

        {/* Form */}
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Enter First Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your first name"
              value={firstName}
              onChangeText={setFirstName}
              mode="outlined"
              outlineColor="#E5E7EB"
              activeOutlineColor="#2174EE"
              left={<TextInput.Icon icon="account" color="#6B7280" />}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Enter Last Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your last name"
              value={lastName}
              onChangeText={setLastName}
              mode="outlined"
              outlineColor="#E5E7EB"
              activeOutlineColor="#2174EE"
              left={<TextInput.Icon icon="account" color="#6B7280" />}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Enter Email</Text>
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
              left={<TextInput.Icon icon="lock" color="#6B7280" />}
            />
          </View>

          <View style={styles.checkboxContainer}>
            <TouchableOpacity
              style={[styles.checkbox, getEmails && styles.checkboxChecked]}
              onPress={() => setGetEmails(!getEmails)}
            />
            <Text style={styles.checkboxText}>
              Get emails about new businesses and promotional materials. Unsubscribe anytime.
            </Text>
          </View>
        </View>

        {/* Next Button */}
        <TouchableOpacity 
          style={styles.nextButton}
          onPress={() => router.push('/tabs')}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>

        {/* Or Divider */}
        <View style={styles.orContainer}>
          <Text style={styles.orText}>Or</Text>
        </View>

        {/* Social Sign Up */}
        <View style={styles.socialContainer}>
          <Text style={styles.signUpWithText}>Sign Up with</Text>
          <View style={styles.socialIcons}>
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesome5 name="facebook" size={24} color="#1877F2" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Icons.Google.Colored size={24} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesome5 name="apple" size={24} color="black" />
            </TouchableOpacity>
          </View>
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    marginTop: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#D1D5DB',
    marginTop: 2,
  },
  checkboxChecked: {
    backgroundColor: '#2174EE',
    borderColor: '#2174EE',
  },
  checkboxText: {
    flex: 1,
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  nextButton: {
    backgroundColor: '#2174EE',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  nextButtonText: {
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
  signUpWithText: {
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
});

export default Signup; 