import React, { useState } from 'react';
import { ScrollView, View, TouchableOpacity, Image } from 'react-native';
import { Stack, useLocalSearchParams, router } from 'expo-router';
import { Text } from 'react-native-paper';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { BookingModal } from '../components/BookingModal';

type IconName = 'call-outline' | 'map-outline' | 'globe-outline' | 'document-text-outline' | 'trending-up-outline';
type MaterialIconName = 'rate-review' | 'add-photo-alternate' | 'check-circle-outline' | 'directions' | 'menu-book' | 'arrow-outward' | 'chevron-right';

interface ActionButton {
  id: string;
  icon: IconName;
  label: string;
}

interface RecommendationAction {
  id: string;
  icon: MaterialIconName;
  label: string;
}

export default function RestaurantDetails() {
  const { id } = useLocalSearchParams();
  const [isBookingModalVisible, setIsBookingModalVisible] = useState(false);

  const actionButtons: ActionButton[] = [
    { id: 'call', icon: 'call-outline', label: 'Call' },
    { id: 'map', icon: 'map-outline', label: 'View Map' },
    { id: 'web', icon: 'globe-outline', label: 'Website' },
    { id: 'menu', icon: 'document-text-outline', label: 'Menu' },
    { id: 'invest', icon: 'trending-up-outline', label: 'Invest' },
  ];

  const recommendationActions: RecommendationAction[] = [
    { id: 'review', icon: 'rate-review', label: 'Add Review' },
    { id: 'photo', icon: 'add-photo-alternate', label: 'Add Photo' },
    { id: 'checkin', icon: 'check-circle-outline', label: 'Check-in' },
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Ionicons 
          key={i}
          name={i <= rating ? "star" : "star-outline"} 
          size={16} 
          color="#FFD700" 
        />
      );
    }
    return stars;
  };

  return (
    <>
      <Stack.Screen 
        options={{ 
          headerShown: false
        }} 
      />
      <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
        {/* Header Section with Image */}
        <View style={{ position: 'relative', height: 320 }}>
          <Image 
            source={require('../../assets/images/fine-dining.png')}
            style={{ width: '100%', height: '100%' }}
            resizeMode="cover"
          />
          <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)' }} />
          
          {/* Back Button */}
          <TouchableOpacity 
            onPress={() => router.back()}
            style={{ 
              position: 'absolute', 
              top: 60, 
              left: 15,
              width: 40, 
              height: 40, 
              backgroundColor: '#fff',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 10
            }}
          >
            <Ionicons name="chevron-back" size={24} color="#000" />
          </TouchableOpacity>

          {/* Restaurant name and rating on image */}
          <View style={{ 
            position: 'absolute', 
            left: 15, 
            bottom: 120,
            zIndex: 1
          }}>
            <Text style={{ 
              fontSize: 32, 
              fontWeight: 'bold', 
              color: '#fff', 
              marginBottom: 5 
            }}>Limelight</Text>
            <Text style={{ 
              fontSize: 32, 
              fontWeight: 'bold', 
              color: '#fff', 
              marginBottom: 15 
            }}>Restaurant</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', marginRight: 5 }}>
                {renderStars(4)}
              </View>
              <Text style={{ color: '#fff', marginLeft: 5 }}>4.0</Text>
              <Text style={{ color: '#fff', marginLeft: 10, textDecorationLine: 'underline' }}>See All 1,000</Text>
            </View>
          </View>

          {/* Hovering Info Card */}
          <View style={{ 
            position: 'absolute',
            left: 15,
            right: 15,
            bottom: -70,
            backgroundColor: '#fff',
            borderRadius: 15,
            padding: 15,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 5,
            zIndex: 2
          }}>
            <Text style={{ color: '#666' }}>$$ • Dine-in/Take out</Text>
            <Text style={{ color: '#f00', marginTop: 5 }}>Closes in 40 Mins</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
              <Ionicons name="time-outline" size={14} color="#666" />
              <Text style={{ color: '#666', marginLeft: 5 }}>Updated 4 months ago</Text>
            </View>

            {/* Action Buttons */}
            <View style={{ 
              flexDirection: 'row', 
              justifyContent: 'space-between',
              marginTop: 15,
            }}>
              {actionButtons.map((button) => (
                <TouchableOpacity 
                  key={button.id}
                  style={{ alignItems: 'center' }}
                >
                  <View style={{ 
                    width: 40, 
                    height: 40, 
                    backgroundColor: '#f5f5f5',
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 5
                  }}>
                    <Ionicons name={button.icon} size={20} color="#333" />
                  </View>
                  <Text style={{ fontSize: 12, color: '#666' }}>{button.label}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={{ fontSize: 12, color: '#666', marginTop: 10 }}>
              For orders less than $12.00 for this treats shop a small order fee applies
            </Text>
          </View>
        </View>

        {/* Content after the hovering card */}
        <View style={{ marginTop: 80 }}>
          {/* Restaurant Photos */}
          <View style={{ padding: 15 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 15 }}>Restaurant Photos</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
              <Image 
                source={require('../../assets/images/dish1.jpeg')}
                style={{ width: '48%', height: 120, borderRadius: 10 }}
                resizeMode="cover"
              />
              <Image 
                source={require('../../assets/images/dish2.jpeg')}
                style={{ width: '48%', height: 120, borderRadius: 10 }}
                resizeMode="cover"
              />
              <Image 
                source={require('../../assets/images/dish3.jpeg')}
                style={{ width: '100%', height: 120, borderRadius: 10 }}
                resizeMode="cover"
              />
            </View>
          </View>

          {/* Recommendation Section */}
          <View style={{ 
            margin: 15,
            padding: 15,
            backgroundColor: '#fff',
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3
          }}>
            <Text style={{ 
              fontSize: 16,
              fontWeight: '600',
              textAlign: 'center',
              marginBottom: 15
            }}>
              Would you recommend this business?
            </Text>
            
            <View style={{ 
              flexDirection: 'row',
              justifyContent: 'center',
              gap: 10,
              marginBottom: 20
            }}>
              {['Yes', 'No', 'Maybe'].map((option) => (
                <TouchableOpacity
                  key={option}
                  style={{
                    paddingHorizontal: 20,
                    paddingVertical: 8,
                    backgroundColor: '#f5f5f5',
                    borderRadius: 20
                  }}
                >
                  <Text style={{ color: '#666' }}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={{ 
              flexDirection: 'row',
              justifyContent: 'space-around',
              borderTopWidth: 1,
              borderTopColor: '#eee',
              paddingTop: 15
            }}>
              {recommendationActions.map((action) => (
                <TouchableOpacity
                  key={action.id}
                  style={{ alignItems: 'center' }}
                >
                  <MaterialIcons name={action.icon} size={24} color="#666" />
                  <Text style={{ fontSize: 12, color: '#666', marginTop: 5 }}>{action.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Map Section */}
          <View style={{ 
            margin: 15,
            backgroundColor: '#fff',
            borderRadius: 10,
            overflow: 'hidden',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3
          }}>
            {/* Map Preview */}
            <View 
              style={{ 
                width: '100%', 
                height: 160, 
                backgroundColor: '#f3f4f6',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <MaterialIcons name="map" size={40} color="#9ca3af" />
            </View>

            {/* Drive Time Info */}
            <View style={{ padding: 15 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <Ionicons name="car-outline" size={20} color="#666" />
                <Text style={{ marginLeft: 10, color: '#666' }}>20mins drive</Text>
                <Text style={{ marginLeft: 'auto', color: '#666' }}>20km</Text>
              </View>

              <Text style={{ color: '#333', marginBottom: 5 }}>855 El Camino Real,</Text>
              <Text style={{ color: '#333', marginBottom: 5 }}>ste 130, Palo,CA 94301,USA</Text>
              <Text style={{ color: '#666', marginBottom: 15 }}>Street Parking</Text>

              {/* Get Directions Button */}
              <TouchableOpacity 
                style={{ 
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingVertical: 15,
                  borderTopWidth: 1,
                  borderTopColor: '#eee'
                }}
              >
                <Text style={{ color: '#2563eb', fontWeight: '600' }}>Get Directions</Text>
                <MaterialIcons name="directions" size={24} color="#2563eb" />
              </TouchableOpacity>

              {/* Call Button */}
              <TouchableOpacity 
                style={{ 
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingVertical: 15,
                  borderTopWidth: 1,
                  borderTopColor: '#eee'
                }}
              >
                <View>
                  <Text style={{ color: '#2563eb', fontWeight: '600' }}>Call</Text>
                  <Text style={{ color: '#666' }}>+1-650-321-0512</Text>
                </View>
                <Ionicons name="call-outline" size={24} color="#2563eb" />
              </TouchableOpacity>

              {/* Restaurant Info */}
              <TouchableOpacity 
                style={{ 
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingVertical: 15,
                  borderTopWidth: 1,
                  borderTopColor: '#eee'
                }}
              >
                <View>
                  <Text style={{ fontSize: 16, fontWeight: '600', color: '#333' }}>Restaurant Info</Text>
                  <Text style={{ color: '#666' }}>Explore our sweets menu</Text>
                </View>
                <MaterialIcons name="menu-book" size={24} color="#666" />
              </TouchableOpacity>

              {/* Website */}
              <TouchableOpacity 
                style={{ 
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingVertical: 15,
                  borderTopWidth: 1,
                  borderTopColor: '#eee'
                }}
              >
                <Text style={{ color: '#666' }}>www.icecreampalace.com</Text>
                <MaterialIcons name="arrow-outward" size={24} color="#666" />
              </TouchableOpacity>

              {/* View Page */}
              <TouchableOpacity 
                style={{ 
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingVertical: 15,
                  borderTopWidth: 1,
                  borderTopColor: '#eee'
                }}
              >
                <Text style={{ color: '#2563eb', fontWeight: '600' }}>View Page</Text>
                <MaterialIcons name="chevron-right" size={24} color="#666" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Features Section */}
          <View style={{ padding: 15 }}>
            <Text style={{ fontSize: 18, fontWeight: '600', color: '#333', marginBottom: 10 }}>Features</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
              <View style={{ 
                backgroundColor: '#EBF5FF', 
                paddingHorizontal: 12,
                paddingVertical: 6,
                borderRadius: 20
              }}>
                <Text style={{ color: '#2563eb' }}>Reservation Available</Text>
              </View>
              <View style={{ 
                backgroundColor: '#EBF5FF', 
                paddingHorizontal: 12,
                paddingVertical: 6,
                borderRadius: 20
              }}>
                <Text style={{ color: '#2563eb' }}>Parking Available</Text>
              </View>
              <View style={{ 
                backgroundColor: '#EBF5FF', 
                paddingHorizontal: 12,
                paddingVertical: 6,
                borderRadius: 20
              }}>
                <Text style={{ color: '#2563eb' }}>Free Wifi</Text>
              </View>
            </View>
          </View>

          {/* Action Buttons */}
          <View style={{ padding: 15, gap: 10 }}>
            <TouchableOpacity 
              style={{ 
                backgroundColor: '#2563eb',
                padding: 15,
                borderRadius: 10,
                alignItems: 'center'
              }}
              onPress={() => router.push('/book-table')}
            >
              <Text style={{ color: '#fff', fontSize: 16, fontWeight: '500' }}>Book a Table</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={{ 
                backgroundColor: '#fff',
                padding: 15,
                borderRadius: 10,
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#eee'
              }}
            >
              <Text style={{ color: '#2563eb', fontSize: 16, fontWeight: '500' }}>Pay Bill</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <BookingModal 
        isVisible={isBookingModalVisible}
        onClose={() => setIsBookingModalVisible(false)}
      />
    </>
  );
} 