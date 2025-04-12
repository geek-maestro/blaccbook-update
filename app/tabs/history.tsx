import React from 'react';
import { View, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { router, Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

interface ActivityItem {
  id: string;
  name: string;
  date: string;
  amount: string;
  image: any;
  hasServiceReorder?: boolean;
}

export default function History() {
  const recentActivities: ActivityItem[] = [
    {
      id: '1',
      name: 'Ice-cream Palce',
      date: '10-Mar 2023, 3:10PM',
      amount: 'S$15.00',
      image: require('../../assets/images/restaurantIcon.jpeg'),
      hasServiceReorder: false,
    },
    {
      id: '2',
      name: 'Clay Oven',
      date: '09-Mar 2023, 3:10PM',
      amount: 'S$30.00',
      image: require('../../assets/images/dish1.jpeg'),
      hasServiceReorder: false,
    },
    {
      id: '3',
      name: 'Bay Cleaning Service',
      date: '09-Mar 2023, 3:10PM',
      amount: 'S$15.00',
      image: require('../../assets/images/dish2.jpeg'),
      hasServiceReorder: true,
    },
    {
      id: '4',
      name: 'Payment Received-Bay...',
      date: '09-Mar 2023, 3:10PM',
      amount: '',
      image: require('../../assets/images/restaurantIcon.jpeg'),
      hasServiceReorder: true,
    },
  ];

  return (
    <View style={styles.container}>
      <Stack.Screen 
        options={{ 
          headerShown: false
        }} 
      />

      {/* Status Bar Time */}
    

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Activity</Text>
        <TouchableOpacity style={styles.historyButton}
            onPress={() => router.push('/full-history')}
        >
          <Ionicons name="time-outline" size={18} color="#2563eb" />
          <Text style={styles.historyText}>History</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {/* Recent Section */}
        <Text style={styles.sectionTitle}>Recent</Text>
        
        {recentActivities.map((activity) => (
          <View key={activity.id} style={styles.activityItem}>
            <View style={styles.activityLeft}>
              <Image 
                source={activity.image}
                style={styles.activityImage}
              />
              <View style={styles.activityDetails}>
                <Text style={styles.activityName}>{activity.name}</Text>
                <Text style={styles.activityDate}>{activity.date}</Text>
                <View style={styles.activityActions}>
                  <TouchableOpacity style={styles.actionButtonContainer}>
                    <Text style={styles.actionButton}>Rate</Text>
                    <Ionicons name="chevron-forward" size={16} color="#2563eb" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.actionButtonContainer}>
                    <Text style={styles.actionButton}>
                      {activity.hasServiceReorder ? 'Service Reorder' : 'Reorder'}
                    </Text>
                    <Ionicons name="chevron-forward" size={16} color="#2563eb" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {activity.amount && (
              <Text style={styles.amount}>{activity.amount}</Text>
            )}
          </View>
        ))}

        <TouchableOpacity 
          style={styles.viewAllButton}
          onPress={() => router.push('/full-history')}
        >
          <Text style={styles.viewAllText}>
            View Full History 
            <Ionicons name="chevron-forward" size={16} color="#2563eb" />
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBar: {
    height: 44,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  statusBarTime: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 44,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '600',
    color: '#000',
  },
  historyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EBF5FF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 4,
  },
  historyText: {
    color: '#2563eb',
    fontSize: 15,
    fontWeight: '500',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '400',
    color: '#6B7280',
    marginBottom: 16,
  },
  activityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 28,
  },
  activityLeft: {
    flexDirection: 'row',
    flex: 1,
  },
  activityImage: {
    width: 52,
    height: 52,
    borderRadius: 26,
    marginRight: 16,
  },
  activityDetails: {
    flex: 1,
  },
  activityName: {
    fontSize: 17,
    fontWeight: '500',
    color: '#000',
    marginBottom: 4,
  },
  activityDate: {
    fontSize: 15,
    color: '#6B7280',
    marginBottom: 8,
  },
  activityActions: {
    flexDirection: 'row',
    gap: 24,
  },
  actionButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  actionButton: {
    color: '#2563eb',
    fontSize: 15,
    fontWeight: '500',
  },
  amount: {
    fontSize: 17,
    fontWeight: '500',
    color: '#000',
    marginLeft: 16,
  },
  viewAllButton: {
    paddingVertical: 16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
  },
  viewAllText: {
    color: '#2563eb',
    fontSize: 15,
    fontWeight: '500',
  },
}); 