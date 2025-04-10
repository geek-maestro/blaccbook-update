import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function ConfirmReservation() {
  const bookingDetails = {
    bookingId: '#100378445674',
    hotelName: 'Limelight-Royal Orchid Hotel',
    guestCount: '03 Guest',
    dateTime: 'Tuesday | 13 Apr | 07:00PM',
  };

  return (
    <View style={styles.container}>
      <Stack.Screen 
        options={{ 
          headerShown: false
        }} 
      />

      {/* Close Button */}
      <TouchableOpacity 
        onPress={() => router.back()}
        style={styles.closeButton}
      >
        <Ionicons name="close" size={24} color="#000" />
      </TouchableOpacity>

      {/* Main Content */}
      <View style={styles.content}>
        {/* Restaurant Image */}
        <View style={styles.imageContainer}>
          <Image 
            source={require('../assets/images/restaurantIcon.jpeg')}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        {/* Booking Status */}
        <Text style={styles.confirmationText}>
          Booking Confirmed!!
        </Text>

        {/* Booking Details */}
        <View style={styles.detailsContainer}>
          {/* Booking ID */}
          <View style={styles.detailRow}>
            <Text style={styles.labelText}>Booking ID</Text>
            <Text style={styles.valueText}>{bookingDetails.bookingId}</Text>
          </View>

          {/* Hotel Name */}
          <View style={styles.detailRow}>
            <Text style={styles.hotelName}>{bookingDetails.hotelName}</Text>
            <Text style={styles.bookingIdText}>{bookingDetails.bookingId}</Text>
          </View>

          {/* Guest Count */}
          <View style={styles.iconRow}>
            <Ionicons name="people-outline" size={20} color="#666" />
            <Text style={styles.detailText}>{bookingDetails.guestCount}</Text>
          </View>

          {/* Date Time */}
          <View style={styles.iconRow}>
            <Ionicons name="calendar-outline" size={20} color="#666" />
            <Text style={styles.detailText}>{bookingDetails.dateTime}</Text>
          </View>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.modifyButton}
          onPress={() => {
            // Handle modify booking
          }}
        >
          <Text style={styles.modifyButtonText}>Modify Booking</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.cancelButton}
          onPress={() => {
            // Handle cancel booking
          }}
        >
          <Text style={styles.cancelButtonText}>Cancel Booking</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 16,
    marginTop: 40,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
    marginBottom: 24,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  confirmationText: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 32,
    textAlign: 'center',
  },
  detailsContainer: {
    width: '100%',
    marginBottom: 32,
  },
  detailRow: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    paddingBottom: 12,
    marginBottom: 12,
  },
  labelText: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  valueText: {
    fontSize: 16,
    color: '#111827',
  },
  hotelName: {
    fontSize: 16,
    color: '#111827',
    fontWeight: '500',
    marginBottom: 4,
  },
  bookingIdText: {
    fontSize: 14,
    color: '#6B7280',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  detailText: {
    marginLeft: 8,
    fontSize: 15,
    color: '#4B5563',
  },
  buttonContainer: {
    padding: 20,
  },
  modifyButton: {
    backgroundColor: '#2563EB',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  modifyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  cancelButton: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  cancelButtonText: {
    color: '#374151',
    fontSize: 16,
    fontWeight: '500',
  },
});
