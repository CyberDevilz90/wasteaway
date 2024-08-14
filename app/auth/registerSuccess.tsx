import { Image, StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import { useRouter } from "expo-router";

const registerSuccess = () => {
    const router = useRouter()

    useEffect(() => {
        const notif = async () =>{
            await new Promise((resolve) => setTimeout(resolve,2000))
            router.replace('/auth/login')
        }
        notif()
    }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Yey</Text>
      <Text style={styles.text}>Akunmu Telah Terdaftar</Text>
      <Image source={require('@/assets/images/success.png')} style={styles.image}/>
    </View>
  )
}

export default registerSuccess

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8D85E0',
        justifyContent: 'center',
    },
    image: {
        width: 400,
        height: 480
    },
    text: {
        fontFamily: 'Poppins_SemiBold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    }
})