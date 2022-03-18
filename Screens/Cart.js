import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import React, { useState } from 'react'

export default function Cart() {


    const [num, setNum] = useState(1);

    const Sub = () => setNum(num - 1)

    const Add = () => setNum(num + 1)


    return (
        <View style={styles.cart}>
            <View style={styles.card}>
                <TouchableOpacity style={styles.btnTag} onPress={Add}>
                    <Text style={styles.btn}>+</Text>
                </TouchableOpacity>
                <Text style={styles.btn}>{num}</Text>
                <TouchableOpacity style={styles.btnTag} onPress={Sub}>
                    <Text style={styles.btn}>-</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cart: {
        flex: 1,
        backgroundColor: '#acacac',
    },
    card: {
        marginTop: 10,
        flexDirection: 'row',
        height: 150,
        width: '100',
        marginHorizontal: 8,
        backgroundColor: '#efefef',
        borderRadius: 20,
        shadowColor: '#454545',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 10,
        justifyContent: 'flex-end',
    },
    btnTag: {
    },
    btn: {
        height:25,
        width:25,
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 60,
        marginRight: 10,
    },
})