import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import * as FileSystem from "expo-file-system";
import { useRouter } from "expo-router";

const register = () => {
  const router = useRouter();

  const [visible, isVisible] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleRegister = async () => {
    if (password !== rePassword) {
      alert("Password is incorrect");
      return;
    }
  
    const newAccount = {
      id: 1,
      nama: email.split("@")[0], // Assuming the name is derived from the email
      email,
      password,
      telepon: "", // New field initialized as empty string
      alamat: "",  // New field initialized as empty string
      tagihan: 0,  // New field initialized as 0
    };
  
    const fileUri = FileSystem.documentDirectory + "lib/account.json";
  
    try {
      let accounts = [];
      // Check if the file exists
      const fileInfo = await FileSystem.getInfoAsync(fileUri);
  
      if (fileInfo.exists) {
        // Read the existing data
        const data = await FileSystem.readAsStringAsync(fileUri);
        try {
          accounts = JSON.parse(data);
          if (!Array.isArray(accounts)) {
            accounts = []; // If the parsed data is not an array, reset it
          }
        } catch (error) {
          accounts = []; // If JSON parsing fails, reset it
        }
      }
  
      // Add the new account to the list
      newAccount.id = accounts.length + 1;
      accounts.push(newAccount);
  
      // Write the updated array back to the file
      await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(accounts));
      console.log("Account data saved successfully!");
      router.replace('/auth/registerSuccess')
    } catch (error) {
      console.error("Error saving account data:", error);
    }
  };
  

  const showPass = () => {
    isVisible(!visible);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header1}>
        Buat akunmu dan nikmati fitur fitur WasteAway
      </Text>
      <Text style={styles.header2}>Daftar!</Text>
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
        <Text style={styles.rePasswordHeader}>Re-type Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="********"
            secureTextEntry={visible}
            value={rePassword}
            onChangeText={setRePassword}
          />
          <TouchableOpacity onPress={showPass}>
            <Image
              style={styles.eye}
              source={require("../../assets/images/icons/eye.png")}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
          <Text style={styles.loginText}>Daftar</Text>
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

export default register;

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
  rePasswordHeader: {
    color: "#F5F4F6",
    marginBottom: 5,
    marginTop: 15,
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
