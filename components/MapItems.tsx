import { View, FlatList, Dimensions, Platform } from 'react-native';
import React, { useEffect, useRef } from 'react';
import MapItemCard from './MapItemCard';
import { useLocation } from '~/app/api/utils/context/locationContext';
import { ServiceItemProps } from '~/types/serviceItem';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SPACING = 16; // or whatever spacing you want
const CARD_WIDTH = SCREEN_WIDTH * 0.9;
const SNAP_WIDTH = CARD_WIDTH + SPACING;
const SIDE_SPACING = (SCREEN_WIDTH - CARD_WIDTH) / 2;

const MapItems = ({
  services,
  search,
  filtered,
}: {
  search: string;
  services: ServiceItemProps[];
  filtered: ServiceItemProps[];
}) => {
  const flatListRef = useRef<FlatList>(null);
  const { selectedItem } = useLocation();

  useEffect(() => {
    if (selectedItem && services?.length) {
      const index = services.findIndex(
        (s: ServiceItemProps) => s.serviceId === selectedItem.serviceId
      );
      if (index >= 0) {
        flatListRef.current?.scrollToIndex({ index, animated: true });
      }
    }
  }, [selectedItem]);

  const itemLayout = (_: any, index: number) => ({
    length: SNAP_WIDTH,
    offset: SNAP_WIDTH * index,
    index,
  });

  return (
    <View>
      <FlatList
        data={search === '' ? services : filtered}
        ref={flatListRef}
        horizontal
        pagingEnabled={false}
        snapToInterval={SNAP_WIDTH}
        snapToAlignment="start"
        decelerationRate="fast"
        getItemLayout={itemLayout}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: SIDE_SPACING,
        }}
        renderItem={({ item }) => <MapItemCard item={item} />}
        ItemSeparatorComponent={() => <View style={{ width: SPACING }} />}
      />
    </View>
  );
};

export default MapItems;
