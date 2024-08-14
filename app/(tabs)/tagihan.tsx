import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import tagihanData from "@/lib/tagihan.json";
import { Link } from "expo-router";
import { useAuth } from "../context/authContext";

const tagihan = () => {
  const { authState } = useAuth();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Link replace href="/beranda" style={{ width: 20, height: 24 }}>
          <Image
            source={require("@/assets/images/icons/back.png")}
            style={styles.backButton}
          />
        </Link>
        <Text style={styles.headerText}>Hallo, {authState?.nama}</Text>
      </View>
      <View style={styles.billContainer}>
        <Text style={styles.billTitle}>Tagihan saat ini</Text>
        <View style={styles.billDesc}>
          <Text style={styles.nominal}>Rp{authState?.tagihan},-</Text>
          <TouchableOpacity style={styles.payButton}>
            <Text style={styles.payButtonText}>Bayar Semua Tagihan</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={{ paddingHorizontal: 30, fontFamily: "Poppins" }}>
        Di bawah ini jadwal penjemputan yang kamu miliki
      </Text>
      <View style={styles.dropdownContainer}>
        <Image
          style={styles.mapsPin}
          source={require("@/assets/images/icons/locationPinOutline.png")}
        />
        <Text style={styles.locationName}>Arya</Text>
        <Image
          style={styles.dropdown}
          source={require("@/assets/images/icons/dropdown.png")}
        />
      </View>
      <FlatList
        data={tagihanData}
        renderItem={({ item }: { item: (typeof tagihanData)[0] }) => (
          <View style={styles.itemContainer}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.itemTitle}>{item.jam}</Text>
              <Text style={styles.itemTitle}>{item.tanggal}</Text>
              <Text
                style={[
                  styles.itemTitle,
                  {
                    backgroundColor:
                      item.status == "Belum Diambil"
                        ? "#FFD3D6"
                        : item.status == "Menuju Lokasi"
                        ? "#FAEC9F"
                        : "#DBFFD5",
                    borderRadius: 10,
                  },
                ]}
              >
                {item.status}
              </Text>
            </View>
            <View
              style={{
                height: 1,
                backgroundColor: "#8D85E0",
                width: "95%",
                alignSelf: "center",
              }}
            />
            <View style={{ flexDirection: "row" }}>
              <Image
                style={{
                  width: 15,
                  height: 15,
                  marginRight: 3,
                  marginVertical: 5,
                }}
                source={require("@/assets/images/icons/locationCoordinate.png")}
              />
              <Text style={styles.itemName}>{item.nama}</Text>
            </View>
            <Text style={styles.itemAddress}>{item.alamat}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default tagihan;

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
  billContainer: {
    width: "95%",
    height: 110,
    backgroundColor: "#F5F4F6",
    marginTop: -80,
    elevation: 3,
    borderRadius: 20,
    alignSelf: "center",
    padding: 20,
    marginBottom: 30,
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
  billTitle: {
    fontFamily: "Poppins",
    fontSize: 14,
  },
  billDesc: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
  },
  nominal: {
    fontFamily: "Poppins_SemiBold",
    fontWeight: "500",
    fontSize: 24,
  },
  payButton: {
    width: 170,
    height: 37,
    borderRadius: 10,
    backgroundColor: "#8D85E0",
    justifyContent: "center",
  },
  payButtonText: {
    color: "#F5F4F6",
    fontSize: 14,
    textAlign: "center",
  },
  dropdownContainer: {
    flexDirection: "row",
    borderColor: "#8D85E0",
    borderWidth: 1,
    borderRadius: 20,
    width: 360,
    height: 45,
    justifyContent: "center",
    alignSelf: "center",
    paddingHorizontal: 10,
    marginTop: 5,
    marginBottom: 15,
  },
  mapsPin: {
    width: 24,
    height: 24,
    alignSelf: "center",
  },
  locationName: {
    width: "88%",
    alignSelf: "center",
    paddingHorizontal: 10,
    fontFamily: "Poppins_SemiBold",
    fontSize: 14,
  },
  dropdown: {
    width: 15,
    height: 8,
    alignSelf: "center",
    marginRight: 10,
  },
  itemContainer: {
    width: 360,
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#8D85E0",
    borderRadius: 20,
    marginBottom: 8,
  },
  itemTitle: {
    fontFamily: "Poppins_SemiBold",
    fontSize: 13,
    color: "black",
  },
  itemName: {
    fontFamily: "Poppins_SemiBold",
    alignSelf: "center",
  },
  itemAddress: {
    fontFamily: "Poppins",
    fontSize: 10,
    color: "black",
    fontWeight: "500",
  },
});
