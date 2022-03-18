import { View, Image } from 'react-native'
import React from 'react'

export default function Banner() {
    return (
 
            <Image
                style={styles.image}
                source={{
                    uri: 'https://static.vecteezy.com/system/resources/thumbnails/001/937/856/small/paper-art-shopping-online-on-smartphone-sale-promotion-backgroud-banner-for-market-ecommerce-free-vector.jpg',
                }}></Image>

        
    )
}
const styles = StyleSheet.create({
    image: {
        resizeMode: 'cover',
        height: '100%',
        maxHeight: 150,
        width: '100%',
        marginBottom: 20,
    },
})