import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { ForYouProps } from '~/types/serviceItem'

const ForYouCard = ({ image, name, rating, reviews, parent}: ForYouProps) => {
  return (
    <TouchableOpacity className='w-[170px] h-[205px] bg-white rounded-lg shadow-sm'>
        <Image source={image} className='w-full h-[115px] rounded-lg object-cover' />
        <View className='p-3 gap-2'>
      <Text className='font-bold text-lg'>{name}</Text>
      <View className='flex-row justify-between items-center'>
        <View className='flex-row gap-1'>
            {Array.from({ length: rating }).map((_, index) => (
                <FontAwesome name="star" size={15} color="#ECBB18" key={index} />
            ))}
        </View>
        <Text className='text-[#5F686F] text-base'>{reviews}</Text>
      </View>
      <Text>$$. {parent}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ForYouCard