import { View, Text, Image } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { DeliveryProps } from '~/types/order'

const DeliveryCard = ({ image, label, time, rating }: DeliveryProps ) => {
  return (
    <View className="relative h-[210px] w-[165px] rounded-lg overflow-hidden shadow-sm bg-white">
      <Image source={image} className="h-[130px] w-full object-cover" />
      <Text className="absolute left-0 top-0 bg-[#C0EACF66] p-2 text-[#ffffff] font-semibold text-base">Discount Price</Text>
      <View className='flex-row justify-between p-2 items-center'>
      <Text className="text-md text-text p-2">{label}</Text>
        <Text>{time}</Text>
        </View>
        <View className="flex-row items-center justify-between p-2">
          <FontAwesome name="star" size={20} color="#ECBB18" />
          <Text>{rating}</Text>
        </View>
    </View>
  )
}

export default DeliveryCard