import { View, Text, FlatList, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Container } from '~/components/Container';
import Header from '~/components/header';
import { Searchbar, TextInput } from 'react-native-paper';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MenuItem from '~/components/menuItem';
import { dishes, menuItems } from '../api/dummyData';
import AdCard from '~/components/adCard';
import OrderSection from '~/components/OrderSection';
import DeliverySection from '~/components/DeliverySection';
import SortingScreen from '~/components/sortingScreen';
import SearchResults from '~/components/searchResults';
import { getServices } from '../api/utils/services/business.service';
import LoadingState from '~/components/LoadingState';

const Home = () => {
  const [searchText, setSearchText] = useState('');
  const [apply, setApply] = useState(false);
  const { data: services, isLoading, isError } = getServices();
  const dish = services?.filter((item) => item.serviceType === 'Restaurants').slice(0, 5);
  return (
    <View className="flex-1">
      <View className="relative z-10">
        <Header />
        <Searchbar
          placeholder="Search"
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
          style={{ position: 'absolute', bottom: -25, left: 20, right: 20 }}
        />
        {/* <TextInput
          placeholder="Search"
          mode="flat"
          onChangeText={(text) => setSearchText(text)}
          left={<FontAwesome name="search" size={24} color="#CACDCF" />}
          style={{ position: 'absolute', bottom: -25, left: 20, right: 20 }}
        /> */}
      </View>

      <ScrollView
        className="flex-1"
        contentContainerClassName="pb-20"
        showsVerticalScrollIndicator={false}>
        {searchText.length > 0 ? (
          // (
          //   <SortingScreen setApply = {setApply} />
          // ) : apply === true ? (
          <SearchResults search={searchText} />
        ) : (
          <>
            <View className="mt-20 w-full ">
              <FlatList
                data={menuItems}
                keyExtractor={(item, index) => index.toString()}
                numColumns={4}
                renderItem={({ item }) => (
                  <MenuItem
                    icon={item.icon}
                    label={item.label}
                    path={'/screens/mart'}
                    params={{id: 'Restaurants'}}
                    size={item.size}
                    textSize={12}
                  />
                )}
                columnWrapperStyle={{
                  justifyContent: 'space-between',
                  paddingHorizontal: 16,
                  marginBottom: 24,
                  width: '100%',
                }}
                contentContainerStyle={{
                  paddingBottom: 10,
                }}
                showsVerticalScrollIndicator={false}
              />
            </View>

            <View>
              <AdCard image={require('~/assets/images/ad.png')} />
            </View>

            <View className="mt-10 w-full ">
              {isLoading && <LoadingState />}
              <FlatList
                data={dish}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                renderItem={({ item }) => (
                  <MenuItem
                    icon={item.icon}
                    label={item.title}
                    path={'/screens/mart'}
                    params={item.params}
                    size={80}
                    textSize={14}
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

            <OrderSection />

            <DeliverySection />
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default Home;
