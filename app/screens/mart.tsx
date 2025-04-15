import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { ScrollView, View, TouchableOpacity, Image, Text } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { CategoryItem } from '../components/CategoryItem';
import { RestaurantCarousel } from '../components/RestaurantCarousel';
import { router } from 'expo-router';
import AdCard from '~/components/adCard';
import OrderSection from '~/components/OrderSection';
import SearchCard from '~/components/searchCard';
import { getMerchants, getServices } from '../api/utils/services/business.service';

const Mart = () => {
  const { data: services, isLoading, isError } = getServices();
  const { data: merchants, isLoading: loading, isError: error } = getMerchants();
  const healthData = services?.filter((item) => item.serviceType.toLowerCase().includes('health'));
  return (
    <View className="flex-1">
      <View className="px-4 pb-2 pt-12">
        <TouchableOpacity
          onPress={() => router.back()}
          className="h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
          <Ionicons name="chevron-back" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <Searchbar value="" style={{ marginVertical: 10 }} />
      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          paddingBottom: 20,
          gap: 20,
          paddingHorizontal: 10,
        }}
        showsVerticalScrollIndicator={false}>
        {/* <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          className="px-2 py-4"
        >
          {categories.map((category) => (
            <CategoryItem
              key={category.id}
              id={category.id}
              title={category.title}
              image={category.image}
            />
          ))}
        </ScrollView> */}

        {/* <RestaurantCarousel
          restaurants={carouselItems} 
          dotColor="#4CAF50"
        /> */}

        <View>
          <AdCard image={require('~/assets/images/ad.png')} />
        </View>
        <OrderSection />
        <View>
          <View className="my-5 flex-row items-center gap-5 px-5">
            <Text className="font-bold text-xl text-[#2A353F]">Order Snacks from </Text>
            <FontAwesome name="arrow-circle-right" size={24} color="#0000000D" />
          </View>
        </View>

        <View className="flex-1 gap-5">
          {merchants?.map((item, index) => (
            <SearchCard
              key={index}
              image={item.image}
              name={item.name}
              distance={item?.distance}
              time={item?.time}
              rating={item?.reviews?.average}
              discount={item?.discount}
              price={item?.price}
              vendor={item?.vendor}
              topService={item?.reviews?.count > 30}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Mart;
