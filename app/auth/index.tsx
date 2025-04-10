import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { Container } from '~/components/Container';
import { Checkbox, Text } from 'react-native-paper';
import FormInput from '../components/FormInput';
import { useForm } from 'react-hook-form';
import { Button } from '~/components/Button';
import { router } from 'expo-router';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  //   const handleSubmit = (data) = console.log(data);
  return (
    <Container>
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView
          className="flex-1"
          contentContainerClassName="py-5"
          showsVerticalScrollIndicator={false}>
          <View className="mt-5 flex-1 px-1">
            <Text variant="headlineMedium" style={{ fontWeight: 'bold' }}>
              Welcome Back,
            </Text>
            <Text>
              Login to your BlaccBook <Text style={{ color: '#2174EE' }}>account</Text>
            </Text>

            <View className="mt-5 gap-5">
              <FormInput
                label="Enter Email or Mobile"
                placeholder="Enter your email"
                control={control}
                rules={{ required: true }}
                name="email"
              />
              <FormInput
                label="Password"
                placeholder="Enter your password"
                control={control}
                rules={{ required: true, minLength: 8 }}
                name="password"
              />

              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center">
                  <Checkbox
                    status={showPassword ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                  <Text variant="labelSmall">Show Password</Text>
                </View>

                <TouchableOpacity onPress={() => router.push('/auth/forgotPassword')}>
                  <Text style={{ color: '#2174EE' }} variant="bodyMedium">
                    Forgot Password
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View className="mt-10 w-full items-center gap-5">
              <Button
                className="w-full rounded-xl bg-primary"
                title="Login"
                onPress={() => router.push('/tabs')}
              />
              <Text variant="bodyMedium" className="font-bold">
                OR
              </Text>
              <Text>Sign in with</Text>

              <View className="flex-row items-center gap-2">
                <Text>Don't have an account?</Text>
                <TouchableOpacity>
                  <Text style={{ color: '#2174EE' }}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default Login;
