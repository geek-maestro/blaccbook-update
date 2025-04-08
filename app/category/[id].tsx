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
      <ScrollView style={{ flex: 1, backgroundColor: '#f9fafb' }}>
        <View style={{ 
          flexDirection: 'row', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          paddingTop: 48,
          paddingHorizontal: 16,
          paddingBottom: 8
        }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity 
              onPress={() => router.back()} 
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.1,
                shadowRadius: 2,
                elevation: 2,
                marginRight: 16
              }}
            >
              <Ionicons name="chevron-back" size={24} color="#333" />
            </TouchableOpacity>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#1f2937' }}>{title}</Text>
          </View>
          <TouchableOpacity style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: '#fff7ed',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Ionicons name="search" size={22} color="#F97316" />
          </TouchableOpacity>
        </View>

        {/* Filter Options */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={{ paddingHorizontal: 8, paddingVertical: 16 }}
        >
          {filterOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={{
                paddingHorizontal: 16,
                paddingVertical: 8,
                borderRadius: 20,
                borderWidth: 1,
                marginHorizontal: 8,
                backgroundColor: option.id === 'all' ? '#3b82f6' : '#fff',
                borderColor: option.id === 'all' ? '#3b82f6' : '#e5e7eb'
              }}
            >
              <Text style={{
                color: option.id === 'all' ? '#fff' : '#374151'
              }}>
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Cuisine Types */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={{ paddingHorizontal: 8, paddingVertical: 16 }}
        >
          {cuisineTypes.map((cuisine) => (
            <View key={cuisine.id} style={{ alignItems: 'center', marginHorizontal: 12 }}>
              <View style={{ 
                width: 64, 
                height: 64, 
                borderRadius: 32, 
                overflow: 'hidden',
                marginBottom: 8
              }}>
                <Image 
                  source={cuisine.image} 
                  style={{ width: '100%', height: '100%' }} 
                  resizeMode="cover" 
                />
              </View>
              <Text style={{ fontSize: 14, color: '#374151' }}>{cuisine.title}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Popular Restaurants */}
        <View style={{ paddingHorizontal: 16 }}>
          <View style={{ 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: 16
          }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#1f2937' }}>
              Popular Restaurants
            </Text>
            <TouchableOpacity>
              <Text style={{ color: '#6b7280' }}>See all</Text>
            </TouchableOpacity>
          </View>
          
          {popularRestaurants.map((restaurant) => (
            <TouchableOpacity 
              key={restaurant.id}
              style={{
                backgroundColor: '#fff',
                borderRadius: 16,
                marginBottom: 16,
                overflow: 'hidden',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.1,
                shadowRadius: 2,
                elevation: 2
              }}
              onPress={() => router.push({
                pathname: '/restaurant/[id]',
                params: { id: restaurant.id }
              })}
            >
              <Image 
                source={restaurant.image} 
                style={{ width: '100%', height: 192 }}
                resizeMode="cover"
              />
              <View style={{ padding: 12 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#1f2937' }}>
                  {restaurant.name}
                </Text>
                <Text style={{ fontSize: 14, color: '#6b7280' }}>{restaurant.type}</Text>
              </View>
              <TouchableOpacity 
                style={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  width: 32,
                  height: 32,
                  borderRadius: 16,
                  backgroundColor: '#fff',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
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