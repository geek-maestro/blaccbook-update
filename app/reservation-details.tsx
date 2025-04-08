import React, { useState } from 'react';
import { View, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native';
import { Text } from 'react-native-paper';
import { Stack, router } from 'expo-router';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function ReservationDetails() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [instructions, setInstructions] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Stack.Screen 
        options={{ 
          headerShown: true,
          headerTitle: "Your Reservation",
          headerLeft: () => (
            <TouchableOpacity 
              onPress={() => router.back()}
              style={{ padding: 5 }}
            >
              <Ionicons name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>
          ),
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#fff'
          },
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: '600'
          }
        }} 
      />

      <ScrollView style={{ flex: 1 }}>
        {/* Map Preview */}
        <View style={{ 
          height: 180,
          backgroundColor: '#e5e7eb',
          marginBottom: 15
        }}>
          <Image 
            source={require('../assets/images/map.jpg')}
            style={{ width: '100%', height: '100%' }}
            resizeMode="cover"
          />
        </View>

        {/* Restaurant Info */}
        <View style={{ 
          paddingHorizontal: 20,
          paddingVertical: 15,
          backgroundColor: '#fff',
          borderBottomWidth: 1,
          borderBottomColor: '#f3f4f6'
        }}>
          <Text style={{ 
            fontSize: 18,
            fontWeight: '600',
            color: '#000',
            marginBottom: 4
          }}>
            Limelight-Royal Orchid Hotel
          </Text>
          <Text style={{ 
            fontSize: 14,
            color: '#666'
          }}>
            Height-Ashbury-Balboa St
          </Text>
        </View>

        {/* Reservation Details */}
        <View style={{ 
          flexDirection: 'row',
          paddingHorizontal: 20,
          paddingVertical: 15,
          backgroundColor: '#fff',
          borderBottomWidth: 1,
          borderBottomColor: '#f3f4f6'
        }}>
          <Ionicons name="people-outline" size={20} color="#666" style={{ marginRight: 10 }} />
          <Text style={{ fontSize: 15, color: '#666' }}>03 Guest</Text>
        </View>

        <View style={{ 
          flexDirection: 'row',
          paddingHorizontal: 20,
          paddingVertical: 15,
          backgroundColor: '#fff',
          borderBottomWidth: 1,
          borderBottomColor: '#f3f4f6'
        }}>
          <Ionicons name="calendar-outline" size={20} color="#666" style={{ marginRight: 10 }} />
          <Text style={{ fontSize: 15, color: '#666' }}>Tuesday | 13 Apr | 07:00PM</Text>
        </View>

        {/* Form Fields */}
        <View style={{ padding: 20 }}>
          <View style={{ marginBottom: 20 }}>
            <Text style={{ 
              fontSize: 15,
              color: '#666',
              marginBottom: 8
            }}>Name</Text>
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="Davida Lizato"
              style={{
                height: 45,
                borderWidth: 1,
                borderColor: '#ddd',
                borderRadius: 8,
                paddingHorizontal: 12,
                fontSize: 15
              }}
            />
          </View>

          <View style={{ marginBottom: 20 }}>
            <Text style={{ 
              fontSize: 15,
              color: '#666',
              marginBottom: 8
            }}>Email</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Davidalizato45@gmail.com"
              keyboardType="email-address"
              style={{
                height: 45,
                borderWidth: 1,
                borderColor: '#ddd',
                borderRadius: 8,
                paddingHorizontal: 12,
                fontSize: 15
              }}
            />
          </View>

          <View style={{ marginBottom: 20 }}>
            <Text style={{ 
              fontSize: 15,
              color: '#666',
              marginBottom: 8
            }}>Phone Number</Text>
            <View style={{
              flexDirection: 'row',
              height: 45,
              borderWidth: 1,
              borderColor: '#ddd',
              borderRadius: 8,
              alignItems: 'center'
            }}>
              <TouchableOpacity style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 12,
                borderRightWidth: 1,
                borderRightColor: '#ddd',
                height: '100%'
              }}>
                <Text style={{ marginRight: 5, fontSize: 15 }}>+1</Text>
                <MaterialIcons name="keyboard-arrow-down" size={20} color="#666" />
              </TouchableOpacity>
              <TextInput
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                placeholder="+234 XXXXXXXXXXX"
                keyboardType="phone-pad"
                style={{
                  flex: 1,
                  paddingHorizontal: 12,
                  fontSize: 15
                }}
              />
            </View>
          </View>

          <View style={{ marginBottom: 20 }}>
            <Text style={{ 
              fontSize: 15,
              color: '#666',
              marginBottom: 8
            }}>Add instructions to resturant</Text>
            <TouchableOpacity style={{
              height: 45,
              borderWidth: 1,
              borderColor: '#ddd',
              borderRadius: 8,
              backgroundColor: '#f9fafb',
              justifyContent: 'center',
              paddingHorizontal: 12
            }}>
              <Text style={{ color: '#666', fontSize: 15 }}>Add instructions to resturant</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Confirm Button */}
      <View style={{ 
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#eee'
      }}>
        <TouchableOpacity 
          onPress={() => router.push('/confirm-reservation')}
          style={{
            backgroundColor: '#0066FF',
            paddingVertical: 16,
            borderRadius: 25,
            alignItems: 'center'
          }}
        >
          <Text style={{ 
            color: '#fff',
            fontSize: 16,
            fontWeight: '500'
          }}>Confirm Booking</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
} 