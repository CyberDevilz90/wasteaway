import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Alert,
} from "react-native";
import React, { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import * as FileSystem from "expo-file-system";
import { router } from "expo-router";
import { useAuth } from "../context/authContext";

const login = () => {
  const [checked, isChecked] = useState(false);
  const [visible, isVisible] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthState }= useAuth()

  const checkBox = () => {
    isChecked(!checked);
  };

  const showPass = () => {
    isVisible(!visible);
  };

  const handleLogin = async () => {
    const fileUri = FileSystem.documentDirectory + "lib/account.json";

    try {
      const data = await FileSystem.readAsStringAsync(fileUri);
      let accounts = [];

      accounts = JSON.parse(data);

      const account = accounts.find(
        (acc: { email: string; password: string }) =>
          acc.email === email && acc.password === password
      );

      if (account) {
        setAuthState(account);
        router.replace('/(tabs)/beranda')
      } else {
        Alert.alert("Login Failed", "Incorrect email or password.");
      }
    } catch (error) {
      Alert.alert("Error", "Failed to read account data.");
      console.error("Error reading account data:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header1}>Selamat Datang Kembali</Text>
      <Text style={styles.header2}>Masuk!</Text>
      <View style={styles.body}>
        <Text style={styles.emailHeader}>Email</Text>
        <TextInput
          style={styles.emailInput}
          keyboardType="email-address"
          placeholder="Masukkan email Anda"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.passwordHeader}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="********"
            secureTextEntry={visible}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={showPass}>
            <Image
              style={styles.eye}
              source={require("../../assets/images/icons/eye.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.checkbox}>
          <View style={{ flexDirection: "row" }}>
            <BouncyCheckbox
              isChecked={checked}
              onPress={checkBox}
              fillColor={"#F9BA5D"}
              unFillColor={"#F5F4F6"}
              size={20}
              style={{ marginRight: -10 }}
            />
            <Text
              style={{
                color: "white",
                fontSize: 12,
                fontWeight: "400",
                alignSelf: "center",
              }}
            >
              Remember this device
            </Text>
          </View>
          <TouchableWithoutFeedback>
            <Text
              style={{
                color: "black",
                fontSize: 10,
                fontWeight: "400",
                alignSelf: "center",
              }}
            >
              Forgot Password?
            </Text>
          </TouchableWithoutFeedback>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>Masuk</Text>
        </TouchableOpacity>
        <Text style={styles.or}>OR</Text>
        <TouchableOpacity style={styles.loginButtonAlt1}>
          <Image
            source={require("../../assets/images/google.png")}
            style={styles.logo}
          />
          <Text style={styles.loginTextAlt1}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButtonAlt2}>
          <Image
            source={require("../../assets/images/facebook.png")}
            style={styles.logo}
          />
          <Text style={styles.loginTextAlt2}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.footer}>
        WasteAway uses your location access to support system performance at the
        time of pickup.
      </Text>
    </SafeAreaView>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F4F6",
    paddingHorizontal: 45,
  },
  header1: {
    color: "#000000",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 21,
  },
  header2: {
    color: "#000000",
    fontFamily: "Poppins_SemiBold",
    fontSize: 36,
    lineHeight: 54,
    marginBottom: 25,
  },
  body: {
    backgroundColor: "#8D85E0",
    borderRadius: 30,
    paddingHorizontal: 14,
    paddingVertical: 30,
    height: 500,
  },
  emailHeader: {
    color: "#F5F4F6",
    marginBottom: 5,
  },
  emailInput: {
    backgroundColor: "#F5F4F6",
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 40,
    marginBottom: 15,
  },
  passwordHeader: {
    color: "#F5F4F6",
    marginBottom: 5,
  },
  passwordContainer: {
    flexDirection: "row",
    backgroundColor: "#F5F4F6",
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 40,
  },
  passwordInput: {
    width: "90%",
    alignSelf: "center",
  },
  eye: {
    width: 20,
    height: 17,
    marginTop: 10,
  },
  checkbox: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  loginButton: {
    backgroundColor: "#1A1A35",
    width: 250,
    height: 49,
    borderRadius: 15,
    justifyContent: "center",
    marginTop: 30,
    alignSelf: "center",
  },
  loginText: {
    color: "#F9BA5D",
    fontFamily: "Poppins_SemiBold",
    textAlign: "center",
  },
  loginButtonAlt1: {
    backgroundColor: "#F5F4F6",
    width: 250,
    height: 49,
    borderRadius: 15,
    justifyContent: "center",
    marginTop: 15,
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },
  loginButtonAlt2: {
    backgroundColor: "#F5F4F6",
    width: 250,
    height: 49,
    borderRadius: 15,
    justifyContent: "center",
    marginTop: 10,
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },
  loginTextAlt1: {
    color: "#1A1A35",
    fontFamily: "Poppins_SemiBold",
    textAlign: "center",
  },
  loginTextAlt2: {
    color: "#1A1A35",
    fontFamily: "Poppins_SemiBold",
    textAlign: "center",
  },
  or: {
    fontFamily: "Poppins_SemiBold",
    color: "#F5F4F6",
    fontSize: 14,
    lineHeight: 21,
    textAlign: "center",
    marginTop: 10,
  },
  footer: {
    fontFamily: "Poppins_SemiBold",
    color: "black",
    fontSize: 10,
    textAlign: "center",
    marginTop: 50,
  },
  logo: {
    height: 20,
    width: 20,
  },
});
