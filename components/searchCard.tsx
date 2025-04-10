import { View, Text, Image } from 'react-native';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { SearchProps } from '~/types/order';

const SearchCard = ({ image, name, distance, time, rating, discount, price, vendor, topService }: SearchProps) => {
  return (
    <View className="w-full flex-row items-center">
      <View className='relative'>
        <Image source={image} className="h-[120px] w-[120px] rounded-xl object-cover" />
        {topService === true && <Text className='absolute text-white bg-[#04AC3D] left-5 py-1 px-3 top-2 mx-auto'>Top Service</Text>}
      </View>
      <View className='flex-1 ml-3 gap-2'>
        {discount && (
          <View className="flex-row items-center gap-2">
            <Text className="text-sm font-semibold text-[#EC7118]">{discount}</Text>
            <Text>SPONSORED</Text>
          </View>
        )}
        <Text className='font-bold text-xl'>{name}</Text>
        <View className='flex-row items-center gap-5'>
          <Text>{distance}</Text>
          <Text>{time}</Text>
          <View className="flex-row items-center gap-1">
            <FontAwesome name="star" size={15} color="#ECBB18" />
            <Text>{rating}</Text>
          </View>
        </View>
        <View className='flex-row items-center gap-5'>
        <FontAwesome5 name="motorcycle" size={15} color="#5F686F" />
        <Text>{price}</Text>
        <Text>{vendor}</Text>
        </View>
      </View>
    </View>
  );
};

export default SearchCard;
