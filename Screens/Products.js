import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'

export default function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://pfapi.mangotech-apps.com/api/States/GetStates')
      .then(res => res.json())
      .then(result => setData(result))
      .catch(err => console.log(err))
  }, []);


  return (
    <View style={{ flex: 1 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(items, index) => index}
        renderItem={(item, index) => {
          return (
            <TouchableOpacity>
              <View style={styles.card} key={index}>
                {console.log(item)}
                <Text style={styles.list}>{item}</Text>
              </View>
            </TouchableOpacity>
          )
        }
        }

      />
    </View>

  )
}

const styles = StyleSheet.create({
  card: {
    height: 50,
    width: '100',
    margin: 8,
    backgroundColor: '#eee',
    borderRadius: 20,
    shadowColor: '#454545',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 10,
    justifyContent: 'center',
  },
  list: {
    textAlign: 'center',
    fontSize: 18
  }
})