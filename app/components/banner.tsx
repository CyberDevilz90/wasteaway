// Banners.js
import React from 'react';
import { View, Text, Image } from 'react-native';

export const Banner1 = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: "#393240",
      width: 350,
      height: 140,
      borderRadius: 15,
      flexDirection: "row",
      paddingLeft: 25,
      paddingTop: 15,
    }}
  >
    <View>
      <Text
        style={{
          fontFamily: "Poppins",
          fontSize: 12,
          color: "white",
          lineHeight: 18,
          fontWeight: "500",
        }}
      >
        Mau sampahmu dijemput?
      </Text>
      <Text
        style={{
          width: 200,
          height: 84,
          fontFamily: "Poppins",
          fontSize: 10,
          lineHeight: 16,
          color: "white",
          marginTop: 5,
          textAlign: "justify",
        }}
      >
        Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
        fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
        elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
        lectus.
      </Text>
    </View>
    <Image
      style={{ width: 150, height: 110, marginLeft: -25, marginTop: 15 }}
      source={require("@/assets/images/trashBag.png")}
    />
  </View>
);

export const Banner2 = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: "#8D85E0",
      width: 350,
      height: 140,
      borderRadius: 15,
      flexDirection: "row",
      padding: 15,
    }}
  >
    <Image
      source={require("@/assets/images/kungfu.png")}
      style={{ width: 65, height: 90, alignSelf: "center" }}
    />
    <View style={{ width: "80%", justifyContent: "center" }}>
      <Text
        style={{
          textAlign: "center",
          color: "white",
          fontFamily: "Poppins_SemiBold",
          fontSize: 14,
          lineHeight: 21,
        }}
      >
        HIDUP SEHAT
      </Text>
      <Text
        style={{
          textAlign: "center",
          color: "white",
          fontFamily: "Poppins_SemiBold",
          fontSize: 14,
          lineHeight: 21,
        }}
      >
        TANPA
      </Text>
      <Text
        style={{
          textAlign: "center",
          color: "white",
          fontFamily: "Poppins_SemiBold",
          fontSize: 14,
          lineHeight: 21,
        }}
      >
        SAMPAH DIRUMAH
      </Text>
    </View>
  </View>
);

export const Banner3 = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: "#FEF6E9",
      width: 350,
      height: 140,
      borderRadius: 15,
      padding: 20,
      paddingTop: 15,
      flexDirection: 'row'
    }}
  >
    <View>
      <Text
        style={{
          fontWeight: "600",
          fontSize: 16,
          color: "black",
          marginBottom: 5
        }}
      >
        Kami Siap Angkut Sampah Dapurmu
      </Text>
      <Text
        style={{
          fontSize: 10,
          width: 195,
          textAlign: "justify",
          color: "black",
          fontWeight: "500",
          fontFamily: "Poppins",
        }}
      >
        Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
        fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
        elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
        lectus.
      </Text>
    </View>
    <Image style={{width: 150, height: 100, marginLeft: -45}} source={require("@/assets/images/cooking.png")} />
  </View>
);
