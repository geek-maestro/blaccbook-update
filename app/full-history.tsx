import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Text } from 'react-native-paper';
import { Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

interface ActivityItem {
  id: string;
  name: string;
  date: string;
  amount: string;
  image: any;
  hasServiceReorder?: boolean;
}

export default function FullHistory() {
  const [selectedCategory, setSelectedCategory] = useState('Transport');
  
  const categories = [
    'Transport',
    'Take Out',
    'Hotels',
    'Health'
  ];

  const activities: ActivityItem[] = [
    {
      id: '1',
      name: 'Ice-cream Palce',
      date: '10-Mar 2023, 3:10PM',
      amount: 'S$15.00',
      image: require('../assets/images/restaurantIcon.jpeg'),
    },
    {
      id: '2',
      name: 'Clay Oven',
      date: '09-Mar 2023, 3:10PM',
      amount: 'S$30.00',
      image: require('../assets/images/dish1.jpeg'),
    },
    {
      id: '3',
      name: 'Bay Cleaning Service',
      date: '09-Mar 2023, 3:10PM',
      amount: 'S$15.00',
      image: require('../assets/images/dish2.jpeg'),
      hasServiceReorder: true,
    },
    {
      id: '4',
      name: 'Payment Received-Bay...',
      date: '09-Mar 2023, 3:10PM',
      amount: 'S$15.00',
      image: require('../assets/images/restaurantIcon.jpeg'),
      hasServiceReorder: true,
    },
    {
      id: '5',
      name: 'Delivery service',
      date: '10-Mar 2023, 3:10PM',
      amount: 'S$10.00',
      image: require('../assets/images/restaurantIcon.jpeg'),
    },
    {
      id: '6',
      name: 'Bay Hotel',
      date: '09-Mar 2023, 3:10PM',
      amount: 'S$30.00',
      image: require('../assets/images/dish1.jpeg'),
    },
    {
      id: '7',
      name: 'Mister Cutt',
      date: '09-Mar 2023, 3:10PM',
      amount: 'S$15.00',
      image: require('../assets/images/dish2.jpeg'),
      hasServiceReorder: true,
    },
    {
      id: '8',
      name: 'Chicken Inn',
      date: '09-Mar 2023, 3:10PM',
      amount: 'S$15.00',
      image: require('../assets/images/restaurantIcon.jpeg'),
      hasServiceReorder: true,
    },
  ];

  return (
    <View className="flex-1 bg-gray-50">
      <Stack.Screen 
        options={{ 
          headerShown: false
        }} 
      />

      {/* Header with back button */}
      <View className="pt-12 px-4 pb-4 bg-white">
        <View className="flex-row items-center">
          <TouchableOpacity 
            onPress={() => router.back()}
            className="mr-4"
          >
            <Ionicons name="chevron-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text className="text-xl font-medium">Activity</Text>
        </View>
      </View>

      {/* Categories */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        className="px-4 py-3 bg-white border-b border-gray-100"
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            onPress={() => setSelectedCategory(category)}
            className={`px-5 py-2.5 rounded-full mr-3 ${
              selectedCategory === category 
                ? 'bg-blue-500 shadow-sm' 
                : 'bg-gray-50 border border-gray-200'
            }`}
          >
            <Text 
              className={`${
                selectedCategory === category 
                  ? 'text-white font-medium' 
                  : 'text-gray-600'
              } text-sm`}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Activity List */}
      <ScrollView className="flex-1 px-4">
        {activities.map((activity) => (
          <View 
            key={activity.id}
            className="flex-row items-center justify-between py-4 border-b border-gray-100"
          >
            <View className="flex-row items-center flex-1">
              <Image 
                source={activity.image}
                className="w-12 h-12 rounded-full"
              />
              <View className="ml-3 flex-1">
                <Text className="text-gray-900 font-medium">{activity.name}</Text>
                <Text className="text-gray-500 text-sm">{activity.date}</Text>
                <View className="flex-row mt-1">
                  <TouchableOpacity>
                    <Text className="text-blue-500 mr-4">Rate</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text className="text-blue-500">
                      {activity.hasServiceReorder ? 'Service Reorder' : 'Reorder'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Text className="text-gray-900 font-medium">{activity.amount}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
} 