import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Text, View, Dimensions } from 'react-native';

interface PlaceCardProps {
  title: string;
  image: any;
  subtitle: string;
  onPress?: () => void;
}

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 48) / 2;

export const PlaceCard: React.FC<PlaceCardProps> = ({ title, image, subtitle, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    elevation: 2,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  content: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
}); 