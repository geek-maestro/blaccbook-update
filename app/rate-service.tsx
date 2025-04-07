import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function RateService() {
  const [rating, setRating] = useState(0);
  const storeName = "Ice-Cream Palace";

  const renderStars = () => {
    return [...Array(5)].map((_, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => setRating(index + 1)}
        className="mx-1"
      >
        <Ionicons
          name={index < rating ? "star" : "star-outline"}
          size={40}
          color={index < rating ? "#FFD700" : "#D1D5DB"}
        />
      </TouchableOpacity>
    ));
  };

  return (
    <View className="flex-1 bg-white">
      <Stack.Screen 
        options={{ 
          headerShown: false
        }} 
      />

      {/* Header */}
      <View className="pt-12 px-4 flex-row justify-between items-center">
        <TouchableOpacity 
          onPress={() => router.back()}
          className="p-2"
        >
          <Ionicons name="close" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center">
          <Ionicons name="help-circle-outline" size={20} color="#666" />
          <Text className="text-gray-600 ml-1">Help and support</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View className="flex-1 items-center px-6">
        {/* Store Icon */}
        <View className="mt-12 bg-gray-100 w-24 h-24 rounded-full items-center justify-center">
          <Ionicons name="storefront-outline" size={40} color="#666" />
        </View>

        {/* Rating Section */}
        <View className="mt-8 items-center">
          <Text className="text-2xl font-medium text-gray-900">
            Rate our service
          </Text>
          <Text className="text-gray-500 text-center mt-2 text-base">
            How did you like the service and items{'\n'}
            purchased from {storeName}
          </Text>
        </View>

        {/* Star Rating */}
        <View className="flex-row mt-8">
          {renderStars()}
        </View>

        {/* Footer Note */}
        <View className="flex-row items-center mt-8">
          <Ionicons name="information-circle-outline" size={16} color="#666" />
          <Text className="text-gray-500 ml-1">
            Review will appear publicly
          </Text>
        </View>
      </View>
    </View>
  );
} 