import React from 'react';
import { View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

interface Notification {
  id: string;
  title: string;
  message: string;
  timeAgo: string;
  icon: string;
  iconBgColor: string;
}

export default function Notifications() {
  const notifications: Notification[] = [
    {
      id: '1',
      title: 'Order Confirmed',
      message: 'Your order #1234 has been confirmed and is being prepared',
      timeAgo: '2 min ago',
      icon: 'checkmark-circle',
      iconBgColor: '#4CAF50'
    },
    {
      id: '2',
      title: 'Special Offer',
      message: 'Get 20% off on your next order at Restaurant XYZ',
      timeAgo: '1 hour ago',
      icon: 'gift',
      iconBgColor: '#FF9800'
    },
    {
      id: '3',
      title: 'Delivery Update',
      message: 'Your order is out for delivery and will arrive in 15 minutes',
      timeAgo: '3 hours ago',
      icon: 'bicycle',
      iconBgColor: '#2196F3'
    },
    {
      id: '4',
      title: 'Review Request',
      message: 'How was your experience with Restaurant ABC? Leave a review!',
      timeAgo: '1 day ago',
      icon: 'star',
      iconBgColor: '#FFC107'
    }
  ];

  const EmptyState = () => (
    <View style={styles.emptyContainer}>
      <View style={styles.emptyIconContainer}>
        <Ionicons name="chatbox-outline" size={32} color="#9CA3AF" />
        <View style={styles.emptyDot} />
      </View>
      <Text style={styles.emptyTitle}>No Notifications</Text>
      <Text style={styles.emptyMessage}>
        We'll let you know when there will be something to update you.
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Stack.Screen 
        options={{ 
          headerShown: false
        }} 
      />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="#2563EB" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>

      {/* Content */}
      {notifications.length > 0 ? (
        <ScrollView style={styles.scrollView}>
          {notifications.map((notification) => (
            <TouchableOpacity
              key={notification.id}
              style={styles.notificationItem}
            >
              <View style={[styles.iconContainer, { backgroundColor: notification.iconBgColor }]}>
                <Ionicons name={notification.icon} size={20} color="#4B5563" />
              </View>
              <View style={styles.notificationContent}>
                <View style={styles.notificationHeader}>
                  <Text style={styles.notificationTitle}>{notification.title}</Text>
                  <Text style={styles.timeAgo}>{notification.timeAgo}</Text>
                </View>
                <Text style={styles.notificationMessage}>{notification.message}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <EmptyState />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  header: {
    paddingTop: 48,
    paddingHorizontal: 16,
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  backButton: {
    marginRight: 16,
    padding: 4
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#111827'
  },
  scrollView: {
    flex: 1
  },
  notificationItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6'
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12
  },
  notificationContent: {
    flex: 1
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    flex: 1,
    marginRight: 8
  },
  timeAgo: {
    fontSize: 12,
    color: '#6B7280'
  },
  notificationMessage: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20
  },
  // Empty state styles
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24
  },
  emptyIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    position: 'relative'
  },
  emptyDot: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#9CA3AF'
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8
  },
  emptyMessage: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 20
  }
}); 