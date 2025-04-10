import { View, Text, FlatList } from 'react-native';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { snacks } from '~/app/api/dummyData';
import OrderCard from './orderCard';

const OrderSection = () => {
  return (
    <View>
      <View className="flex-row items-center gap-5 my-5 px-5">
        <Text className="text-xl font-bold text-[#2A353F]">Order Snacks from </Text>
        <FontAwesome name="arrow-circle-right" size={24} color="#0000000D" />
      </View>

      <FlatList
        horizontal
        data={snacks}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerClassName='gap-5 px-5'
        renderItem={({ item, index }) => (
          <OrderCard
            distance={item.distance}
            image={item.image}
            label={item.label}
            rating={item.rating}
          />
        )}
      />
    </View>
  );
};

export default OrderSection;
