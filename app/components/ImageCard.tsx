import React from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

interface ImageCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.9;

export const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, title, description }) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Image 
          source={{ uri: imageUrl }} 
          style={styles.image}
          resizeMode="cover"
        />
        <Title style={styles.title}>{title}</Title>
        <Paragraph style={styles.description}>{description}</Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    width: CARD_WIDTH,
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
}); 