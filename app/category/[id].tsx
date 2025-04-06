import React from 'react';
import { ScrollView, View, TouchableOpacity, Image } from 'react-native';
import { Stack, useLocalSearchParams, router } from 'expo-router';
import { Text } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

interface Restaurant {
  id: number;
  name: string;
  type: string;
  image: any;
  isBookmarked?: boolean;
}

export default function CategoryDetails() {
  const { id, title } = useLocalSearchParams();

  const filterOptions = [
    { id: 'all', label: 'All' },
    { id: 'sort', label: 'Sort By' },
    { id: 'categories', label: 'Categories' },
    { id: 'free-delivery', label: 'Free Delivery' },
    { id: 'distance', label: 'Distance' },
  ];

  const cuisineTypes = [
    { id: 1, title: 'Continental', image: require('../../assets/images/dish1.jpeg') },
    { id: 2, title: 'Italian', image: require('../../assets/images/dish2.jpeg') },
    { id: 3, title: 'Japanese', image: require('../../assets/images/dish3.jpeg') },
    { id: 4, title: 'Mexican', image: require('../../assets/images/restaurantIcon.jpeg') },
  ];

  const popularRestaurants: Restaurant[] = [
    {
      id: 1,
      name: 'Limelight Restaurant',
      type: 'North Indian | Continental',
      image: require('../../assets/images/fine-dining.png'),
    },
    {
      id: 2,
      name: 'Green Garden Cafe',
      type: 'Italian | Continental',
      image: require('../../assets/images/dish1.jpeg'),
    },
  ];

  return (
    <>
      <Stack.Screen 
        options={{ 
          headerShown: false
        }} 
      />
      <ScrollView className="flex-1 bg-gray-50">
        <View className="flex-row justify-between items-center pt-12 px-4 pb-2">
          <View className="flex-row items-center">
            <TouchableOpacity 
              onPress={() => router.back()} 
              className="w-10 h-10 rounded-full bg-white justify-center items-center shadow-sm mr-4"
            >
              <Ionicons name="chevron-back" size={24} color="#333" />
            </TouchableOpacity>
            <Text className="text-2xl font-bold text-gray-800">{title}</Text>
          </View>
          <TouchableOpacity className="w-10 h-10 rounded-full bg-orange-100 justify-center items-center">
            <Ionicons name="search" size={22} color="#F97316" />
          </TouchableOpacity>
        </View>

        {/* Filter Options */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          className="px-2 py-4"
        >
          {filterOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              className={`px-4 py-2 rounded-full border mx-2 ${
                option.id === 'all' ? 'bg-blue-500 border-blue-500' : 'bg-white border-gray-200'
              }`}
            >
              <Text className={`${option.id === 'all' ? 'text-white' : 'text-gray-700'}`}>
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Cuisine Types */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          className="px-2 py-4"
        >
          {cuisineTypes.map((cuisine) => (
            <View key={cuisine.id} className="items-center mx-3">
              <View className="w-16 h-16 rounded-full overflow-hidden mb-2">
                <Image source={cuisine.image} className="w-full h-full" resizeMode="cover" />
              </View>
              <Text className="text-sm text-gray-700">{cuisine.title}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Popular Restaurants */}
        <View className="px-4">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-xl font-bold text-gray-800">Popular Restaurants</Text>
            <TouchableOpacity>
              <Text className="text-gray-500">See all</Text>
            </TouchableOpacity>
          </View>
          
          {popularRestaurants.map((restaurant) => (
            <TouchableOpacity 
              key={restaurant.id}
              className="bg-white rounded-2xl mb-4 overflow-hidden shadow-sm"
              onPress={() => router.push({
                pathname: '/restaurant/[id]',
                params: { id: restaurant.id }
              })}
            >
              <Image 
                source={restaurant.image} 
                className="w-full h-48"
                resizeMode="cover"
              />
              <View className="p-3">
                <Text className="text-lg font-bold text-gray-800">{restaurant.name}</Text>
                <Text className="text-sm text-gray-500">{restaurant.type}</Text>
              </View>
              <TouchableOpacity 
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white justify-center items-center"
              >
                <Ionicons 
                  name={restaurant.isBookmarked ? "bookmark" : "bookmark-outline"} 
                  size={18} 
                  color="#333" 
                />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </>
  );
} 