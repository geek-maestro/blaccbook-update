import React, { useState } from 'react';
import { ScrollView, View, TouchableOpacity, Image } from 'react-native';
import { Stack, useLocalSearchParams, router } from 'expo-router';
import { Text } from 'react-native-paper';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { BookingModal } from '../components/BookingModal';

type IconName = 'call-outline' | 'map-outline' | 'globe-outline' | 'document-text-outline' | 'trending-up-outline';
type MaterialIconName = 'rate-review' | 'add-photo-alternate' | 'check-circle-outline' | 'directions' | 'menu-book' | 'arrow-outward' | 'chevron-right';

interface ActionButton {
  id: string;
  icon: IconName;
  label: string;
}

interface RecommendationAction {
  id: string;
  icon: MaterialIconName;
  label: string;
}

export default function RestaurantDetails() {
  const { id } = useLocalSearchParams();
  const [isBookingModalVisible, setIsBookingModalVisible] = useState(false);

  const actionButtons: ActionButton[] = [
    { id: 'call', icon: 'call-outline', label: 'Call' },
    { id: 'map', icon: 'map-outline', label: 'View Map' },
    { id: 'web', icon: 'globe-outline', label: 'Website' },
    { id: 'menu', icon: 'document-text-outline', label: 'Menu' },
    { id: 'invest', icon: 'trending-up-outline', label: 'Invest' },
  ];

  const recommendationActions: RecommendationAction[] = [
    { id: 'review', icon: 'rate-review', label: 'Add Review' },
    { id: 'photo', icon: 'add-photo-alternate', label: 'Add Photo' },
    { id: 'checkin', icon: 'check-circle-outline', label: 'Check-in' },
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Ionicons 
          key={i}
          name={i <= rating ? "star" : "star-outline"} 
          size={16} 
          color="#FFD700" 
        />
      );
    }
    return stars;
  };

  return (
    <>
      <Stack.Screen 
        options={{ 
          headerShown: false
        }} 
      />
      <ScrollView className="flex-1 bg-white">
        {/* Header Image with Overlay Text */}
        <View className="relative h-72">
          <Image 
            source={require('../../assets/images/fine-dining.png')}
            className="w-full h-full"
            resizeMode="cover"
          />
          {/* Dark overlay gradient */}
          <View className="absolute inset-0 bg-black/30" />
          
          {/* Top buttons */}
          <View className="absolute top-12 left-4 right-4 flex-row justify-between items-center">
            <TouchableOpacity 
              onPress={() => router.back()} 
              className="w-10 h-10 rounded-full bg-white justify-center items-center"
            >
              <Ionicons name="chevron-back" size={24} color="#333" />
            </TouchableOpacity>
            <TouchableOpacity className="w-10 h-10 rounded-full bg-white justify-center items-center">
              <Ionicons name="bookmark-outline" size={20} color="#333" />
            </TouchableOpacity>
          </View>

          {/* Restaurant name and rating */}
          <View className="absolute bottom-24 left-4 right-4">
            <Text className="text-3xl font-bold text-white">Limelight</Text>
            <Text className="text-3xl font-bold text-white">Restaurant</Text>
            <View className="flex-row items-center justify-between mt-1">
              <View className="flex-row items-center gap-1">
                {renderStars(4)}
                <Text className="ml-1 text-white">4.0</Text>
              </View>
              <Text className="text-white underline">See All 1,000</Text>
            </View>
          </View>

          {/* Restaurant Status Card - Overlapping */}
          <View className="absolute -bottom-28 left-4 right-4">
            <View className="bg-white rounded-xl p-4 shadow-lg">
              <Text className="text-gray-700">$$ • Dine-in /Take out</Text>
              <Text className="text-red-500">Closes in 40 Mins</Text>
              <View className="flex-row items-center">
                <Ionicons name="time-outline" size={14} color="#666" />
                <Text className="text-gray-500 ml-1">Updated 4 months ago</Text>
              </View>

              {/* Action Buttons */}
              <View className="flex-row justify-between mt-4">
                {actionButtons.map((button) => (
                  <TouchableOpacity 
                    key={button.id}
                    className="items-center"
                  >
                    <View className="w-10 h-10 rounded-full bg-gray-100 justify-center items-center mb-1">
                      <Ionicons name={button.icon} size={20} color="#333" />
                    </View>
                    <Text className="text-[10px] text-gray-700">{button.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              <Text className="text-xs text-gray-500 mt-4">
                For orders less than $12.00 for this treats shop a small order fee applies
              </Text>
            </View>
          </View>
        </View>

        {/* Content after the overlapping card */}
        <View className="mt-24 px-4">
          {/* Restaurant Photos */}
          <View className="mt-4">
            <Text className="text-xl font-bold text-gray-800 mb-4">Restaurant Photos</Text>
            <View className="flex-row flex-wrap justify-between">
              <View className="w-[48%] h-40 rounded-xl overflow-hidden mb-4">
                <Image 
                  source={require('../../assets/images/dish1.jpeg')}
                  className="w-full h-full"
                  resizeMode="cover"
                />
              </View>
              <View className="w-[48%] h-40 rounded-xl overflow-hidden mb-4">
                <Image 
                  source={require('../../assets/images/dish2.jpeg')}
                  className="w-full h-full"
                  resizeMode="cover"
                />
              </View>
              <View className="w-full h-40 rounded-xl overflow-hidden">
                <Image 
                  source={require('../../assets/images/dish3.jpeg')}
                  className="w-full h-full"
                  resizeMode="cover"
                />
              </View>
            </View>
          </View>

          {/* Recommendation */}
          <View className="mt-6 bg-white rounded-xl p-4 shadow-sm mb-4">
            <Text className="text-lg font-semibold text-gray-800 mb-3 text-center">Would you recommend this business?</Text>
            <View className="flex-row justify-center items-center gap-3 mb-6">
              <TouchableOpacity className="bg-gray-100 px-6 py-2 rounded-full">
                <Text className="text-gray-700">Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-gray-100 px-6 py-2 rounded-full">
                <Text className="text-gray-700">No</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-gray-100 px-6 py-2 rounded-full">
                <Text className="text-gray-700">Maybe</Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row justify-around items-center border-t border-gray-200 pt-4">
              {recommendationActions.map((action) => (
                <TouchableOpacity 
                  key={action.id}
                  className="items-center"
                >
                  <MaterialIcons name={action.icon} size={24} color="#666" />
                  <Text className="text-xs text-gray-600 mt-1">{action.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Map Section */}
          <View className="bg-white rounded-xl overflow-hidden shadow-sm mb-4">
            <View className="w-full h-48 bg-gray-200" />
            <View className="p-4">
              <View className="flex-row items-center mb-2">
                <Ionicons name="car-outline" size={20} color="#666" />
                <Text className="text-gray-700 ml-2">20mins drive</Text>
                <Text className="text-gray-500 ml-auto">20km</Text>
              </View>
              <Text className="text-gray-700 mb-1">855 El Camino Real,</Text>
              <Text className="text-gray-700 mb-2">ste 130, Palo,CA 94301,USA</Text>
              <Text className="text-gray-600 mb-3">Street Parking</Text>
              
              <TouchableOpacity className="flex-row items-center justify-between py-3 border-t border-gray-200">
                <Text className="text-blue-600 font-semibold">Get Directions</Text>
                <MaterialIcons name="directions" size={24} color="#2563eb" />
              </TouchableOpacity>

              <TouchableOpacity className="flex-row items-center justify-between py-3 border-t border-gray-200">
                <View>
                  <Text className="text-blue-600 font-semibold">Call</Text>
                  <Text className="text-gray-600">+1-650-321-0512</Text>
                </View>
                <Ionicons name="call-outline" size={24} color="#2563eb" />
              </TouchableOpacity>

              {/* Restaurant Info Section */}
              <TouchableOpacity className="flex-row items-center justify-between py-3 border-t border-gray-200">
                <View>
                  <Text className="text-lg font-semibold text-gray-800">Restaurant Info</Text>
                  <Text className="text-gray-600">Explore our sweets menu</Text>
                </View>
                <MaterialIcons name="menu-book" size={24} color="#666" />
              </TouchableOpacity>

              {/* Website */}
              <TouchableOpacity className="flex-row items-center justify-between py-3 border-t border-gray-200">
                <Text className="text-gray-600">www.icecreampalace.com</Text>
                <MaterialIcons name="arrow-outward" size={24} color="#666" />
              </TouchableOpacity>

              <TouchableOpacity className="flex-row items-center justify-between py-3 border-t border-gray-200">
                <Text className="text-blue-600 font-semibold">View Page</Text>
                <MaterialIcons name="chevron-right" size={24} color="#666" />
              </TouchableOpacity>

              {/* Features */}
              <View className="pt-4 border-t border-gray-200">
                <Text className="text-lg font-semibold text-gray-800 mb-3">Features</Text>
                <View className="flex-row flex-wrap gap-2">
                  <View className="bg-blue-50 px-3 py-1 rounded-full">
                    <Text className="text-blue-600">Reservation Available</Text>
                  </View>
                  <View className="bg-blue-50 px-3 py-1 rounded-full">
                    <Text className="text-blue-600">Parking Available</Text>
                  </View>
                  <View className="bg-blue-50 px-3 py-1 rounded-full">
                    <Text className="text-blue-600">Free Wifi</Text>
                  </View>
                </View>
              </View>

              {/* Action Buttons */}
              <View className="flex-col gap-4 mt-6">
                <TouchableOpacity 
                  onPress={() => router.push('/book-table')}
                  className="bg-blue-500 py-4 rounded-xl items-center justify-center"
                >
                  <Text className="text-white text-[15px]">Book a Table</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  className="bg-white border border-gray-200 py-4 rounded-xl items-center justify-center"
                >
                  <Text className="text-blue-500 text-[15px]">Pay Bill</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <BookingModal 
        isVisible={isBookingModalVisible}
        onClose={() => setIsBookingModalVisible(false)}
      />
    </>
  );
} 