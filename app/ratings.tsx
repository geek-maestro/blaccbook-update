import React from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

interface Review {
  id: string;
  name: string;
  initial: string;
  rating: number;
  timeAgo: string;
  comment: string;
  orderedItem?: string;
  backgroundColor: string;
}

export default function Ratings() {
  const overallRating = 4.4;
  const totalRatings = 2904;

  const reviews: Review[] = [
    {
      id: '1',
      name: 'Davida T.',
      initial: 'D',
      rating: 4,
      timeAgo: '17 hours ago',
      comment: 'I requested for two scoops of ice-cream but I only received one scoop.',
      orderedItem: 'Ice cream, Wafer, Give a thumbs up',
      backgroundColor: '#FCD34D',
    },
    {
      id: '2',
      name: 'Jerlyn T.',
      initial: 'J',
      rating: 5,
      timeAgo: '26 days ago',
      comment: 'The service was fast. Exactly what i expected!',
      orderedItem: 'Ordered: Sorbet',
      backgroundColor: '#60A5FA',
    },
    {
      id: '3',
      name: 'Samuel S.',
      initial: 'S',
      rating: 2,
      timeAgo: '27 days ago',
      comment: 'The customer service wasn\'t the best',
      orderedItem: 'Ordered: Gelato, Sorbet',
      backgroundColor: '#34D399',
    },
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Ionicons
        key={index}
        name={index < rating ? "star" : "star-outline"}
        size={16}
        color={index < rating ? "#FCD34D" : "#D1D5DB"}
      />
    ));
  };

  const renderRatingBar = (level: number, percentage: number) => {
    return (
      <View style={styles.ratingBarContainer}>
        <Text style={styles.ratingLevel}>{level}</Text>
        <View style={styles.ratingBarBg}>
          <View style={[styles.ratingBarFill, { width: `${percentage}%` }]} />
        </View>
      </View>
    );
  };

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
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Rating and Reviews</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Rating Overview */}
        <View style={styles.ratingOverview}>
          <View style={styles.ratingContent}>
            <View style={styles.ratingLeft}>
              <Text style={styles.ratingScore}>{overallRating}</Text>
              <View style={styles.starsContainer}>
                {renderStars(Math.floor(overallRating))}
              </View>
              <Text style={styles.totalRatings}>{totalRatings} ratings</Text>
            </View>

            {/* Rating Bars */}
            <View style={styles.ratingBars}>
              {renderRatingBar(5, 70)}
              {renderRatingBar(4, 50)}
              {renderRatingBar(3, 30)}
              {renderRatingBar(2, 15)}
              {renderRatingBar(1, 5)}
            </View>
          </View>
        </View>

        {/* Filter Buttons */}
        <View style={styles.filterContainer}>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Latest</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.filterButton, styles.filterButtonActive]}>
            <Text style={[styles.filterButtonText, styles.filterButtonTextActive]}>Written Reviews</Text>
          </TouchableOpacity>
        </View>

        {/* Reviews Section */}
        <View style={styles.reviewsSection}>
          <Text style={styles.reviewsTitle}>From Other</Text>
          
          {reviews.map((review) => (
            <View key={review.id} style={styles.reviewItem}>
              <View style={styles.reviewHeader}>
                <View style={[styles.reviewerInitial, { backgroundColor: review.backgroundColor }]}>
                  <Text style={styles.initialText}>{review.initial}</Text>
                </View>
                <View style={styles.reviewerInfo}>
                  <Text style={styles.reviewerName}>{review.name}</Text>
                  <View style={styles.ratingRow}>
                    <View style={styles.starsContainer}>
                      {renderStars(review.rating)}
                    </View>
                    <Text style={styles.timeAgo}>{review.timeAgo}</Text>
                  </View>
                </View>
              </View>
              
              <Text style={styles.reviewText}>{review.comment}</Text>
              <Text style={styles.orderedItem}>{review.orderedItem}</Text>
              
              <View style={styles.reviewActions}>
                <TouchableOpacity style={styles.helpfulButton}>
                  <Ionicons name="thumbs-up-outline" size={20} color="#6B7280" />
                  <Text style={styles.helpfulText}>Helpful?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.orderButton}>
                  <Text style={styles.orderButtonText}>Order this</Text>
                  <Ionicons name="chevron-forward" size={16} color="#2563eb" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 44,
    paddingHorizontal: 16,
    paddingBottom: 12,
    backgroundColor: '#fff',
  },
  backButton: {
    marginRight: 16,
    padding: 4,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  content: {
    flex: 1,
  },
  ratingOverview: {
    padding: 16,
    backgroundColor: '#fff',
  },
  ratingContent: {
    flexDirection: 'row',
    gap: 32,
    alignItems: 'center',
  },
  ratingLeft: {
    alignItems: 'center',
    width: 120,
  },
  ratingScore: {
    fontSize: 36,
    fontWeight: '700',
    color: '#000',
    marginBottom: 4,
  },
  starsContainer: {
    flexDirection: 'row',
    gap: 4,
    marginBottom: 4,
  },
  totalRatings: {
    fontSize: 14,
    color: '#6B7280',
  },
  ratingBars: {
    flex: 1,
    gap: 8,
  },
  ratingBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  ratingLevel: {
    fontSize: 14,
    color: '#6B7280',
    width: 16,
  },
  ratingBarBg: {
    flex: 1,
    height: 6,
    backgroundColor: '#F3F4F6',
    borderRadius: 3,
    overflow: 'hidden',
  },
  ratingBarFill: {
    height: '100%',
    backgroundColor: '#FCD34D',
    borderRadius: 3,
  },
  filterContainer: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
  },
  filterButtonActive: {
    backgroundColor: '#EBF5FF',
  },
  filterButtonText: {
    fontSize: 14,
    color: '#6B7280',
  },
  filterButtonTextActive: {
    color: '#2563eb',
  },
  reviewsSection: {
    padding: 16,
  },
  reviewsTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000',
    marginBottom: 16,
  },
  reviewItem: {
    marginBottom: 24,
  },
  reviewHeader: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  reviewerInitial: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  initialText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  reviewerInfo: {
    flex: 1,
  },
  reviewerName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    marginBottom: 4,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  timeAgo: {
    fontSize: 14,
    color: '#6B7280',
  },
  reviewText: {
    fontSize: 15,
    color: '#000',
    marginBottom: 8,
    lineHeight: 20,
  },
  orderedItem: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 12,
  },
  reviewActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  helpfulButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  helpfulText: {
    fontSize: 14,
    color: '#6B7280',
  },
  orderButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  orderButtonText: {
    fontSize: 14,
    color: '#2563eb',
    fontWeight: '500',
  },
}); 