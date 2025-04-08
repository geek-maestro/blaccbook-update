import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Text } from 'react-native-paper';
import { Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

interface CategoryRating {
  taste: number;
  portion: number;
  packaging: number;
}

export default function RateService() {
  const [overallRating, setOverallRating] = useState(0);
  const [ratings, setRatings] = useState<CategoryRating>({
    taste: 0,
    portion: 0,
    packaging: 0
  });
  const [comment, setComment] = useState('');

  const renderOverallStars = () => {
    return [...Array(5)].map((_, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => setOverallRating(index + 1)}
        style={styles.overallStarButton}
      >
        <Ionicons
          name={index < overallRating ? "star" : "star-outline"}
          size={32}
          color="#FFD700"
        />
      </TouchableOpacity>
    ));
  };

  const renderCategoryStars = (category: keyof CategoryRating) => {
    return [...Array(5)].map((_, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => setRatings(prev => ({ ...prev, [category]: index + 1 }))}
        style={styles.categoryStarButton}
      >
        <Ionicons
          name={index < ratings[category] ? "star" : "star-outline"}
          size={20}
          color="#FFD700"
        />
      </TouchableOpacity>
    ));
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
          style={styles.backButton}
        >
          <Ionicons name="close" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.helpButton}>
          <Ionicons name="information-circle-outline" size={20} color="#666" />
          <Text style={styles.helpText}>Help and support</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Overall Rating */}
        <View style={styles.overallRating}>
          <View style={styles.overallStars}>
            {renderOverallStars()}
          </View>
          <Text style={styles.ratingTitle}>How Great was it ?</Text>
        </View>

        {/* Rating Categories */}
        <View style={styles.ratingCategories}>
          {/* Taste Rating */}
          <View style={styles.categoryCard}>
            <View style={styles.categoryLeft}>
              <Text style={styles.categoryLabel}>Taste</Text>
              <Text style={styles.ratingRange}>BAD</Text>
            </View>
            <View style={styles.categoryRight}>
              <View style={styles.categoryStars}>
                {renderCategoryStars('taste')}
              </View>
              <Text style={styles.ratingRange}>GREAT</Text>
            </View>
          </View>

          {/* Portion Rating */}
          <View style={styles.categoryCard}>
            <View style={styles.categoryLeft}>
              <Text style={styles.categoryLabel}>Portion</Text>
              <Text style={styles.ratingRange}>BAD</Text>
            </View>
            <View style={styles.categoryRight}>
              <View style={styles.categoryStars}>
                {renderCategoryStars('portion')}
              </View>
              <Text style={styles.ratingRange}>GREAT</Text>
            </View>
          </View>

          {/* Packaging Rating */}
          <View style={styles.categoryCard}>
            <View style={styles.categoryLeft}>
              <Text style={styles.categoryLabel}>Packaging</Text>
              <Text style={styles.ratingRange}>BAD</Text>
            </View>
            <View style={styles.categoryRight}>
              <View style={styles.categoryStars}>
                {renderCategoryStars('packaging')}
              </View>
              <Text style={styles.ratingRange}>GREAT</Text>
            </View>
          </View>
        </View>

        {/* Comment Box */}
        <View style={styles.commentContainer}>
          <TextInput
            style={styles.commentInput}
            placeholder="Let people know about your purchase"
            multiline
            numberOfLines={4}
            value={comment}
            onChangeText={setComment}
            placeholderTextColor="#666"
          />
        </View>

        {/* Footer Note */}
        <View style={styles.footer}>
          <Ionicons name="information-circle-outline" size={16} color="#666" />
          <Text style={styles.footerText}>
            Review will appear publicly
          </Text>
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
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
  backButton: {
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
    paddingHorizontal: 16,
  },
  overallRating: {
    alignItems: 'center',
    marginBottom: 24,
  },
  overallStars: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  overallStarButton: {
    padding: 4,
  },
  ratingTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  ratingCategories: {
    gap: 12,
  },
  categoryCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  categoryLeft: {
    gap: 4,
  },
  categoryRight: {
    alignItems: 'flex-end',
    gap: 4,
  },
  categoryLabel: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  ratingRange: {
    fontSize: 12,
    color: '#666',
  },
  categoryStars: {
    flexDirection: 'row',
    gap: 4,
  },
  categoryStarButton: {
    padding: 2,
  },
  commentContainer: {
    marginTop: 24,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  commentInput: {
    height: 120,
    padding: 12,
    textAlignVertical: 'top',
    fontSize: 16,
    color: '#000',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  footerText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 6,
  },
  submitButton: {
    backgroundColor: '#2563EB',
    borderRadius: 24,
    padding: 16,
    alignItems: 'center',
    marginTop: 24,
    marginHorizontal: 16,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
}); 