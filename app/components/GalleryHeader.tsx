import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar, Text } from 'react-native-paper';

interface GalleryHeaderProps {
  title: string;
}

export const GalleryHeader: React.FC<GalleryHeaderProps> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title={title} />
      </Appbar.Header>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  header: {
    backgroundColor: '#6200ee',
  },
}); 