import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import AdCard from '~/components/adCard';
import SearchResults from '~/components/searchResults';

const HealthHome = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <View>
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
      <View>
        <AdCard image={require('~/assets/images/ads.png')} />
      </View>

      <View>
        <Text>All HealthCare</Text>
        <SearchResults />
      </View>
    </View>
  );
};

export default HealthHome;
