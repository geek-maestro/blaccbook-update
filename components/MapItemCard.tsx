import { View, Text, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { Button } from './Button';
import { useLocation } from '~/app/api/utils/context/locationContext';
import { ServiceItemProps } from '~/types/serviceItem';

const width = Dimensions.get('screen').width * 0.9;
interface ServiceProps {
  item: ServiceItemProps;
}

const MapItemCard = ({ item }: ServiceProps) => {
  const { setSelectedItem } = useLocation();
  return (
    <TouchableOpacity onPress={() => setSelectedItem(item)} className="mx-auto">
      <View className="h-[260px] rounded-2xl bg-white p-5 shadow-lg" style={{ width }}>
        <ScrollView horizontal>
          {item?.images?.map((image: any, index: number) => (
            <Image source={image} className="h-[90px] w-[100px] object-cover" key={index} />
          ))}
        </ScrollView>

        <View>
          <Text className="mt-2 text-lg font-semibold capitalize">{item?.title}</Text>
          <Text className="text-sm text-gray-500">{item?.description}</Text>
        </View>
        <Button
          title="View Page"
          className="rouded-sm border border-text bg-white"
          color="#000000"
        />
      </View>
    </TouchableOpacity>
  );
};

export default MapItemCard;
