import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Splash = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('@/assets/images/watermark.png')} />
      <Image style={styles.splash} source={require('@/assets/images/splash.png')} />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#8D85E0'
  },
  splash: {
    alignSelf: 'center',
  }
})