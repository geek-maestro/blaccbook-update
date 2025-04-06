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
    { time: 'Friday', date: '14 Apr' },
    { time: 'Today', date: '12 Apr' },
    { time: 'Tomorrow', date: '12 Apr' },
    { time: 'Thursday', date: '14 Apr' },
    { time: 'Friday', date: '14 Apr' },
    { time: 'Today', date: '12 Apr' },
    { time: 'Tomorrow', date: '12 Apr' },
    { time: 'Thursday', date: '14 Apr' },
    { time: 'Friday', date: '14 Apr' },
  ];

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="px-4 pt-3 pb-3 border-b border-gray-200">
        <View className="flex-row justify-between items-center">
          <Text variant="titleLarge" className="text-xl font-normal">Book a table</Text>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="close" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Content */}
      <ScrollView className="flex-1 px-4">
        {/* Table Size */}
        <View className="mt-4">
          <Text className="text-[15px] text-gray-600 mb-2.5">Table for</Text>
          <View className="flex-row gap-2">
            {guestOptions.map((number) => (
              <TouchableOpacity
                key={number}
                onPress={() => setSelectedGuests(number)}
                className={`w-[42px] h-[42px] rounded-lg items-center justify-center ${
                  selectedGuests === number ? 'bg-blue-500' : 'bg-gray-50'
                }`}
              >
                <Text className={`text-[15px] ${selectedGuests === number ? 'text-white' : 'text-gray-900'}`}>
                  {number}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Date Selection */}
        <View className="mt-6">
          <Text className="text-[15px] text-gray-600 mb-2.5">Date</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row gap-2">
              {dateOptions.map((option) => (
                <TouchableOpacity
                  key={option.label}
                  onPress={() => setSelectedDate(option.label)}
                  className={`border rounded-lg px-3 py-1.5 ${
                    selectedDate === option.label 
                      ? 'bg-blue-500 border-blue-500' 
                      : 'bg-white border-gray-200'
                  }`}
                >
                  <Text 
                    className={`text-[15px] ${selectedDate === option.label ? 'text-white' : 'text-gray-900'}`}
                  >
                    {option.label}
                  </Text>
                  <Text 
                    className={`text-xs ${
                      selectedDate === option.label ? 'text-white/90' : 'text-gray-500'
                    }`}
                  >
                    {option.date}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Time Selection */}
        <View className="mt-6">
          <Text className="text-[15px] text-gray-600 mb-2.5">Time</Text>
          <View className="h-[340px]">
            <ScrollView showsVerticalScrollIndicator={false}>
              <View className="flex-row flex-wrap gap-2">
                {timeSlots.map((slot, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => setSelectedTime(slot.time)}
                    style={{ width: '48%' }}
                    className={`border rounded-lg px-3 py-1.5 ${
                      selectedTime === slot.time 
                        ? 'bg-blue-500 border-blue-500' 
                        : 'bg-white border-gray-200'
                    }`}
                  >
                    <Text 
                      className={`text-[15px] ${selectedTime === slot.time ? 'text-white' : 'text-gray-900'}`}
                    >
                      {slot.time}
                    </Text>
                    <Text 
                      className={`text-xs ${
                        selectedTime === slot.time ? 'text-white/90' : 'text-gray-500'
                      }`}
                    >
                      {slot.date}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Button */}
      <View className="px-4 py-4 border-t border-gray-200">
        <TouchableOpacity 
          onPress={() => router.push('/reservation-details')}
          className="bg-blue-500 py-3.5 rounded-2xl items-center justify-center"
        >
          <Text className="text-white text-[15px] font-normal">Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
} 