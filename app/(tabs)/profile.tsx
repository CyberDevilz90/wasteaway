import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import { useAuth } from "../context/authContext";

const profile = () => {
  const { authState, logout  } = useAuth();
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.replace("/auth/entry")
  }
  return (
    <View>
      <View style={styles.headerContainer}>
        <View style={styles.actionButtonContainer}>
          <Link replace href="/beranda" style={{ width: 20, height: 24 }}>
            <Image
              source={require("@/assets/images/icons/back.png")}
              style={styles.backButton}
            />
          </Link>
          <TouchableOpacity onPress={handleLogout} style={styles.logoutContainer}>
            <Image
              style={styles.logoutButton}
              source={require("@/assets/images/icons/logout.png")}
            />
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.headerText}>Profile</Text>
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.dataContainer}>
          <View style={styles.data1}>
            <Image
              source={require("@/assets/images/avatar.jpeg")}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.name}>{authState?.nama}</Text>
              <Text style={styles.telp}>{authState?.telepon}</Text>
            </View>
            <Text style={styles.action}>Lihat Profil</Text>
          </View>
          <TextInput
            editable
            multiline
            placeholder="Alamat"
            value={authState?.alamat}
            placeholderTextColor={"#8D85E0"}
            style={styles.alamatContainer}
          />
        </View>
        <TouchableOpacity onPress={() => router.replace("/jemput")} style={styles.optionContainer}>
          <Image
            style={{ width: 20, height: 22 }}
            source={require("@/assets/images/icons/locationPinOutlineWhite.png")}
          />
          <Text style={styles.optionTitle}>Titik Penjemputan</Text>
          <Image
            style={styles.arrowWhite}
            source={require("@/assets/images/icons/arrowBlack.png")}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: "Poppins_SemiBold",
            color: "white",
            fontSize: 14,
            backgroundColor: "#8D85E0",
            marginTop: 5,
            padding: 10,
          }}
        >
          Keamanan
        </Text>
        <View style={styles.optionContainer}>
          <Image
            style={{ width: 18, height: 24 }}
            source={require("@/assets/images/icons/gembok.png")}
          />
          <Text style={styles.optionTitle}>Ubah Password</Text>
          <Image
            style={styles.arrowWhite}
            source={require("@/assets/images/icons/arrowBlack.png")}
          />
        </View>
        <View style={styles.optionContainer}>
          <Image
            style={{ width: 16, height: 24 }}
            source={require("@/assets/images/icons/phone.png")}
          />
          <Text style={styles.optionTitle}>Ubah Nomor Handphone</Text>
          <Image
            style={styles.arrowWhite}
            source={require("@/assets/images/icons/arrowBlack.png")}
          />
        </View>
        <View
          style={{
            backgroundColor: "#8D85E0",
            marginTop: 10,
            height: 200,
            borderBottomEndRadius: 20,
            borderBottomStartRadius: 20,
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins_SemiBold",
              color: "white",
              fontSize: 14,
              backgroundColor: "#8D85E0",
              marginTop: 5,
              padding: 10,
            }}
          >
            Pusat Bantuan
          </Text>
          <View style={styles.optionContainer}>
            <Image
              style={{ width: 20, height: 20 }}
              source={require("@/assets/images/icons/warnOutline.png")}
            />
            <Text style={styles.optionTitle}>Tentang Pengguna</Text>
            <Image
              style={styles.arrowWhite}
              source={require("@/assets/images/icons/arrowBlack.png")}
            />
          </View>
          <View style={styles.optionContainer}>
            <Image
              style={{ width: 20, height: 20 }}
              source={require("@/assets/images/icons/security.png")}
            />
            <Text style={styles.optionTitle}>Kebijakan Privasi</Text>
            <Image
              style={styles.arrowWhite}
              source={require("@/assets/images/icons/arrowBlack.png")}
            />
          </View>
          <View style={styles.optionContainer}>
            <Image
              style={{ width: 20, height: 24 }}
              source={require("@/assets/images/icons/faq.png")}
            />
            <Text style={styles.optionTitle}>Bantuan</Text>
            <Image
              style={styles.arrowWhite}
              source={require("@/assets/images/icons/arrowBlack.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: "#8D85E0",
    height: 220,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    padding: 20,
    paddingTop: 50,
  },
  backButton: {
    width: 18,
    height: 18,
  },
  headerText: {
    fontFamily: "Poppins_SemiBold",
    color: "white",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    marginTop: 30,
  },
  profileContainer: {
    width: "95%",
    backgroundColor: "#F5F4F6",
    marginTop: -80,
    height: 640,
    borderRadius: 20,
    alignSelf: "center",
    marginBottom: 30,
    elevation: 3,
  },
  logoutButton: {
    width: 24,
    height: 24,
  },
  logoutText: {
    fontFamily: "Poppins_SemiBold",
    fontSize: 12,
    alignSelf: "center",
  },
  logoutContainer: {
    flexDirection: "row",
  },
  actionButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dataContainer: {
    padding: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  data1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontFamily: "Poppins_SemiBold",
    fontSize: 16,
  },
  telp: {
    fontFamily: "Poppins",
    fontSize: 14,
  },
  action: {
    fontFamily: "Poppins_SemiBold",
    fontSize: 14,
    color: "#8D85E0",
  },
  alamatContainer: {
    borderWidth: 1,
    borderColor: "#8D85E0",
    borderRadius: 5,
    marginTop: 15,
    height: 150,
    padding: 10,
    textAlign: "justify",
    textAlignVertical: "top",
  },
  optionContainer: {
    backgroundColor: "#8D85E0",
    padding: 10,
    flexDirection: "row",
  },
  arrowWhite: {
    tintColor: "white",
    alignSelf: "center",
    position: "absolute",
    right: 20,
  },
  optionTitle: {
    color: "white",
    alignSelf: "center",
    paddingLeft: 15,
    fontFamily: "Poppins",
    fontSize: 13,
  },
});
