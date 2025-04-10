import { View, Text, ImageBackground } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <ImageBackground className='w-full h-[200px] relative' source={require('~/assets/images/header.jpg')}>
      <View className='bg-[#00000033] h-full px-3'>
      <Text className='text-white text-5xl font-bold text my-auto'>Explore over {'\n'}1000+ businesses</Text>
      </View>
    </ImageBackground>
  )
}

export default Header