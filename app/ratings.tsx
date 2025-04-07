import React from 'react';
import { View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Text } from 'react-native-paper';
import { Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

interface Review {
  id: string;
  name: string;
  initial: string;
  rating: number;
  timeAgo: string;
  comment: string;
  order?: string;
  backgroundColor: string;
}

export default function Ratings() {
  const overallRating = 4.4;
  const totalRatings = "2904";
  
  const reviews: Review[] = [
    {
      id: '1',
      name: 'Davida T.',
      initial: 'D',
      rating: 3,
      timeAgo: '17 hours ago',
      comment: 'I requested for two scoops of ice-cream but i',
      backgroundColor: '#FFA500',
    },
    {
      id: '2',
      name: 'Jerlyn T.',
      initial: 'J',
      rating: 5,
      timeAgo: '26 days ago',
      comment: 'The service was fast. Exactly what I expected!',
      order: 'Sorbet',
      backgroundColor: '#4169E1',
    },
    {
      id: '3',
      name: 'Samuel S.',
      initial: 'S',
      rating: 2,
      timeAgo: '27 days ago',
      comment: 'The customer service wasn\'t the best',
      order: 'Gelato, Sorbet',
      backgroundColor: '#2E8B57',
    },
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Ionicons
        key={index}
        name="star"
        size={16}
        color={index < rating ? '#FFD700' : '#E5E7EB'}
      />
    ));
  };

  return (
    <View className="flex-1 bg-gray-50">
      <Stack.Screen 
        options={{ 
          headerShown: false
        }} 
      />

      {/* Header */}
      <View className="pt-12 px-4 pb-4 bg-white">
        <View className="flex-row items-center">
          <TouchableOpacity 
            onPress={() => router.back()}
            className="mr-4"
          >
            <Ionicons name="chevron-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text className="text-xl font-medium">Rating and Reviews</Text>
        </View>
      </View>

      {/* Rating Overview */}
      <View className="bg-white px-4 py-6">
        <View className="flex-row items-baseline">
          <Text className="text-4xl font-bold">{overallRating}</Text>
          <View className="flex-row ml-4">
            {renderStars(Math.floor(overallRating))}
          </View>
        </View>
        <Text className="text-gray-500 mt-1">{totalRatings} ratings</Text>
        
        {/* Rating Distribution */}
        <View className="mt-4">
          {[5, 4, 3, 2, 1].map((star) => (
            <View key={star} className="flex-row items-center mb-1">
              <Text className="w-3 text-gray-600">{star}</Text>
              <View className="flex-1 h-2 bg-gray-200 ml-2 rounded-full overflow-hidden">
                <View 
                  className="h-full bg-yellow-400 rounded-full"
                  style={{ 
                    width: star === 5 ? '70%' : 
                           star === 4 ? '45%' : 
                           star === 3 ? '25%' : 
                           star === 2 ? '15%' : '5%' 
                  }}
                />
              </View>
            </View>
          ))}
        </View>

        <View className="flex-row mt-4">
          <TouchableOpacity 
            className="bg-gray-100 rounded-full px-4 py-2 mr-3"
          >
            <Text className="text-gray-800">Latest</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            className="bg-gray-100 rounded-full px-4 py-2"
          >
            <Text className="text-gray-800">Written Reviews</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Reviews Section */}
      <View className="mt-4 bg-white px-4 py-2">
        <Text className="text-lg font-medium mb-4">From Other</Text>
        <ScrollView>
          {reviews.map((review) => (
            <View key={review.id} className="mb-6">
              <View className="flex-row items-center">
                <View 
                  style={{ backgroundColor: review.backgroundColor }}
                  className="w-10 h-10 rounded-full items-center justify-center"
                >
                  <Text className="text-white font-medium text-lg">
                    {review.initial}
                  </Text>
                </View>
                <View className="ml-3">
                  <Text className="font-medium">{review.name}</Text>
                  <View className="flex-row items-center">
                    <View className="flex-row">
                      {renderStars(review.rating)}
                    </View>
                    <Text className="text-gray-500 text-sm ml-2">
                      • {review.timeAgo}
                    </Text>
                  </View>
                </View>
              </View>
              
              <Text className="mt-2 text-gray-600">{review.comment}</Text>
              {review.order && (
                <Text className="text-gray-500 text-sm mt-1">
                  Ordered: {review.order}
                </Text>
              )}
              
              <View className="flex-row justify-between items-center mt-3">
                <TouchableOpacity className="flex-row items-center">
                  <Ionicons name="thumbs-up-outline" size={18} color="#666" />
                  <Text className="text-gray-600 ml-1">Helpful?</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text className="text-blue-500">Order this</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
} 