import React from 'react';
import { View, TouchableOpacity, ScrollView, StyleSheet, Image, ImageBackground } from 'react-native';
import { Text } from 'react-native-paper';
import { Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

interface Collection {
  id: string;
  title: string;
  description: string;
  author: string;
  imageUrl: any;
  itemCount?: number;
  location?: string;
}

export default function Collections() {
  const featuredCollections: Collection[] = [
    {
      id: '1',
      title: 'Black-own businesses...',
      description: 'This is a growing collection of black-owned restaurants in the south',
      author: 'By David D.',
      imageUrl: require('../assets/images/dish1.jpeg'),
      itemCount: 20,
      location: 'Menlo Park, CA 94025'
    },
    {
      id: '2',
      title: 'Black-own businesses...',
      description: 'This is a growing collection of black-owned restaurants in the south',
      author: 'By David',
      imageUrl: require('../assets/images/dish2.jpeg'),
      itemCount: 15
    }
  ];

  const myCollections: Collection[] = [
    {
      id: '3',
      title: 'My Favorite Spots',
      description: 'Personal collection of favorite restaurants',
      author: 'By Me',
      imageUrl: require('../assets/images/restaurantIcon.jpeg')
    }
  ];

  const renderCollectionCard = (collection: Collection, isFeatured: boolean = false) => (
    <TouchableOpacity 
      key={collection.id}
      style={[styles.collectionCard, isFeatured && styles.featuredCard]}
    >
      <ImageBackground 
        source={collection.imageUrl}
        style={styles.cardImage}
        imageStyle={{ borderRadius: 12 }}
      >
        {isFeatured && collection.itemCount && (
          <View style={styles.itemCountContainer}>
            <Text style={styles.itemCountText}>{collection.itemCount}</Text>
          </View>
        )}
        <TouchableOpacity style={styles.saveButton}>
          <Ionicons name="bookmark-outline" size={24} color="white" />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle} numberOfLines={1}>
          {collection.title}
        </Text>
        <Text style={styles.cardDescription} numberOfLines={2}>
          {collection.description}
        </Text>
        <Text style={styles.cardAuthor}>
          {collection.author}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Stack.Screen 
        options={{ 
          headerShown: false
        }} 
      />

      {/* Header */}
      <ImageBackground
        source={require('../assets/images/restaurantIcon.jpeg')}
        style={styles.headerBackground}
      >
        <View style={styles.headerContent}>
          <TouchableOpacity 
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Collections</Text>
          <TouchableOpacity style={styles.createButton}>
            <Text style={styles.createButtonText}>Create</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <ScrollView style={styles.content}>
        {/* Featured Collections */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Featured in {featuredCollections[0].location}
          </Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScroll}
          >
            {featuredCollections.map(collection => 
              renderCollectionCard(collection, true)
            )}
          </ScrollView>
        </View>

        {/* My Collections */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>My Collections</Text>
          {myCollections.map(collection => 
            renderCollectionCard(collection)
          )}
        </View>

        {/* Following Collections */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Following Collections</Text>
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>
              You aren't following any collections
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  headerBackground: {
    height: 200,
    justifyContent: 'flex-end'
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  backButton: {
    padding: 8
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFFFFF'
  },
  createButton: {
    padding: 8
  },
  createButtonText: {
    color: '#FFFFFF',
    fontSize: 16
  },
  content: {
    flex: 1
  },
  section: {
    padding: 16
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    color: '#111827'
  },
  horizontalScroll: {
    marginLeft: -16,
    paddingLeft: 16
  },
  collectionCard: {
    marginRight: 16,
    width: 280,
    marginBottom: 16
  },
  featuredCard: {
    width: 250
  },
  cardImage: {
    height: 160,
    justifyContent: 'space-between',
    padding: 12
  },
  itemCountContainer: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start'
  },
  itemCountText: {
    color: '#111827',
    fontWeight: '500'
  },
  saveButton: {
    alignSelf: 'flex-end'
  },
  cardContent: {
    paddingTop: 12
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4
  },
  cardDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
    lineHeight: 20
  },
  cardAuthor: {
    fontSize: 14,
    color: '#4B5563'
  },
  emptyState: {
    padding: 16,
    backgroundColor: '#F3F4F6',
    borderRadius: 12
  },
  emptyStateText: {
    color: '#6B7280',
    textAlign: 'center'
  }
}); 