import React, { useState } from 'react';
import { View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Text } from 'react-native-paper';
import { Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

interface FoodCategory {
  id: string;
  name: string;
  image: any;
  selected: boolean;
}

export default function Preferences() {
  const [categories, setCategories] = useState<FoodCategory[]>([
    {
      id: '1',
      name: 'Pizza',
      image: require('../assets/images/dish1.jpeg'),
      selected: false
    },
    {
      id: '2',
      name: 'Coffee',
      image: require('../assets/images/dish2.jpeg'),
      selected: false
    },
    {
      id: '3',
      name: 'Bakery',
      image: require('../assets/images/restaurantIcon.jpeg'),
      selected: false
    },
    {
      id: '4',
      name: 'Meat',
      image: require('../assets/images/dish1.jpeg'),
      selected: false
    },
    {
      id: '5',
      name: 'Bubble Tea',
      image: require('../assets/images/dish2.jpeg'),
      selected: false
    },
    {
      id: '6',
      name: 'Ice-Cream',
      image: require('../assets/images/restaurantIcon.jpeg'),
      selected: false
    },
    {
      id: '7',
      name: 'Cupcakes',
      image: require('../assets/images/dish1.jpeg'),
      selected: false
    }
  ]);

  const toggleCategory = (id: string) => {
    setCategories(categories.map(category => 
      category.id === id 
        ? { ...category, selected: !category.selected }
        : category
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
      <View className="pt-12 px-4 pb-4">
        <View className="flex-row justify-between items-center">
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
      </View>

      {/* Content */}
      <ScrollView className="px-4">
        {/* Heart Icon */}
        <View className="items-center mt-4">
          <View className="w-12 h-12 rounded-full bg-blue-100 items-center justify-center">
            <Ionicons name="heart-outline" size={24} color="#2563EB" />
          </View>
        </View>

        {/* Title and Description */}
        <View className="items-center mt-4">
          <Text className="text-2xl font-semibold text-gray-900">
            See more of what you love
          </Text>
          <Text className="text-gray-600 text-center mt-2 px-6">
            Your selections would help us give you better results and recommendations when you explore on Blaccbook
          </Text>
        </View>

        {/* Categories Section */}
        <View className="mt-6">
          <Text className="text-gray-900 font-medium mb-4">
            FOOD & DRINKS
          </Text>
          
          <View className="flex-row flex-wrap justify-between">
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                className="w-[31%] mb-4"
                onPress={() => toggleCategory(category.id)}
              >
                <View className="relative">
                  <Image
                    source={category.image}
                    className="w-full h-24 rounded-xl"
                  />
                  {category.selected && (
                    <View className="absolute top-2 right-2 bg-blue-500 rounded-full p-1">
                      <Ionicons name="checkmark" size={16} color="white" />
                    </View>
                  )}
                </View>
                <Text className="text-gray-800 text-center mt-1">
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Add Preference Button */}
        <TouchableOpacity 
          className="mt-4 mb-8 py-3 bg-gray-100 rounded-xl"
          onPress={() => {
            // Handle adding preference
            router.back();
          }}
        >
          <Text className="text-center text-gray-800">
            Add preference
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
} 