import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <View className="flex-1 bg-gray-50">
      <Stack.Screen 
        options={{ 
          headerShown: false
        }} 
      />

      {/* Header */}
      <View className="bg-white pt-12 px-4 pb-4">
        <View className="flex-row items-center">
          <TouchableOpacity 
            onPress={() => router.back()}
            className="mr-4"
          >
            <Ionicons name="arrow-back" size={24} color="#2563EB" />
          </TouchableOpacity>
          <Text className="text-xl font-medium">Change password</Text>
        </View>
      </View>

      <View className="px-4 pt-6">
        {/* Current Password */}
        <View className="mb-4">
          <Text className="text-gray-600 mb-2">Password</Text>
          <View className="flex-row items-center bg-white rounded-lg border border-gray-200">
            <TextInput
              secureTextEntry={!showCurrentPassword}
              value={currentPassword}
              onChangeText={setCurrentPassword}
              className="flex-1 h-12 px-4"
              placeholder="••••••••"
            />
            <TouchableOpacity 
              onPress={() => setShowCurrentPassword(!showCurrentPassword)}
              className="pr-4"
            >
              <Ionicons 
                name={showCurrentPassword ? "eye-off-outline" : "eye-outline"} 
                size={20} 
                color="#666" 
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* New Password */}
        <View className="mb-4">
          <Text className="text-gray-600 mb-2">New Password</Text>
          <View className="flex-row items-center bg-white rounded-lg border border-gray-200">
            <TextInput
              secureTextEntry={!showNewPassword}
              value={newPassword}
              onChangeText={setNewPassword}
              className="flex-1 h-12 px-4"
              placeholder="••••••••"
            />
            <TouchableOpacity 
              onPress={() => setShowNewPassword(!showNewPassword)}
              className="pr-4"
            >
              <Ionicons 
                name={showNewPassword ? "eye-off-outline" : "eye-outline"} 
                size={20} 
                color="#666" 
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Confirm Password */}
        <View className="mb-6">
          <Text className="text-gray-600 mb-2">Confirm Password</Text>
          <View className="flex-row items-center bg-white rounded-lg border border-gray-200">
            <TextInput
              secureTextEntry={!showConfirmPassword}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              className="flex-1 h-12 px-4"
              placeholder="••••••••"
            />
            <TouchableOpacity 
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              className="pr-4"
            >
              <Ionicons 
                name={showConfirmPassword ? "eye-off-outline" : "eye-outline"} 
                size={20} 
                color="#666" 
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Set Password Button */}
        <Button
          mode="contained"
          onPress={() => {
            // Handle password change
            router.back();
          }}
          className="rounded-full"
          buttonColor="#2563EB"
        >
          Set Password
        </Button>
      </View>
    </View>
  );
} 