import { View, Text } from 'react-native';
import React from 'react';
import Header from '~/components/header';
import QuickActions from '~/components/quickActions';
import ForYou from '~/components/forYou';

const BusinessItem = () => {
  const label = 'Burger King';
  const closing = 'Closed';
  const notice = 'Free Delivery';
  return (
    <View className="flex-1">
      <View className="relative z-10">
        <Header />

        <View className="absolute top-[130px] w-full px-7">
          <QuickActions label={label} closing={closing} notice={notice} />
        </View>
      </View>

    <View className='mt-52'>
      <ForYou />
      </View>
    </View>
  );
};

export default BusinessItem;
