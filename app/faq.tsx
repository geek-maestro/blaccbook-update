import React, { useState } from 'react';
import { View, TouchableOpacity, ScrollView, TextInput, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

interface FAQ {
  question: string;
  answer: string;
  isExpanded?: boolean;
}

interface Category {
  icon: string;
  title: string;
  color: string;
}

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [faqs, setFaqs] = useState<FAQ[]>([
    {
      question: 'How to create a account?',
      answer: 'Open the Tradelease app to get started and follow the steps. Tradelease doesn\'t charge a fee to create or maintain your Tradelease account.',
      isExpanded: true
    },
    {
      question: 'How to add a payment method by this app?',
      answer: 'You can add your payment method in the Payment section of your profile.',
      isExpanded: false
    },
    {
      question: 'What Time Does The Stock Market Open?',
      answer: 'The stock market typically opens at 9:30 AM EST.',
      isExpanded: false
    },
    {
      question: 'Is The Stock Market Open On Weekends?',
      answer: 'No, the stock market is closed on weekends.',
      isExpanded: false
    }
  ]);

  const categories: Category[] = [
    { icon: 'rocket-outline', title: 'Getting Started', color: 'bg-blue-100' },
    { icon: 'trending-up-outline', title: 'How to Invest', color: 'bg-green-100' },
    { icon: 'card-outline', title: 'Payment', color: 'bg-red-100' }
  ];

  const toggleFAQ = (index: number) => {
    const updatedFaqs = faqs.map((faq, i) => ({
      ...faq,
      isExpanded: i === index ? !faq.isExpanded : faq.isExpanded
    }));
    setFaqs(updatedFaqs);
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
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>FAQ</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            placeholder="Search for My Investments"
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <ScrollView style={styles.content}>
        {/* Categories */}
        <View style={styles.categoriesContainer}>
          {categories.map((category) => (
            <TouchableOpacity 
              key={category.title}
              style={[
                styles.categoryButton,
                { backgroundColor: category.color }
              ]}
            >
              <Ionicons name={category.icon as any} size={24} color="#666" />
              <Text style={styles.categoryText}>{category.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Top Questions */}
        <View style={styles.questionsSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Top Questions</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View all</Text>
            </TouchableOpacity>
          </View>

          {/* FAQ List */}
          {faqs.map((faq, index) => (
            <TouchableOpacity
              key={index}
              style={styles.faqItem}
              onPress={() => toggleFAQ(index)}
            >
              <View style={styles.faqHeader}>
                <Text style={styles.faqQuestion}>{faq.question}</Text>
                <Ionicons 
                  name={faq.isExpanded ? "remove" : "add"} 
                  size={24} 
                  color="#666"
                />
              </View>
              {faq.isExpanded && (
                <Text style={styles.faqAnswer}>{faq.answer}</Text>
              )}
            </TouchableOpacity>
          ))}
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 48,
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF'
  },
  backButton: {
    padding: 8,
    marginRight: 16
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#111827'
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    paddingHorizontal: 12
  },
  searchIcon: {
    marginRight: 8
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#111827'
  },
  content: {
    flex: 1,
    paddingHorizontal: 16
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16
  },
  categoryButton: {
    borderRadius: 12,
    padding: 16,
    width: '31%'
  },
  categoryText: {
    color: '#1F2937',
    marginTop: 8,
    fontSize: 14
  },
  questionsSection: {
    marginTop: 24
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#111827'
  },
  viewAllText: {
    color: '#EF4444'
  },
  faqItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2
  },
  faqHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  faqQuestion: {
    flex: 1,
    paddingRight: 16,
    color: '#111827',
    fontSize: 16
  },
  faqAnswer: {
    marginTop: 8,
    color: '#6B7280',
    fontSize: 14,
    lineHeight: 20
  }
}); 