import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { sampleSearchresults } from '~/app/api/dummyData';
import SearchCard from './searchCard';

const SearchResults = () => {
  return (
    <View className='mt-10'>
      <FlatList
        data={sampleSearchresults}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <SearchCard
            image={item.image}
            name={item.name}
            distance={item.distance}
            time={item.time}
            rating={item.rating}
            discount={item.discount}
            price={item.price}
            vendor={item.vendor}
            topService={item.topService}
          />
        )}
        contentContainerStyle={{
          paddingBottom: 10,
          gap: 20,
          paddingHorizontal: 10,
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default SearchResults;
