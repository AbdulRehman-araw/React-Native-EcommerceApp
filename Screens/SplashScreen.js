import { View,Text,StyleSheet } from 'react-native'
import React, { useEffect } from 'react'

export default function SplashScreen({ navigation }) {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home')
        },5000)
    })

    return (
        <View style={styles.splash}>
            <Text style={styles.text}> WELCOME TO ECOMMERCE APP</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    splash:{
        flex:1,
        justifyContent:'center',
        resizeMode:'cover',
        backgroundColor: "#eee",
    },
    text:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
    }
})