import { View, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import React from 'react';
import { Container } from '~/components/Container';
import FormInput from '../components/FormInput';
import { Button } from '~/components/Button';
import { OtpInput } from 'react-native-otp-entry';
import { router } from 'expo-router';
import { Text } from 'react-native-paper';

const Verification = () => {
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
              <Text>Enter OTP</Text>
              <OtpInput
                numberOfDigits={4}
                focusColor="white"
                placeholder="-"
                blurOnFilled={true}
                type="numeric"
                theme={{
                  containerStyle: {
                    marginTop: 20,
                    justifyContent: 'space-evenly',
                  },
                  pinCodeContainerStyle: {
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: '#00000005',
                    height: 50,
                    width: 50,
                    margin: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#F3F8FF'
                  },
                  pinCodeTextStyle: {
                    color: 'black',
                    fontSize: 20,
                    fontWeight: 'bold',
                  },
                }}
              />
              <View className="flex-row items-center gap-2">
                <Text style = {{ color: '#5F686F'}}>
                Enter the One Time Password sent to your phone.
                </Text>
              </View>
            </View>

            <View className="mt-10 w-full items-center gap-5">
              <Button className="bg-primary w-full rounded-xl" title="Next" onPress={() => router.push('/auth/newPassword')} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default Verification;
