import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

interface ActivityItem {
  id: string;
  name: string;
  date: string;
  amount: string;
  image: any;
  hasServiceReorder?: boolean;
}

export default function FullHistory() {
  const [selectedCategory, setSelectedCategory] = useState('Transport');
  
  const categories = [
    'Transport',
    'Take Out',
    'Hotels',
    'Health',
    'More'
  ];

  const activities: ActivityItem[] = [
    {
      id: '1',
      name: 'Ice-cream Palce',
      date: '10-Mar 2023, 3:10PM',
      amount: 'S$15.00',
      image: require('../assets/images/restaurantIcon.jpeg'),
    },
    {
      id: '2',
      name: 'Clay Oven',
      date: '09-Mar 2023, 3:10PM',
      amount: 'S$30.00',
      image: require('../assets/images/dish1.jpeg'),
    },
    {
      id: '3',
      name: 'Bay Cleaning Service',
      date: '09-Mar 2023, 3:10PM',
      amount: 'S$15.00',
      image: require('../assets/images/dish2.jpeg'),
      hasServiceReorder: true,
    },
    {
      id: '4',
      name: 'Payment Received-Bay...',
      date: '09-Mar 2023, 3:10PM',
      amount: '',
      image: require('../assets/images/restaurantIcon.jpeg'),
    },
    {
      id: '5',
      name: 'Delivery service',
      date: '10-Mar 2023, 3:10PM',
      amount: 'S$10.00',
      image: require('../assets/images/restaurantIcon.jpeg'),
    },
    {
      id: '6',
      name: 'Bay Hotel',
      date: '09-Mar 2023, 3:10PM',
      amount: 'S$30.00',
      image: require('../assets/images/dish1.jpeg'),
    },
    {
      id: '7',
      name: 'Mister Cutt',
      date: '09-Mar 2023, 3:10PM',
      amount: 'S$15.00',
      image: require('../assets/images/dish2.jpeg'),
      hasServiceReorder: true,
    },
    {
      id: '8',
      name: 'Chicken Inn',
      date: '09-Mar 2023, 3:10PM',
      amount: 'S$15.00',
      image: require('../assets/images/restaurantIcon.jpeg'),
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

      {/* Header with back button */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity 
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <Ionicons name="chevron-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Activity</Text>
        </View>

        {/* Categories */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesScroll}
          contentContainerStyle={styles.categoriesContainer}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              onPress={() => setSelectedCategory(category)}
              style={[
                styles.categoryButton,
                selectedCategory === category && styles.categoryButtonActive
              ]}
            >
              <Text style={[
                styles.categoryText,
                selectedCategory === category && styles.categoryTextActive
              ]}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Activity List */}
      <ScrollView style={styles.content}>
        {activities.map((activity) => (
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#fff',
    paddingTop: 44,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    marginRight: 16,
    padding: 4,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  categoriesScroll: {
    marginTop: 8,
  },
  categoriesContainer: {
    paddingHorizontal: 16,
    paddingBottom: 12,
    gap: 8,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    marginRight: 8,
  },
  categoryButtonActive: {
    backgroundColor: '#2563eb',
  },
  categoryText: {
    fontSize: 15,
    color: '#6B7280',
    fontWeight: '500',
  },
  categoryTextActive: {
    color: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
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
}); 