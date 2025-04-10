import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { deliveries } from '~/app/api/dummyData';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import DeliveryCard from './deliveryCard';

const DeliverySection = () => {
  return (
    <View className="mt-5">
      <View className="my-5 flex-row items-center gap-5 px-5">
        <Text className="text-xl font-bold text-[#2A353F]">Delivering To your area</Text>
        <FontAwesome name="arrow-circle-right" size={24} color="#0000000D" />
      </View>

      <FlatList
        horizontal
        data={deliveries}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="gap-5 px-5"
        renderItem={({ item, index }) => (
          <DeliveryCard
            time={item.time}
            image={item.image}
            label={item.label}
            rating={item.rating}
          />
        )}
      />
    </View>
  );
};

export default DeliverySection;
