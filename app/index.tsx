//entry//
import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";

import Splash from "./splash";

SplashScreen.preventAutoHideAsync();

const Index = () => {
  const router = useRouter();

  let [fontsLoaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    Poppins_SemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
  });

  useEffect(() => {
    const prepare = async () => {
      if (fontsLoaded) {
      
        await SplashScreen.preventAutoHideAsync();
        await new Promise((resolve) => setTimeout(resolve, 2000));
        await SplashScreen.hideAsync();

        router.replace("/auth/entry"); 
      }
    };

    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
     <Splash /> 
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
