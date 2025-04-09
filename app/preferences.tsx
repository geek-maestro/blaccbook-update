import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Text } from 'react-native-paper';
import { Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

interface FoodCategory {
  id: string;
  name: string;
  image: string;
}

export default function Preferences() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const foodCategories: FoodCategory[] = [
    { id: '1', name: 'Pizza', image: 'https://source.unsplash.com/800x800/?pizza' },
    { id: '2', name: 'Coffee', image: 'https://source.unsplash.com/800x800/?coffee' },
    { id: '3', name: 'Bakery', image: 'https://source.unsplash.com/800x800/?bakery' },
    { id: '4', name: 'Meals', image: 'https://source.unsplash.com/800x800/?meal' },
    { id: '5', name: 'Bubble Tea', image: 'https://source.unsplash.com/800x800/?bubble-tea' },
    { id: '6', name: 'Ice-cream', image: 'https://source.unsplash.com/800x800/?ice-cream' },
    { id: '7', name: 'Cupcakes', image: 'https://source.unsplash.com/800x800/?cupcakes' },
  ];

  const toggleCategory = (id: string) => {
    setSelectedCategories(prev => 
      prev.includes(id) 
        ? prev.filter(catId => catId !== id)
        : [...prev, id]
    );
  };

  return (
    <View style={styles.container}>
      <Stack.Screen 
        options={{ 
          headerShown: false
        }} 
      />

      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.statusBarTime}>9:41</Text>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => router.back()}
          style={styles.closeButton}
        >
          <Ionicons name="close" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.helpButton}>
          <Ionicons name="help-circle-outline" size={20} color="#666" />
          <Text style={styles.helpText}>Help and support</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView style={styles.content}>
        {/* Title Section */}
        <View style={styles.titleSection}>
          <View style={styles.iconContainer}>
            <Ionicons name="heart-outline" size={24} color="#2563EB" />
          </View>
          <Text style={styles.title}>See more of what{'\n'}you love</Text>
          <Text style={styles.subtitle}>
            Your selections would help us give you better{'\n'}
            results and recommendations when you explore{'\n'}
            on Blaccbook
          </Text>
        </View>

        {/* Categories Section */}
        <View style={styles.categoriesSection}>
          <Text style={styles.sectionTitle}>FOOD & DRINKS</Text>
          <View style={styles.grid}>
            {foodCategories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={styles.categoryItem}
                onPress={() => toggleCategory(category.id)}
              >
                <Image
                  source={{ uri: category.image }}
                  style={styles.categoryImage}
                />
                <TouchableOpacity 
                  style={[
                    styles.heartButton,
                    selectedCategories.includes(category.id) && styles.heartButtonSelected
                  ]}
                  onPress={() => toggleCategory(category.id)}
                >
                  <Ionicons
                    name={selectedCategories.includes(category.id) ? "heart" : "heart-outline"}
                    size={20}
                    color={selectedCategories.includes(category.id) ? "#fff" : "#000"}
                  />
                </TouchableOpacity>
                <Text style={styles.categoryName}>{category.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Add Preference Button */}
      <TouchableOpacity 
        style={[
          styles.addButton,
          selectedCategories.length > 0 && styles.addButtonActive
        ]}
        disabled={selectedCategories.length === 0}
      >
        <Text style={styles.addButtonText}>Add preference</Text>
      </TouchableOpacity>
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
    alignItems: 'center',
  },
  statusBarTime: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  closeButton: {
    padding: 4,
  },
  helpButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  helpText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  content: {
    flex: 1,
  },
  titleSection: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 32,
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
  categoriesSection: {
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#666',
    marginBottom: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  categoryItem: {
    width: '30%',
    marginBottom: 16,
  },
  categoryImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 12,
    marginBottom: 8,
  },
  heartButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  heartButtonSelected: {
    backgroundColor: '#2563EB',
  },
  categoryName: {
    fontSize: 15,
    color: '#000',
    textAlign: 'center',
  },
  addButton: {
    margin: 16,
    paddingVertical: 16,
    borderRadius: 24,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
  },
  addButtonActive: {
    backgroundColor: '#2563EB',
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
  },
}); 