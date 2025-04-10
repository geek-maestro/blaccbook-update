import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { AntDesign, Feather } from '@expo/vector-icons';

const actions = [
  {
    image: require('~/assets/icons/call.png'),
    label: 'Call',
  },
  {
    image: require('~/assets/icons/map.png'),
    label: 'View Map',
  },
  {
    image: require('~/assets/icons/site.png'),
    label: 'Website',
  },
  {
    image: require('~/assets/icons/menu.png'),
    label: 'Menu',
  },
  {
    image: require('~/assets/icons/invest.png'),
    label: 'Invest',
  },
];
const QuickActions = ({ label, closing, notice, path }) => {
  return (
    <View className="rounded-2xl bg-white p-5 shadow-sm w-full gap-3">
      <Text className='font-bold text-lg'>$$ {label}</Text>
      <Text className='text-[#DC2934] text-md font-semibold'>{closing}</Text>
      <View className='flex-row items-center gap-3'>
      <AntDesign name="infocirlceo" size={18} color="#2174EE" />
      <Text className='text-text text-base'>{notice}</Text>
      </View>

      <View>
        <View className='flex-row justify-between items-center'>
          {actions.map((action, index) => (
            <TouchableOpacity key={index} className="items-center gap-3">
              <Image source={action.image} className="h-6 w-6 object-cover" />
              <Text>{action.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View className='bg-[#F3F8FF] p-3 rounded-lg'>
          <Text className='text-text_secondary'>For orders less than $12.00 for this treats shop,a small order fee applies</Text>
      </View>
    </View>
  );
};

export default QuickActions;
