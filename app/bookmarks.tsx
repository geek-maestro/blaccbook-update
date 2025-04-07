import React from 'react';
import { View, TouchableOpacity, ScrollView, Image, ImageBackground } from 'react-native';
import { Text } from 'react-native-paper';
import { Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

interface Bookmark {
  id: string;
  userName: string;
  userImage: any;
  lastUpdated: string;
  places: number;
}

export default function Bookmarks() {
  const bookmarks: Bookmark[] = [
    {
      id: '1',
      userName: 'John Mobbin',
      userImage: { uri: 'https://example.com/placeholder.jpg' },
      lastUpdated: 'Updated an hour ago',
      places: 0
    }
  ];

  return (
    <View className="flex-1 bg-white">
      <Stack.Screen 
        options={{ 
          headerShown: false
        }} 
      />

      {/* Header Image */}
      <ImageBackground
        source={{ uri: 'https://example.com/restaurant-bg.jpg' }}
        className="h-48"
      >
        <View className="flex-row justify-between items-start p-4 pt-12">
          <TouchableOpacity 
            onPress={() => router.back()}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm justify-center items-center"
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity 
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm justify-center items-center"
          >
            <Ionicons name="share-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <Text className="text-white text-3xl font-bold px-4 mt-4">
          Collections
        </Text>
      </ImageBackground>

      {/* My Bookmarks Section */}
      <View className="p-4">
        <Text className="text-lg font-semibold mb-4">My Bookmarks</Text>
        {bookmarks.map(bookmark => (
          <View key={bookmark.id} className="flex-row items-center justify-between py-2">
            <View className="flex-row items-center">
              <Image 
                source={bookmark.userImage}
                className="w-12 h-12 rounded-full"
              />
              <View className="ml-3">
                <Text className="text-base font-medium">{bookmark.userName}</Text>
                <Text className="text-sm text-gray-500">{bookmark.lastUpdated}</Text>
              </View>
            </View>
            <View className="flex-row items-center">
              <Text className="text-sm text-gray-500">{bookmark.places} place</Text>
              <TouchableOpacity className="ml-2">
                <Ionicons name="chevron-forward" size={20} color="#666" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      {/* Sort Options */}
      <View className="px-4 mt-2">
        <TouchableOpacity 
          className="flex-row items-center justify-between py-3 border-t border-gray-100"
        >
          <Text className="text-blue-500">Distance from me</Text>
          <Ionicons name="chevron-down" size={20} color="#2563EB" />
        </TouchableOpacity>
      </View>
    </View>
  );
} 