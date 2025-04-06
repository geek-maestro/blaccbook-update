import React from 'react';
import { View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Text } from 'react-native-paper';
import { router, Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

interface ActivityItem {
  id: string;
  name: string;
  date: string;
  amount: string;
  image: any;
  hasServiceReorder?: boolean;
}

export default function History() {
  const recentActivities: ActivityItem[] = [
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
  ];

  return (
    <View className="flex-1 bg-gray-50">
      <Stack.Screen 
        options={{ 
          headerShown: false
        }} 
      />

      {/* Header */}
      <View className="pt-12 px-4 pb-4 bg-white">
        <View className="flex-row justify-between items-center">
          <Text className="text-2xl font-bold text-gray-900">Activity</Text>
          <TouchableOpacity className="bg-blue-50 px-4 py-2 rounded-full flex-row items-center">
            <Ionicons name="time-outline" size={16} color="#2563eb" />
            <TouchableOpacity onPress={() => router.push('/full-history')}>
              <Text className="text-blue-600 ml-1">History</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 px-4">
        {/* Recent Section */}
        <View className="mt-6">
          <Text className="text-gray-600 mb-4">Recent</Text>
          
          {recentActivities.map((activity) => (
            <View 
              key={activity.id}
              className="flex-row items-center justify-between mb-6"
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
        </View>

        {/* View Full History Button */}
        <TouchableOpacity className="mt-2 mb-6">
          <Text className="text-blue-500 text-center">
            View Full History <Ionicons name="arrow-forward" size={14} color="#3b82f6" />
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
} 