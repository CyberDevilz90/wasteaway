import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { AuthProvider } from "./context/authContext";

const RootLayout = () => {
  return (
    <AuthProvider>
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="auth/login"
        options={{
          headerShown: true,
          title: "",
          headerStyle: {
            backgroundColor: "#F5F4F6",
          },
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="auth/register"
        options={{
          headerShown: true,
          title: "",
          headerStyle: {
            backgroundColor: "#F5F4F6",
          },
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="auth/registerSuccess"
        options={{
          headerShown: false,
          title: "",
        }}
      />
    </Stack>
    </AuthProvider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
