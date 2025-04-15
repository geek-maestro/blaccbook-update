import React from 'react';
import { ScrollView, View, TouchableOpacity, Image } from 'react-native';
import { Stack, router } from 'expo-router';
import { Text } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

import { SearchBar } from './components/SearchBar';
import { CategoryItem } from './components/CategoryItem';
import { PlaceCard } from './components/PlaceCard';
import { RestaurantCarousel } from './components/RestaurantCarousel';
import { getMerchants } from './api/utils/services/business.service';

export default function Gallery() {
  const { data:merchants, isLoading, isError } = getMerchants()
  const categories = [
    { id: 1, title: 'Pure Veg', image: require('../assets/images/restaurant.png') },
    { id: 2, title: 'Rooftop', image: require('../assets/images/fine-dining.png') },
    { id: 3, title: 'Buffet', image: require('../assets/images/food-menu.png') },
    { id: 4, title: 'Romantic', image: require('../assets/images/restaurantIcon.jpeg') },
    { id: 5, title: 'Fast Food', image: require('../assets/images/food-menu.png') },
    { id: 6, title: 'Fine Dining', image: require('../assets/images/fine-dining.png') },
  ];

  const carouselItems = [
    {
      id: 1,
      image: require('../assets/images/category-ad.png'),
    },
    {
      id: 2,
      image: require('../assets/images/dish1.jpeg'),
    },
    {
      id: 3,
      image: require('../assets/images/dish2.jpeg'),
    },
  ];

  const places = merchants

  // const places = [
  //   {
  //     title: '10 New Popular Cafes',
  //     subtitle: 'Trending this week',
  //     image: require('../assets/images/dish1.jpeg'),
  //   },
  //   {
  //     title: '8 Finest Microbreweries',
  //     subtitle: 'Best craft beers',
  //     image: require('../assets/images/dish2.jpeg'),
  //   },
  // ];

  return (
    <>
      <Stack.Screen 
        options={{ 
          headerShown: false
        }} 
      />
      <ScrollView className="flex-1 bg-gray-50" showsVerticalScrollIndicator={false}>
        <View className="pt-12 px-4 pb-2">
          <TouchableOpacity 
            onPress={() => router.back()} 
            className="w-10 h-10 rounded-full bg-white justify-center items-center shadow-sm"
          >
            <Ionicons name="chevron-back" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        <SearchBar />
        
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          className="px-2 py-4"
        >
          {categories.map((category) => (
            <CategoryItem
              key={category.id}
              id={category.id}
              title={category.title}
              image={category.image}
            />
          ))}
        </ScrollView>

        <RestaurantCarousel 
          restaurants={carouselItems} 
          dotColor="#4CAF50"
        />

        <View className="p-4">
          <Text className="text-xl font-bold text-gray-800 mb-4">Must Try Places</Text>
          <View className="flex-row flex-wrap justify-between">
            {places?.map((place, index) => (
              <PlaceCard
                key={index}
                title={place.name}
                subtitle={place.serviceTypes[0]}
                image={place.image}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
} 