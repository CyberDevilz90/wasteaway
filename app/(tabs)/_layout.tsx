import { Tabs } from "expo-router";
import { StyleSheet, Image, Text } from "react-native";
import React from "react";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "#F5F4F6",
          elevation: 0,
          shadowOffset: { width: 0, height: 0 },
          marginBottom: 15,
        },
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let iconName;

          switch (route.name) {
            case "beranda":
              iconName = focused
                ? require("@/assets/images/icons/berandaActive.png")
                : require("@/assets/images/icons/berandaInactive.png");
              break;
            case "jemput":
              iconName = focused
                ? require("@/assets/images/icons/jemputActive.png")
                : require("@/assets/images/icons/jemputInactive.png");
              break;
            case "tagihan":
              iconName = focused
                ? require("@/assets/images/icons/tagihanActive.png")
                : require("@/assets/images/icons/tagihanInactive.png");
              break;
            case "pemberitahuan":
              iconName = focused
                ? require("@/assets/images/icons/notifActive.png")
                : require("@/assets/images/icons/notifInactive.png");
              break;
            case "profile":
              iconName = focused
                ? require("@/assets/images/icons/profileActive.png")
                : require("@/assets/images/icons/profileInactive.png");
              break;
          }

          return <Image source={iconName} style={styles.icon} />;
        },
        tabBarLabel: ({ focused }) => {
          let label;

          switch (route.name) {
            case "beranda":
              label = "Beranda";
              break;
            case "jemput":
              label = "Jemput";
              break;
            case "tagihan":
              label = "Tagihan";
              break;
            case "pemberitahuan":
              label = "Pemberitahuan";
              break;
            case "profile":
              label = "Profile";
              break;
          }

          return (
            <Text
              style={{ color: focused ? "#8D85E0" : "#000000", fontSize: 12 }}
            >
              {label}
            </Text>
          );
        },
      })}
    >
      <Tabs.Screen name="beranda" />
      <Tabs.Screen name="jemput" />
      <Tabs.Screen name="tagihan" />
      <Tabs.Screen name="pemberitahuan" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
};

export default TabLayout;

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
});
