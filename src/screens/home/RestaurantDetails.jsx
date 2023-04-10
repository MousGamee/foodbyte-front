import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RestaurantDetails = ({ route}) => {
    const { item } = route.params
    console.log(item)
  return (
    <View style={{
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }}>
      <Text>{item.name}</Text>
    </View>
  )
}

export default RestaurantDetails

const styles = StyleSheet.create({})