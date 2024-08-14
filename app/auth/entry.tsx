//entry//
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Entry = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.car} source={require("@/assets/images/car.png")} />
      <View style={styles.action}>
        <Text style={styles.text1}>WASTEAWAY</Text>
        <Text style={styles.text2}>WE TAKE YOUR TRASH AWAY</Text>
        <View style={styles.buttonContainer}>
          <Link href="/auth/login" style={styles.buttonText1}>
            Masuk
          </Link>
          <Link href="/auth/register" style={styles.buttonText2}>
            Daftar
          </Link>
        </View>
      </View>
    </View>
  );
};

export default Entry;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    gap: 15,
    height: "100%",
  },
  car: {
    alignSelf: "center",
    marginVertical: 70,
  },
  action: {
    backgroundColor: "#8D85E0",
    flex: 1,
    height: 417,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    color: "#F5F4F6",
    fontSize: 32,
    lineHeight: 48,
    fontFamily: "Poppins_SemiBold",
  },
  text2: {
    color: "#000000",
    fontSize: 20,
    lineHeight: 48,
    fontFamily: "Poppins_SemiBold",
  },
  buttonText1: {
    backgroundColor: "#1A1A35",
    width: 264,
    height: 55,
    borderRadius: 20,
    textAlignVertical: "center",
    color: "#F9BA5D",
    fontFamily: "Poppins_SemiBold",
    textAlign: "center",
  },
  buttonText2: {
    backgroundColor: "#F9BA5D",
    width: 264,
    height: 55,
    borderRadius: 20,
    textAlignVertical: "center",
    color: "#1A1A35",
    fontFamily: "Poppins_SemiBold",
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 25,
    gap: 10,
  },
});
