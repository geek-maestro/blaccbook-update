import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { OrderProps } from '~/types/order';
import { router } from 'expo-router';

const OrderCard = ({ image, label, distance, rating }: OrderProps) => {
  return (
    <TouchableOpacity className="relative h-[210px] w-[165px] rounded-lg overflow-hidden shadow-sm bg-white" onPress={() => router.push({ pathname: '/screens/businessItem', params: { label: label}})}>
      <Image source={image} className="h-[130px] w-full object-cover" />
      <Text className="absolute left-0 top-0 bg-[#C0EACF66] p-2 text-[#ffffff] font-semibold text-base">Discount Price</Text>
      <Text className="text-md text-text p-2">{label}</Text>
      <View className='flex-row justify-between p-2 items-center'>
        <Text>{distance}</Text>
        <View className="flex-row items-center gap-2">
          <FontAwesome name="star" size={20} color="#ECBB18" />
          <Text>{rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OrderCard;
