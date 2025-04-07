import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

interface CategoryRating {
  name: string;
  rating: number;
  labels: {
    start: string;
    end: string;
  };
}

export default function DetailedRating() {
  const [overallRating, setOverallRating] = useState(0);
  const [review, setReview] = useState('');
  const [categoryRatings, setCategoryRatings] = useState<CategoryRating[]>([
    { name: 'Taste', rating: 0, labels: { start: 'Bad', end: 'Great' } },
    { name: 'Portion', rating: 0, labels: { start: 'Not Much', end: 'Enough' } },
    { name: 'Packaging', rating: 0, labels: { start: 'Bad', end: 'Great' } },
  ]);

  const handleCategoryRating = (index: number, rating: number) => {
    const newRatings = [...categoryRatings];
    newRatings[index] = { ...newRatings[index], rating };
    setCategoryRatings(newRatings);
  };

  const renderStars = (rating: number, onRate: (r: number) => void) => {
    return [...Array(5)].map((_, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => onRate(index + 1)}
        className="mx-1"
      >
        <Ionicons
          name={index < rating ? "star" : "star-outline"}
          size={24}
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

      <ScrollView className="flex-1 px-4">
        {/* Overall Rating */}
        <View className="items-center mt-6 mb-8">
          <View className="flex-row">
            {renderStars(overallRating, setOverallRating)}
          </View>
          <Text className="text-xl font-medium mt-4">
            How Great was it ?
          </Text>
        </View>

        {/* Category Ratings */}
        <View className="space-y-4">
          {categoryRatings.map((category, index) => (
            <View
              key={category.name}
              className="bg-gray-50 p-4 rounded-xl"
            >
              <View className="flex-row justify-between items-center mb-2">
                <Text className="text-gray-800">{category.name}</Text>
                <View className="flex-row">
                  {renderStars(
                    category.rating,
                    (r) => handleCategoryRating(index, r)
                  )}
                </View>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-gray-500 text-sm">{category.labels.start}</Text>
                <Text className="text-gray-500 text-sm">{category.labels.end}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Review Input */}
        <View className="mt-6">
          <TextInput
            className="bg-gray-50 p-4 rounded-xl h-32 text-gray-800"
            placeholder="Let people know about your purchase"
            multiline
            textAlignVertical="top"
            value={review}
            onChangeText={setReview}
          />
        </View>

        {/* Footer */}
        <View className="flex-row items-center mt-4 mb-2">
          <Ionicons name="information-circle-outline" size={16} color="#666" />
          <Text className="text-gray-500 ml-1">
            Review will appear publicly
          </Text>
        </View>

        {/* Submit Button */}
        <Button
          mode="contained"
          onPress={() => {
            // Handle submission
            router.push('/rating-success');
          }}
          className="mt-4 mb-8 rounded-full"
          buttonColor="#2563EB"
        >
          Submit
        </Button>
      </ScrollView>
    </View>
  );
} 