import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { sampleSearchresults } from '~/app/api/dummyData';
import SearchCard from './searchCard';
import { getMerchants, getServices } from '~/app/api/utils/services/business.service';

const SearchResults = ({ search }: { search: string }) => {
  const { data: services, isLoading, isError } = getServices();
  const { data: merchants, isLoading: loading, isError: error } = getMerchants();
  const results = services?.filter((item) =>
    search
      ? item.title.toLowerCase().includes(search.toLowerCase())
      : true
  );
  return (
    <View className="mt-10 flex-1">
      <FlatList
        data={results}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <SearchCard
            image={item?.icon}
            name={item?.title}
            rating={item?.reviews?.average}
            price={item.price}
            topService={item?.reviews?.count > 20}
          />
        )}
        contentContainerStyle={{
          paddingBottom: 10,
          gap: 20,
          paddingHorizontal: 10,
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SearchResults;
