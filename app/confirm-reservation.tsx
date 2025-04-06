import React from 'react';
import { View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import { Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function ConfirmReservation() {
  const bookingDetails = {
    bookingId: '100378445674',
    hotelName: 'Limelight-Royal Orchid Hotel',
    guestCount: '03',
    dateTime: 'Tuesday | 13 Apr | 07:00PM',
  };

  return (
    <View className="flex-1 bg-white">
      <Stack.Screen 
        options={{ 
          headerShown: false
        }} 
      />

      {/* Header with close button */}
      <View className="items-end p-4 pt-12">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="close" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-4">
        <View className="items-center">
          {/* Circular Image */}
          <View className="w-28 h-28 rounded-full overflow-hidden mb-6">
            <Image 
              source={require('../assets/images/restaurantIcon.jpeg')}
              className="w-full h-full"
              resizeMode="cover"
            />
          </View>

          {/* Confirmation Text */}
          <Text className="text-xl font-semibold mb-6">Booking Confirmed!!</Text>

          {/* Booking Details */}
          <View className="w-full">
            {/* Booking ID Section */}
            <View className="mb-4 border-b border-gray-100 pb-4">
              <Text className="text-gray-600 text-sm">Booking ID</Text>
              <Text className="text-gray-800">#{bookingDetails.bookingId}</Text>
            </View>

            {/* Hotel Details Section */}
            <View className="mb-4 border-b border-gray-100 pb-4">
              <Text className="text-gray-800 font-medium">{bookingDetails.hotelName}</Text>
              <Text className="text-gray-500">#{bookingDetails.bookingId}</Text>
            </View>

            {/* Reservation Details Section */}
            <View className="mb-6">
              <View className="flex-row items-center mb-2">
                <Ionicons name="people-outline" size={18} color="#666" />
                <Text className="text-gray-600 ml-2">{bookingDetails.guestCount} Guest</Text>
              </View>

              <View className="flex-row items-center">
                <Ionicons name="calendar-outline" size={18} color="#666" />
                <Text className="text-gray-600 ml-2">{bookingDetails.dateTime}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Action Buttons */}
      <View className="px-4 py-6">
        <TouchableOpacity 
          className="bg-blue-500 py-4 rounded-xl items-center justify-center mb-3"
          onPress={() => {
            // Handle modify booking
          }}
        >
          <Text className="text-white text-[15px]">Modify Booking</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          className="border border-gray-200 py-4 rounded-xl items-center justify-center"
          onPress={() => {
            // Handle cancel booking
          }}
        >
          <Text className="text-gray-700 text-[15px]">Cancel Booking</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
