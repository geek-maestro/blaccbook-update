import {
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Platform,
  ScrollView,
} from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { Text } from 'react-native-paper';
import { router, Stack } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import MapView, { Marker, Callout } from 'react-native-maps';
import { getServices } from '../api/utils/services/business.service';
import * as Location from 'expo-location';
import LoadingState from '~/components/LoadingState';
import MapItems from '~/components/MapItems';
import { useLocation } from '../api/utils/context/locationContext';
import { ServiceItemProps } from '~/types/serviceItem';

const Search = () => {
  const { data: services, isLoading, isError } = getServices();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMarkers, setFilteredMarkers] = useState<ServiceItemProps[]>([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    };
    getLocation();
  }, []);

  console.log(location, 'location');

  // const dummyMarkers = [
  //   { id: 1, latitude: 37.7749, longitude: -122.4194, title: 'Business 1', type: 'restaurant' },
  //   { id: 2, latitude: 37.7739, longitude: -122.4312, title: 'Business 2', type: 'barber' },
  //   { id: 3, latitude: 37.7729, longitude: -122.4232, title: 'Business 3', type: 'plumbing' },
  // ];

  useEffect(() => {
    // Filter markers based on search query
    const filtered = services?.filter(
      (marker): marker is ServiceItemProps =>
        marker.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        marker.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredMarkers(filtered || []);
  }, [searchQuery]);

  const mapRef = useRef<MapView | null>(null);
  const { selectedItem, setSelectedItem } = useLocation();

  // animate map when a card is selected
  useEffect(() => {
    if (selectedItem && mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: selectedItem.location.lat,
        longitude: selectedItem.location.lng,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    }
  }, [selectedItem]);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
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
      {!location ? (
        <LoadingState />
      ) : (
        <View style={styles.mapContainer}>
          <MapView
            ref={mapRef}
            style={styles.map}
            initialRegion={{
              latitude: location?.coords?.latitude,
              longitude: location?.coords?.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            showsUserLocation
            showsMyLocationButton={true}>
            {(searchQuery === '' ? services || [] : filteredMarkers || []).map((marker) => (
              <Marker
                key={marker.serviceId}
                coordinate={{ latitude: marker.location.lat, longitude: marker.location.lng }}
                onPress={() => setSelectedItem(marker)}>
                <View style={styles.markerContainer}>
                  <MaterialCommunityIcons name="store" size={30} color="#2174EE" />
                </View>
                <Callout>
                  <View style={styles.calloutContainer}>
                    <Text style={styles.calloutTitle}>{marker.title}</Text>
                    <Text style={styles.calloutType}>{marker.serviceType}</Text>
                  </View>
                </Callout>
              </Marker>
            ))}
          </MapView>
        </View>
      )}

      <View style={styles.filterContainer}>
        <MapItems services={services} search={searchQuery} filtered={filteredMarkers} />

        {/* Filter Buttons */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Filters</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Sort</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>New Places</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Open Now</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Bottom Navigation */}
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
    bottom: 20,
    left: 0,
    right: 0,
    // paddingHorizontal: 20,
    paddingVertical: 10,
    // gap:20
  },
  filterButton: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  filterText: {
    color: '#111827',
    fontSize: 14,
    fontWeight: '500',
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
    width: 300,
  },
  calloutTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    width: '100%',
  },
  calloutType: {
    fontSize: 14,
    color: '#6B7280',
    width: '100%',
  },
});

export default Search;
