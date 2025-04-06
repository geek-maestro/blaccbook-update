import React, { useState } from 'react';
import { View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Text } from 'react-native-paper';
import { Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function ReservationDetails() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  return (
    <View className="flex-1 bg-white">
      <Stack.Screen 
        options={{ 
          headerShown: false
        }} 
      />
      
      {/* Header with Back Button */}
      <View className="pt-12 px-4 pb-4 border-b border-gray-200">
        <View className="flex-row items-center">
          <TouchableOpacity 
            onPress={() => router.back()}
            className="mr-4"
          >
            <Ionicons name="chevron-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text className="text-xl">Your Reservation</Text>
        </View>
      </View>

      <ScrollView className="flex-1">
        {/* Map View */}
        <View className="h-48 bg-gray-100 mb-6">
          {/* Map component will go here */}
        </View>

        {/* Restaurant Info */}
        <View className="px-4 mb-6">
          <Text className="text-lg font-semibold mb-1">Limelight-Royal Orchid Hotel</Text>
          <Text className="text-gray-600">Height-Ashbury-Balboa St</Text>
          <View className="flex-row items-center mt-2">
            <Ionicons name="people-outline" size={16} color="#666" />
            <Text className="text-gray-600 ml-1">05 Guest</Text>
            <Text className="text-gray-400 mx-2">•</Text>
            <Ionicons name="calendar-outline" size={16} color="#666" />
            <Text className="text-gray-600 ml-1">Tuesday 13 Apr</Text>
            <Text className="text-gray-400 mx-2">•</Text>
            <Ionicons name="time-outline" size={16} color="#666" />
            <Text className="text-gray-600 ml-1">07:00PM</Text>
          </View>
        </View>

        {/* Form */}
        <View className="px-4">
          <View className="mb-4">
            <Text className="text-gray-600 mb-2">Name</Text>
            <TextInput
              value={formData.name}
              onChangeText={(text) => setFormData(prev => ({ ...prev, name: text }))}
              placeholder="Enter your name"
              className="border border-gray-200 rounded-lg p-3 text-gray-700"
            />
          </View>

          <View className="mb-4">
            <Text className="text-gray-600 mb-2">Email</Text>
            <TextInput
              value={formData.email}
              onChangeText={(text) => setFormData(prev => ({ ...prev, email: text }))}
              placeholder="Enter your email"
              keyboardType="email-address"
              className="border border-gray-200 rounded-lg p-3 text-gray-700"
            />
          </View>

          <View className="mb-4">
            <Text className="text-gray-600 mb-2">Phone Number</Text>
            <View className="flex-row border border-gray-200 rounded-lg overflow-hidden">
              <View className="border-r border-gray-200 px-3 py-3 bg-gray-50">
                <Text>🇺🇸 +1</Text>
              </View>
              <TextInput
                value={formData.phoneNumber}
                onChangeText={(text) => setFormData(prev => ({ ...prev, phoneNumber: text }))}
                placeholder="Enter your phone number"
                keyboardType="phone-pad"
                className="flex-1 p-3 text-gray-700"
              />
            </View>
          </View>

          <View className="mb-4">
            <Text className="text-gray-600 mb-2">Add Instructions to restaurant</Text>
            <TouchableOpacity className="border border-gray-200 rounded-lg p-3">
              <Text className="text-gray-400">Optional</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Button */}
      <View className="px-4 py-4 border-t border-gray-200">
        <TouchableOpacity 
          onPress={() => router.push('/confirm-reservation')}
          className="bg-blue-500 py-4 rounded-xl items-center justify-center"
        >
          <Text className="text-white text-[15px]">Confirm Booking</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
} 