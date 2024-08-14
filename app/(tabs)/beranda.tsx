import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Banner1, Banner2, Banner3 } from "../components/banner";
import { Link } from "expo-router";

const beranda = () => {
  const component = [
    <Banner3 key="3" />,
    <Banner2 key="2" />,
    <Banner1 key="1" />,
  ];
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.textBanner}>
          Kesibukanmu bukan kendala untuk tidak membuang sampah
        </Text>
        <Image
          source={require("@/assets/images/homeBanner.png")}
          style={styles.headerBanner}
        />
      </View>
      <View style={styles.container2}>
        <TouchableOpacity style={styles.tombol}>
          <Link href="/jemput">
            <View style={{ width: "80%" }}>
              <Image
                style={styles.truck}
                source={require("@/assets/images/icons/truck.png")}
              />
              <Text style={styles.textTombol}>Jemput Sekarang</Text>
            </View>
            <View>
              <Image
                style={styles.next}
                source={require("@/assets/images/icons/arrowPurple.png")}
              />
            </View>
          </Link>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tombol}>
          <Link href="/tagihan">
            <View style={{ width: "80%" }}>
              <Image
                style={styles.bill}
                source={require("@/assets/images/icons/bill.png")}
              />
              <Text style={styles.textTombol}>Cek Tagihanmu</Text>
            </View>
            <View>
              <Image
                style={styles.next}
                source={require("@/assets/images/icons/arrowPurple.png")}
              />
            </View>
          </Link>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Text style={styles.text1}>Ada yang baru?</Text>
        <Text style={styles.text2}>Pantau promo kami setiap hari</Text>
        <FlatList
          horizontal={true}
          data={component}
          renderItem={({ item }) => item}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ gap: 10 }}
        />
        <Text style={styles.text3}>Jadwal Penjemputan</Text>
        <View style={styles.scheduleContainer}>
          <Text style={styles.scheduleText}>
            Sampah akan dijemput setiap hari dengan jadwal sebagai berikut :
          </Text>
          <View style={styles.table}>
            <View style={styles.row}>
              <Text style={styles.dayText}>Senin - Jumat</Text>
              <Text style={styles.timeText}>06.00 - 20.00</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.dayText}>Sabtu & Minggu</Text>
              <Text style={styles.timeText}>09.00 - 15.00</Text>
            </View>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>
            Bagaimana cara pembuangan sampah yang baik?
          </Text>
          <Text style={styles.infoText}>
            1. Pemisahan Sampah Organik dan Anorganik
          </Text>
          <Text style={styles.infoText}>
            2. Dibungkus dengan plastik besar, karon, atau kardus
          </Text>
          <Text style={styles.infoText}>
            3. Diletakkan di tempat pembuangan yang seharusnya agar memudahkan
            proses penjemputan sampah
          </Text>
        </View>
        <View></View>
      </View>
    </SafeAreaView>
  );
};

export default beranda;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#F9BA5D",
    width: "100%",
    height: 250,
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  textBanner: {
    width: 200,
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 21,
    fontFamily: "Poppins",
  },
  headerBanner: {
    width: 200,
    height: 133,
    marginLeft: -20,
  },
  container2: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: -30,
  },
  tombol: {
    flexDirection: "row",
    backgroundColor: "#F5F4F6",
    height: 57,
    width: 185,
    borderRadius: 15,
    justifyContent: "center",
    elevation: 5,
    alignItems: "center",
  },
  truck: {
    width: 30,
    height: 20,
    alignSelf: "center",
  },
  bill: {
    width: 20,
    height: 20,
    alignSelf: "center",
  },
  next: {
    width: 12,
    height: 24,
  },
  textTombol: {
    textAlign: "center",
    fontSize: 12,
    lineHeight: 18,
    fontFamily: "Poppins",
    fontWeight: "400",
    marginTop: 3,
  },
  body: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  text1: {
    fontFamily: "Poppins",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 21,
    color: "black",
  },
  text2: {
    fontFamily: "Poppins",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 18,
    color: "black",
    marginBottom: 10,
  },
  text3: {
    fontFamily: "Poppins",
    fontWeight: "500",
    fontSize: 14,
    color: "black",
    marginTop: 10,
  },
  scheduleContainer: {
    backgroundColor: "#F9BA5D",
    borderRadius: 20,
    padding: 16,
    marginBottom: 5,
  },
  scheduleText: {
    fontSize: 14,
    color: "#000",
    marginBottom: 12,
  },
  table: {
    backgroundColor: "#F9BA5D",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "white",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  dayText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
  },
  timeText: {
    fontSize: 16,
    color: "#000",
  },
  infoContainer: {
    backgroundColor: "#8D85E0",
    borderRadius: 20,
    padding: 16,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: "white",
    marginBottom: 4,
  },
});
