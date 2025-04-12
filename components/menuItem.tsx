import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { router } from 'expo-router';

interface MenuItemsProps {
  path: string;
  params?: any;
  icon: any;
  label: string;
  size?: number;
  textSize?: number;
}

const MenuItem = ({ path, params, icon, label, size = 40, textSize = 16 }: MenuItemsProps) => {
  const handlePress = () => {
    if (path.startsWith('/')) {
      router.push(path);
    } else {
      router.push(`/${path}`);
    }
  };

  return (
    <TouchableOpacity className='items-center gap-3' onPress={handlePress}>
      <Image source={icon} style={{ height: size, width: size, borderRadius: size / 2 }} />
      <Text className='capitalize text-xs' style ={{ fontSize: textSize}}>{label}</Text>
    </TouchableOpacity>
  );
};

export default MenuItem;
