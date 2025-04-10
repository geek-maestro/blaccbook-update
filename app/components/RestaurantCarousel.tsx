import React, { useState, useRef } from 'react';
import { View, Image, Dimensions, ScrollView } from 'react-native';

const { width } = Dimensions.get('window');

interface CarouselItem {
  id: number;
  image: any;
}

interface CarouselProps {
  restaurants: CarouselItem[];
  dotColor?: string;
}

export const RestaurantCarousel: React.FC<CarouselProps> = ({ 
  restaurants, 
  dotColor = '#4CAF50'
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);
    setActiveIndex(index);
  };

  return (
    <View className="mb-6">
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {restaurants.map((item) => (
          <View 
            key={item.id} 
            className="mx-4 rounded-2xl overflow-hidden"
            style={{ width: width - 32 }}
          >
            <Image 
              source={item.image} 
              className="w-full h-48"
              resizeMode="cover"
            />
          </View>
        ))}
      </ScrollView>

      <View className="flex-row justify-center items-center mt-3">
        {restaurants.map((_, index) => (
          <View
            key={index}
            className={`w-1.5 h-1.5 mx-1 rounded-full ${
              index === activeIndex ? 'bg-[#4CAF50]' : 'bg-gray-300'
            }`}
          />
        ))}
      </View>
    </View>
  );
}; 