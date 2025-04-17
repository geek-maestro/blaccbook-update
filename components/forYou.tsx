// components/ForYou.tsx

import { useEffect, useState } from 'react';
import { View, Text, FlatList, Platform, StyleSheet } from 'react-native';
import { AppleMaps, GoogleMaps, useLocationPermissions } from 'expo-maps';
import { forYou } from '~/app/api/dummyData';
import ForYouCard from './forYouCard';
import { Button } from './Button';

const ForYou = () => {
  const [status, requestPermission, getPermission] = useLocationPermissions();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkPermission = async () => {
      await getPermission();
      setIsLoading(false);
    };
    checkPermission();
  }, []);

  const hasPermission = status?.granted;

  return (
    <View className="flex-1 bg-white">
      <Text className="p-5 text-2xl font-bold">For You</Text>

      <FlatList
        data={forYou}
        horizontal
        contentContainerStyle={{
          paddingBottom: 10,
          gap: 20,
          paddingHorizontal: 10,
        }}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ForYouCard
            image={item.image}
            name={item.name}
            rating={item.rating}
            reviews={item.reviews}
            parent={item.parent}
          />
        )}
      />

      <View className="mt-6 px-5">
        <Text className="text-lg mb-2">Would you recommend this business?</Text>
        <View className="flex-row items-center justify-center gap-5">
          {['Yes', 'No', 'Maybe'].map((option) => (
            <Button
              key={option}
              title={option}
              className="w-[90px] rounded-sm border border-[#90BAF7] bg-white shadow-none"
              color="#000"
            />
          ))}
        </View>
      </View>

      <View className="my-5 px-5">
        {isLoading ? (
          <Text className="text-center text-gray-500">Checking permissions...</Text>
        ) : hasPermission ? (
          Platform.OS === 'ios' ? (
            <AppleMaps.View style={styles.map} />
          ) : (
            <GoogleMaps.View style={styles.map} />
          )
        ) : (
          <View className="items-center">
            <Text className="text-center mb-3 text-gray-500">
              Location permission is required to view the map.
            </Text>
            <Button title="Grant Permission" onPress={requestPermission} />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
    width: "100%"
  },
});

export default ForYou;
