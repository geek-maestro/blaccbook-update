import { View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import React from 'react';
import { Container } from '~/components/Container';
import { Text } from 'react-native-paper';
import FormInput from '../components/FormInput';
import { Button } from '~/components/Button';
import { useForm } from 'react-hook-form';
import { router } from 'expo-router';

const ForgotPassword = () => {
    const {
        control,
        formState: { errors },
      } = useForm({
        defaultValues: {
          email: '',
          password: '',
        },
      });
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
            Forgot Password
            </Text>

            <View className="mt-5">
              <FormInput
                label="Enter Email or Mobile"
                placeholder="Enter your email"
                control={control}
                rules={{ required: true }}
                name="email"
              />
              <View className="flex-row items-center gap-2">
                <Text>
                  A code will be sent to your phone.
                  <Text style={{ color: '#2174EE', marginLeft: 5 }}>
                    Please wait a while for the code to reach
                  </Text>
                </Text>
              </View>
            </View>

            <View className="mt-10 w-full items-center gap-5">
              <Button className="bg-primary w-full rounded-xl" title="Next" onPress={() => router.push('/auth/verification')} />

            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default ForgotPassword;
