import { View, Text, Image, ImageSourcePropType } from 'react-native';
import React from 'react';

const AdCard = ({ image }: { image: ImageSourcePropType }) => {
  return (
    <View className='rounded-xl h-[250px] w-full overflow-hidden'>
      <Image source={image} className="w-full h-full object-contain" />
    </View>
  );
};

export default AdCard;
