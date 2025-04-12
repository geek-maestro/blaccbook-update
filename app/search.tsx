import {
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Platform,
  ScrollView,
  Pressable,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Text } from 'react-native-paper';
import { router, Stack, Link } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import MapView, { Marker, Callout } from 'react-native-maps';

interface MarkerData {
  id: number;
  latitude: number;
  longitude: number;
  title: string;
  type: string;
  rating: number;
}

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMarkers, setFilteredMarkers] = useState<MarkerData[]>([]);
  const [selectedMarker, setSelectedMarker] = useState<MarkerData | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('relevance');

  const dummyMarkers: MarkerData[] = [
    { id: 1, latitude: 37.7749, longitude: -122.4194, title: 'Business 1', type: 'restaurant', rating: 4.5 },
    { id: 2, latitude: 37.7739, longitude: -122.4312, title: 'Business 2', type: 'barber', rating: 4.8 },
    { id: 3, latitude: 37.7729, longitude: -122.4232, title: 'Business 3', type: 'plumbing', rating: 4.2 },
  ];

  useEffect(() => {
    // Filter markers based on search query and active filter
    let filtered = dummyMarkers;
    
    if (searchQuery) {
      filtered = filtered.filter(marker =>
        marker.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        marker.type.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (activeFilter !== 'all') {
      filtered = filtered.filter(marker => marker.type === activeFilter);
    }

    // Sort markers based on selected sort option
    if (sortBy === 'rating') {
      filtered = [...filtered].sort((a, b) => b.rating - a.rating);
    }
    // Add more sorting options as needed

    setFilteredMarkers(filtered);
  }, [searchQuery, activeFilter, sortBy]);

  const filterButtons = [
    { id: 'all', label: 'All' },
    { id: 'restaurant', label: 'Restaurants' },
    { id: 'barber', label: 'Barbers' },
    { id: 'plumbing', label: 'Plumbing' },
  ];

  const sortOptions = [
    { id: 'relevance', label: 'Relevance' },
    { id: 'rating', label: 'Rating' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen 
        options={{
          headerShown: false
        }}
      />
      
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#6B7280" style={styles.searchIcon} />
          <TextInput
            placeholder="Search for restaurants, barbers, plumbing..."
            style={styles.searchInput}
            placeholderTextColor="#6B7280"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery !== '' && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Ionicons name="close-circle" size={20} color="#6B7280" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Map View */}
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.7749,
            longitude: -122.4194,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {(searchQuery === '' ? dummyMarkers : filteredMarkers).map((marker) => (
            <Marker
              key={marker.id}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              onPress={() => setSelectedMarker(marker)}
            >
              <View style={styles.markerContainer}>
                <MaterialCommunityIcons name="store" size={24} color="#2174EE" />
              </View>
              <Callout>
                <View style={styles.calloutContainer}>
                  <Text style={styles.calloutTitle}>{marker.title}</Text>
                  <Text style={styles.calloutType}>{marker.type}</Text>
                </View>
              </Callout>
            </Marker>
          ))}
        </MapView>
      </View>

      {/* Filter Buttons */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filterContainer}
        contentContainerStyle={styles.filterContent}
      >
        {filterButtons.map((button) => (
          <TouchableOpacity
            key={button.id}
            style={[
              styles.filterButton,
              activeFilter === button.id && styles.filterButtonActive,
            ]}
            onPress={() => setActiveFilter(button.id)}
          >
            <Text style={[
              styles.filterButtonText,
              activeFilter === button.id && styles.filterButtonTextActive,
            ]}>
              {button.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Sort Options */}
      <View style={styles.sortContainer}>
        {sortOptions.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={[
              styles.sortButton,
              sortBy === option.id && styles.sortButtonActive,
            ]}
            onPress={() => setSortBy(option.id)}
          >
            <Text style={[
              styles.sortButtonText,
              sortBy === option.id && styles.sortButtonTextActive,
            ]}>
              {option.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Link href="/" style={styles.navItem}>
          <Text>Home</Text>
        </Link>
        <Link href="/search" asChild style={[styles.navItem, styles.navItemActive]}>
          <Pressable>
            <Text style={styles.navTextActive}>Search</Text>
          </Pressable>
        </Link>
        <Link href="/history" asChild style={styles.navItem}>
          <Pressable>
            <Text>History</Text>
          </Pressable>
        </Link>
        <Link href="/profile" asChild style={styles.navItem}>
          <Pressable>
            <Text>Profile</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  searchContainer: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 30,
    left: 0,
    right: 0,
    zIndex: 1,
    paddingHorizontal: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 44,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#111827',
  },
  mapContainer: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  markerContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  filterContainer: {
    position: 'absolute',
    bottom: 90,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  filterContent: {
    alignItems: 'center',
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    marginRight: 8,
  },
  filterButtonActive: {
    backgroundColor: '#2174EE',
  },
  filterButtonText: {
    color: '#6B7280',
    fontSize: 14,
    fontWeight: '500',
  },
  filterButtonTextActive: {
    color: '#FFFFFF',
  },
  sortContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  sortButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: '#F3F4F6',
    marginRight: 8,
  },
  sortButtonActive: {
    backgroundColor: '#2174EE',
  },
  sortButtonText: {
    color: '#6B7280',
    fontSize: 12,
    fontWeight: '500',
  },
  sortButtonTextActive: {
    color: '#FFFFFF',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
  },
  navItemActive: {
    color: '#2174EE',
  },
  navText: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
  },
  navTextActive: {
    color: '#2174EE',
  },
  calloutContainer: {
    padding: 10,
  },
  calloutTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  calloutType: {
    fontSize: 14,
    color: '#6B7280',
  },
});

export default Search; 