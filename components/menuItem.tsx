import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Href, router } from 'expo-router';

interface MenuItemsProps {
  path: Href
  params?: Record<string, string | number | boolean>;
  icon: any;
  label: string;
  size?: number;
  textSize?: number;
}

const MenuItem = ({ path, params, icon, label, size = 40, textSize = 16 }: MenuItemsProps) => {
  const handlePress = () => {
    const stringParams = Object.fromEntries(
      Object.entries(params || {}).map(([key, value]) => [key, String(value)])
    );
    router.push({ pathname: path, params: stringParams });
  };

  return (
    <TouchableOpacity className="items-center gap-3" onPress={handlePress}>
      <Image source={icon} style={{ height: size, width: size, borderRadius: size / 2 }} />
      <Text className="text-xs capitalize" style={{ fontSize: textSize }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default MenuItem;
