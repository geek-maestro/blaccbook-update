import { View, Text, Modal } from 'react-native';
import React, { useEffect } from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

const LoadingState = () => {
  const item = useSharedValue(0);
  const duration = 5000;
  const easing = Easing.bezier(0.25, 0.1, 0.25, 1);

  useEffect(() => {
    item.value = withRepeat(withTiming(1, { duration, easing }), -1);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${item.value * 360}deg` }],
  }));
  return (
    <View className="flex-1">
      <Modal>
        <View className="flex-1 items-center justify-center bg-[#1E282E7A]">
          <View className="aspect-square w-full items-center justify-center rounded-2xl bg-[#F3F8FF]">
            <Animated.Image
              source={require('../assets/icons/loading.png')}
              className="h-[90px] w-[90px]"
              resizeMode="cover"
              style={animatedStyle}
            />
            <Text>Loading maps</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default LoadingState;
