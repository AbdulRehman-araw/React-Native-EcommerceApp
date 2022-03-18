import { StyleSheet, View, Text, Image, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';




export default function HomeScreen({ navigation }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://pfapi.mangotech-apps.com/api/Brands/GetBrands')
            .then(res => res.json())
            .then(result => setData(result.Data))
            .catch(err => console.log(err))
    }, []);

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://apiprime.mangotech-apps.com/api/Categories/GetAllCategories')
            .then(res => res.json())
            .then(result => setProduct(result.Data))
            .catch(err => console.log(err))
    }, []);



    return (
        <>
            <View style={styles.main}>
                <Image
                    style={styles.image}
                    source={{
                        uri: 'https://static.vecteezy.com/system/resources/thumbnails/002/216/694/small/shopping-trendy-banner-vector.jpg',
                    }}></Image>
                {/* <hr width={'100%'}></hr> */}

                <View style={styles.Category}>
                    <Text style={styles.headTag}>Brands </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Brands")}>
                        <Text style={styles.headTag}>View All {">"}</Text>
                    </TouchableOpacity>
                </View>

                <FlatList style={styles.list}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    keyExtractor={(items, index) => index}
                    renderItem={(item, index) => (
                        <TouchableOpacity onPress={() => navigation.navigate("Brands")}>
                            <View style={styles.card} key={index}>
                                <ImageBackground style={styles.imageTag} source={{ uri: item.item.ImageURl }}>
                                </ImageBackground>
                                <View style={styles.text}>
                                    <Text style={styles.textStyle}>{item.item.BrandTitle}</Text>

                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
                {/* <hr width={'100%'}></hr> */}


                <TouchableOpacity style={styles.image} onPress={() => navigation.navigate("Error")}>
                    <Image
                        style={[styles.image, { marginTop: 10 }]}
                        source={{
                            uri: 'https://static.vecteezy.com/system/resources/thumbnails/001/937/856/small/paper-art-shopping-online-on-smartphone-sale-promotion-backgroud-banner-for-market-ecommerce-free-vector.jpg',
                        }}></Image>
                </TouchableOpacity>


                {/* <hr width={'100%'}></hr> */}


                <View style={styles.Category}>
                    <Text style={styles.headTag}>Products </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Products")}>
                        <Text style={styles.headTag}>View All {">"}</Text>
                    </TouchableOpacity>
                </View>

                <FlatList style={styles.list}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={product}
                    keyExtractor={(items, index) => index}
                    renderItem={(item, index) => (
                        <TouchableOpacity onPress={() => navigation.navigate("Products")}>
                            <View style={styles.card} key={index}>
                                <ImageBackground style={styles.imageTag} source={{ uri: item.item.ImageUrl }}>
                                </ImageBackground>
                                <View style={styles.text}>
                                    <Text style={styles.textStyle}>{item.item.Category}</Text>

                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    main: {
        flex : 1,
        backgroundColor: '#fff',
    },
    image: {
        resizeMode: 'cover',
        height: '100%',
        maxHeight: 160,
        width: '100%',
        marginBottom: 10,
    },
    Category: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    headTag: {
        marginHorizontal: 15,
        fontSize: 14,
        fontWeight: '700',
    },
    card: {
        height: 150,
        width: 150,
        marginHorizontal: 8,
        backgroundColor: '#efefef',
        borderRadius: 20,
        shadowColor: '#454545',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 10
    },
    text: {
        bottom: 15,
        left: 8,
        color: '#fff',
    },
    textStyle: {
        fontWeight: '400',
        fontSize: 15
    },
    imageTag: {
        resizeMode: 'cover',
        height: '100%',
        maxHeight: 150,
        width: '100%',
        marginBottom: 20,
    },
    list: {
        flex:1,
        // maxHeight: 180,
        minHeight: 180,
    },
    banner: {
        resizeMode: 'cover',
        height: 120,
        width: 100,
        marginBottom: 20,
    },
});