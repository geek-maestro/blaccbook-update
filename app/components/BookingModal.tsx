import React, { useState } from 'react';
import { View, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

interface BookingModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export function BookingModal({ isVisible, onClose }: BookingModalProps) {
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
    { time: '07:30PM', date: '14 Apr' },
    { time: '07:45PM', date: '14 Apr' },
    { time: '08:00PM', date: '12 Apr' },
    { time: '08:15PM', date: '12 Apr' },
    { time: '08:30PM', date: '14 Apr' },
  ];

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
    >
      <View className="flex-1 bg-black/50 justify-end">
        <View className="bg-white rounded-t-3xl">
          <View className="p-4 border-b border-gray-200">
            <View className="flex-row justify-between items-center">
              <Text className="text-xl font-semibold text-gray-800">Book a table</Text>
              <TouchableOpacity onPress={onClose}>
                <Ionicons name="close" size={24} color="#666" />
              </TouchableOpacity>
            </View>
          </View>

          <View className="p-4">
            <Text className="text-gray-600 mb-2">Table for</Text>
            <View className="flex-row gap-2 mb-6">
              {guestOptions.map((number) => (
                <TouchableOpacity
                  key={number}
                  onPress={() => setSelectedGuests(number)}
                  className={`w-12 h-12 rounded-lg items-center justify-center ${
                    selectedGuests === number ? 'bg-blue-500' : 'bg-gray-100'
                  }`}
                >
                  <Text className={selectedGuests === number ? 'text-white' : 'text-gray-700'}>
                    {number}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text className="text-gray-600 mb-2">Date</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-6">
              <View className="flex-row gap-2">
                {dateOptions.map((option) => (
                  <TouchableOpacity
                    key={option.label}
                    onPress={() => setSelectedDate(option.label)}
                    className={`px-4 py-2 rounded-lg ${
                      selectedDate === option.label ? 'bg-blue-500' : 'bg-gray-100'
                    }`}
                  >
                    <Text className={selectedDate === option.label ? 'text-white' : 'text-gray-700'}>
                      {option.label}
                    </Text>
                    <Text className={`text-xs ${
                      selectedDate === option.label ? 'text-white/80' : 'text-gray-500'
                    }`}>
                      {option.date}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>

            <Text className="text-gray-600 mb-2">Time</Text>
            <ScrollView showsVerticalScrollIndicator={false} className="h-48 mb-6">
              <View className="flex-row flex-wrap gap-2">
                {timeSlots.map((slot, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => setSelectedTime(slot.time)}
                    className={`px-4 py-2 rounded-lg ${
                      selectedTime === slot.time ? 'bg-blue-500' : 'bg-gray-100'
                    }`}
                  >
                    <Text className={selectedTime === slot.time ? 'text-white' : 'text-gray-700'}>
                      {slot.time}
                    </Text>
                    <Text className={`text-xs ${
                      selectedTime === slot.time ? 'text-white/80' : 'text-gray-500'
                    }`}>
                      {slot.date}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>

            <TouchableOpacity 
              className="bg-blue-500 py-4 rounded-xl items-center justify-center"
            >
              <Text className="text-white text-base font-semibold">Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
} 