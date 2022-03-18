import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Error() {

    const [banner, setBanner] = useState([]);

    useEffect(() => {
        fetch('https://pfapi.mangotech-apps.com/api/Products/GetProductDetailByID?ProductID=2')
            .then(res => res.json())
            .then(result => setBanner(result))
            .catch(err => console.log(err))
    }, []);
    return (
        <View>
            <Text>{banner.Message}</Text>
        </View>
    )
}