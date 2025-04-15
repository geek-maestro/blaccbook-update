import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../api/utils/context/authContext';
import { client } from '../_layout';


export default function Profile() {
  const { logout } = useAuth();
  const user = client.getQueryData(['user']);
  console.log(user, "user");
  const mainMenuItems = [
    { title: 'Account', rightText: user?.email },
    { title: 'Change Password', showArrow: true },
    { title: 'Payment', showArrow: true },
    { title: 'Notifications', showArrow: true },
  ];

  const secondaryMenuItems = [
    { title: 'Bookmarks', count: '1' },
    { title: 'Collections', count: '2' },
    { title: 'Reviews', count: '1' },
    { title: 'FAQ', showArrow: true },
    { title: 'Preferences', showArrow: true },
    { title: 'Logout', showArrow: true },
  ];

  const renderMenuItem = (item:any) => (
    <TouchableOpacity 
      key={item.title}
      style={styles.menuItem}
      onPress={() => {
        switch (item.title) {
          case 'FAQ':
            router.push('/faq');
            break;
          case 'Change Password':
            router.push('/change-password');
            break;
          case 'Preferences':
            router.push('/preferences');
            break;
          case 'Notifications':
            router.push('/notifications');
            break;
          case 'Bookmarks':
            router.push('/bookmarks');
            break;
          case 'Collections':
            router.push('/collections');
            break;
          case 'Logout':
            logout;
            break
        }
      }}
    >
      <Text style={[
        styles.menuText,
        user?.email && styles.emailText
      ]}>
        {item.title}
      </Text>
      <View style={styles.rightContent}>
        {item.rightText && (
          <Text style={[
            styles.rightText,
            user?.email && styles.emailText
          ]}>
            {item.rightText}
          </Text>
        )}
        {item.count && (
          <Text style={styles.countText}>{item.count}</Text>
        )}
        {item.showArrow && (
          <Ionicons name="chevron-forward" size={20} color="#666" />
        )}
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

      {/* Profile Header */}
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{user?.name.slice(0, 1)}</Text>
            </View>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.name} className='capitalize'>{user?.name}</Text>
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={16} color="#FFD700" />
              <Text style={styles.rating}>4.5</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Menu Sections */}
      <View style={styles.menuSection}>
        {mainMenuItems.map(renderMenuItem)}
      </View>

      <View style={[styles.menuSection, styles.menuSectionSpace]}>
        {secondaryMenuItems.map(renderMenuItem)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA'
  },
  header: {
    backgroundColor: '#FFFFFF',
    paddingTop: 60,
    paddingBottom: 24,
    paddingHorizontal: 16
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatarContainer: {
    position: 'relative'
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#2563EB',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '600'
  },
  profileInfo: {
    marginLeft: 16
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827'
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4
  },
  rating: {
    marginLeft: 4,
    color: '#4B5563'
  },
  menuSection: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16
  },
  menuSectionSpace: {
    marginTop: 8
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6'
  },
  menuText: {
    fontSize: 16,
    color: '#111827'
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rightText: {
    marginRight: 8,
    color: '#6B7280'
  },
  emailText: {
    color: '#2563EB'
  },
  countText: {
    color: '#6B7280',
    marginRight: 8
  }
}); 