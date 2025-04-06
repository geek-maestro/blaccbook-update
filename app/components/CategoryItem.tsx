import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import { router } from 'expo-router';

interface CategoryItemProps {
  title: string;
  image: any;
  id?: number;
}

export const CategoryItem: React.FC<CategoryItemProps> = ({ title, image, id }) => {
  const handlePress = () => {
    router.push({
      pathname: `/category/${id || 1}`,
      params: { title }
    });
  };

  return (
    <TouchableOpacity 
      className="items-center mx-2"
      onPress={handlePress}
    >
      <View className="w-16 h-16 rounded-full bg-white justify-center items-center shadow-sm mb-2">
        <Image source={image} className="w-8 h-8" resizeMode="contain" />
      </View>
      <Text className="text-sm text-gray-700">{title}</Text>
    </TouchableOpacity>
  );
}; 