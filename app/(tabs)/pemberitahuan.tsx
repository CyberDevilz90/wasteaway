import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import { Link } from "expo-router";

import dataNotif from "@/lib/notification.json";

const pemberitahuan = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Link replace href="/beranda" style={{ width: 20, height: 24 }}>
          <Image
            source={require("@/assets/images/icons/back.png")}
            style={styles.backButton}
          />
        </Link>
        <Text style={styles.headerText}>Pemberitahuan</Text>
      </View>
      <View style={styles.notificationContainer}>
        <FlatList
          data={dataNotif}
          renderItem={({ item }: { item: (typeof dataNotif)[0] }) => (
            <View style={styles.itemContainer}>
              <Image
                source={require("@/assets/images/icons/warn.png")}
                style={styles.notifIcon}
              />
              <View>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemDesc}>{item.desc}</Text>
                <View style={{ flexDirection: "row", gap: 8 }}>
                  <Text style={styles.itemTime}>{item.tanggal}</Text>
                  <Text style={styles.itemTime}>{item.jam}</Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default pemberitahuan;

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
  notificationContainer: {
    width: "95%",
    backgroundColor: "#F5F4F6",
    marginTop: -80,
    elevation: 3,
    borderRadius: 20,
    alignSelf: "center",
    padding: 20,
    marginBottom: 30,
  },
  itemContainer: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  notifIcon: {
    width: 20,
    height: 20,
    marginRight: 20,
    alignSelf: "center",
  },
  itemTitle: {
    fontFamily: "Poppins_SemiBold",
    fontSize: 14,
    color: "black",
  },
  itemDesc: {
    width: 290,
    fontFamily: "Poppins",
    fontSize: 13,
  },
  itemTime: {
    fontFamily: "Poppins",
    fontSize: 13,
  },
});
