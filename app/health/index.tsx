import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import AdCard from '~/components/adCard';
import SearchResults from '~/components/searchResults';
import { getMerchants, getServices } from '../api/utils/services/business.service';
import SearchCard from '~/components/searchCard';

const HealthHome = () => {
  const [searchText, setSearchText] = useState('');
  const { data: services, isLoading, isError } = getServices();
  const { data: merchants, isLoading: loading, isError: error } = getMerchants();
  const healthData = services?.filter((item) => item.serviceType.toLowerCase().includes('health'));
  return (
    <View className="flex-1">
      <View>
        <Ionicons name="arrow-back" size={30} color="black" />
        <Text className="text-xs">Back</Text>
      </View>
      <TextInput
        placeholder="Search"
        mode="flat"
        onChangeText={(text) => setSearchText(text)}
        left={<FontAwesome name="search" size={24} color="#CACDCF" />}
        style={{ marginVertical: 10 }}
      />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 20,
          gap: 20,
          paddingHorizontal: 10,
        }}
        showsVerticalScrollIndicator={false}>
        <View>
          <AdCard image={require('~/assets/images/ads.png')} />
        </View>

        <View className="flex-1 gap-5">
          <Text>All HealthCare</Text>
          {healthData?.map((item, index) => (
            <SearchCard
              key={index}
              image={item.icon}
              name={item.title}
              distance={item?.distance}
              time={item?.time}
              rating={item?.reviews?.average}
              discount={item?.discount}
              price={item.price}
              vendor={item?.vendor}
              topService={item?.reviews?.count > 30}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default HealthHome;
