import React, { useState } from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import { Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function BookTable() {
  const [selectedGuests, setSelectedGuests] = useState(3);
  const [selectedDate, setSelectedDate] = useState('Tomorrow');
  const [selectedTime, setSelectedTime] = useState('07:15PM');

  const guestOptions = [2, 3, 4, 5, 6];
  const dateOptions = [
    { label: 'Today', date: '12 Apr' },
    { label: 'Tomorrow', date: '12 Apr' },
    { label: 'Thursday', date: '14 Apr' },
    { label: 'Friday', date: '14 Apr' },
  ];
  const timeSlots = [
    { time: '07:00PM', date: '12 Apr' },
    { time: '07:15PM', date: '12 Apr' },
    { time: 'Thursday', date: '14 Apr' },
    { label: 'Friday', date: '14 Apr' },
    { label: 'Today', date: '12 Apr' },
    { label: 'Tomorrow', date: '12 Apr' },
    { label: 'Thursday', date: '14 Apr' },
    { label: 'Friday', date: '14 Apr' },
    { label: 'Today', date: '12 Apr' },
    { label: 'Tomorrow', date: '12 Apr' },
    { label: 'Thursday', date: '14 Apr' },
    { label: 'Friday', date: '14 Apr' },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Stack.Screen 
        options={{ 
          headerShown: true,
          headerTitle: "Book a table",
          headerRight: () => (
            <TouchableOpacity 
              onPress={() => router.back()}
              style={{ padding: 5 }}
            >
              <Ionicons name="close" size={24} color="#000" />
            </TouchableOpacity>
          ),
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#fff'
          },
          headerTitleStyle: {
            fontSize: 22,
            fontWeight: '600'
          }
        }} 
      />

      <ScrollView style={{ flex: 1 }}>
        {/* Table Size Section */}
        <View style={{ padding: 20 }}>
          <Text style={{ 
            fontSize: 16,
            color: '#666',
            marginBottom: 12
          }}>Table for</Text>
          
          <View style={{ 
            flexDirection: 'row',
            gap: 10
          }}>
            {guestOptions.map((number) => (
              <TouchableOpacity
                key={number}
                onPress={() => setSelectedGuests(number)}
                style={{
                  width: 45,
                  height: 45,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: selectedGuests === number ? '#0066FF' : '#fff',
                  borderWidth: 1,
                  borderColor: selectedGuests === number ? '#0066FF' : '#ddd'
                }}
              >
                <Text style={{
                  fontSize: 16,
                  color: selectedGuests === number ? '#fff' : '#000'
                }}>
                  {number}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Date Selection */}
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={{ 
            fontSize: 16,
            color: '#666',
            marginBottom: 12
          }}>Date</Text>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={{ marginBottom: 25 }}
          >
            <View style={{ flexDirection: 'row', gap: 10 }}>
              {dateOptions.map((option) => (
                <TouchableOpacity
                  key={option.label}
                  onPress={() => setSelectedDate(option.label)}
                  style={{
                    paddingHorizontal: 16,
                    paddingVertical: 10,
                    borderRadius: 10,
                    backgroundColor: selectedDate === option.label ? '#0066FF' : '#fff',
                    borderWidth: 1,
                    borderColor: selectedDate === option.label ? '#0066FF' : '#ddd'
                  }}
                >
                  <Text style={{
                    fontSize: 15,
                    color: selectedDate === option.label ? '#fff' : '#000',
                    marginBottom: 2
                  }}>
                    {option.label}
                  </Text>
                  <Text style={{
                    fontSize: 13,
                    color: selectedDate === option.label ? '#fff' : '#666',
                    opacity: selectedDate === option.label ? 0.8 : 1
                  }}>
                    {option.date}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>

          {/* Time Selection */}
          <Text style={{ 
            fontSize: 16,
            color: '#666',
            marginBottom: 12
          }}>Time</Text>

          <View style={{ 
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 10,
            paddingBottom: 20
          }}>
            {timeSlots.map((slot, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedTime(slot.time || '')}
                style={{
                  width: '47%',
                  paddingHorizontal: 16,
                  paddingVertical: 10,
                  borderRadius: 10,
                  backgroundColor: selectedTime === slot.time ? '#0066FF' : '#fff',
                  borderWidth: 1,
                  borderColor: selectedTime === slot.time ? '#0066FF' : '#ddd'
                }}
              >
                <Text style={{
                  fontSize: 15,
                  color: selectedTime === slot.time ? '#fff' : '#000',
                  marginBottom: 2
                }}>
                  {slot.time || slot.label}
                </Text>
                <Text style={{
                  fontSize: 13,
                  color: selectedTime === slot.time ? '#fff' : '#666',
                  opacity: selectedTime === slot.time ? 0.8 : 1
                }}>
                  {slot.date}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Next Button */}
      <View style={{ 
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#eee'
      }}>
        <TouchableOpacity 
          onPress={() => router.push('/reservation-details')}
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
          }}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
} 