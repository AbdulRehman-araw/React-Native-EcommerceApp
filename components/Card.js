import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function Card({ BrandTitle }) {
  return (
    <>
      <View style={styles.card}>
        <View style={styles.text}>
            <Text>{BrandTitle}</Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  card: {
    height: 120,
    width: 250,
    backgroundColor: '#cdcdcd',
    marginHorizontal: 8,
    borderRadius: 20,
    position: 'relative',
  },
  text: {
    position: 'absolute',
    bottom: 15,
    left: 15,
  }
})