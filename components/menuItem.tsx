import { View, Text, TouchableOpacity, ImageSourcePropType } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import { Href, router } from 'expo-router';

interface MenuItemsProps {
    path: Href;
    params?: any;
    icon: ImageSourcePropType;
    label: string;
    size?: number;
    textSize?: number
}

const MenuItem = ({ path, params, icon, label, size = 40, textSize = 16 }: MenuItemsProps) => {
  return (
    <TouchableOpacity className='items-center gap-3' onPress={() => router.push(path, params)}>
      <Image source={icon} style={{ height: size, width: size, borderRadius: size / 2 }} />
      <Text className='capitalize text-xs' style ={{ fontSize: textSize}}>{label}</Text>
    </TouchableOpacity>
  );
};

export default MenuItem;
