import { View, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Container } from '~/components/Container';
import FormInput from '../components/FormInput';
import { Button } from '~/components/Button';
import { Text } from 'react-native-paper';
import { router } from 'expo-router';

const NewPassword = () => {
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
                  label="Enter New Password"
                  placeholder="Enter your email"
                  control={control}
                  rules={{ required: true }}
                  name="password"
                />
                <FormInput
                  label="Confirm New Password"
                  placeholder="Enter your password"
                  control={control}
                  rules={{ required: true, minLength: 8 }}
                  name="confirm_password"
                />
  
              </View>
  
              <View className="mt-10 w-full items-center gap-5">
                <Button className="bg-primary w-full rounded-xl" title="Next" onPress={() => router.push('/auth')} />
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </Container>
  )
}

export default NewPassword