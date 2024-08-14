import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import { Link } from "expo-router";
import { useAuth } from "../context/authContext";

const Jemput = () => {
  const { authState } = useAuth();
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.headerContainer}>
            <Link replace href="/beranda" style={{ width: 20, height: 24 }}>
              <Image
                source={require("@/assets/images/icons/back.png")}
                style={styles.backButton}
              />
            </Link>
            <View>
              <Text style={styles.headerTitle}>Mau buang sampahmu, {authState?.nama}?</Text>
              <Text style={styles.headerSubtitle}>
                Okey, Wasteaway akan jemput.
              </Text>
            </View>
          </View>

          <TouchableWithoutFeedback>
            <View style={styles.mapContainer}>
              <Text style={styles.mapHintText}>
                Tap disini untuk memasang lokasimu saat ini.
              </Text>
              <Image
                style={styles.mapImage}
                source={require("@/assets/images/maps.png")}
              />
              <Image
                style={styles.arrowIcon}
                source={require("@/assets/images/icons/arrowBlack.png")}
              />
            </View>
          </TouchableWithoutFeedback>

          <View style={styles.searchContainer}>
            <Image
              style={styles.pin}
              source={require("@/assets/images/icons/locationPin.png")}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Cari lokasi penjemputan"
              placeholderTextColor="#848383"
            />
            <Image
              style={styles.searchIcon}
              source={require("@/assets/images/icons/search.png")}
            />
          </View>

          <View style={styles.emptyContainer}>
            <Image
              style={styles.emptyImage}
              source={require("@/assets/images/noRiwayat.png")}
            />
            <Text style={styles.emptyText}>
              Belum ada riwayat titik penjemputan
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Jemput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  backButton: {
    width: 18,
    height: 18,
  },
  headerTitle: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    marginTop: 25,
    fontFamily: "Poppins_SemiBold",
  },
  headerSubtitle: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
    marginBottom: 16,
    fontFamily: "Poppins",
  },
  mapContainer: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    overflow: "hidden",
    elevation: 3,
    padding: 20,
    width: "95%",
    alignSelf: "center",
    marginTop: -80,
  },
  mapImage: {
    width: 330,
    height: 190,
    borderRadius: 15,
  },
  mapHintText: {
    fontSize: 10,
    color: "black",
    fontFamily: "Poppins_SemiBold",
    marginBottom: 3,
  },
  arrowIcon: {
    position: "absolute",
    top: 20,
    right: 25,
    width: 8,
    height: 16,
  },
  pin: {
    width: 20,
    height: 20,
    marginRight: 15,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 25,
    marginVertical: 16,
    paddingHorizontal: 16,
    elevation: 3,
    width: "95%",
    alignSelf: "center",
    height: 45,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#4B3F72",
    fontFamily: "Poppins_SemiBold",
  },
  searchIcon: {
    width: 15,
    height: 15,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyImage: {
    width: 150,
    height: 150,
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 14,
    color: "#A7A6C5",
    textAlign: "center",
  },
  headerContainer: {
    backgroundColor: "#8D85E0",
    height: 250,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    padding: 20,
    paddingTop: 50,
  },
});
