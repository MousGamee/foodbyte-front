import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'
import Icon from 'react-native-vector-icons/MaterialIcons'

const CustumTextInput = () => {
  return (
    <View style={{
        height : 70,
        borderRadius : 20,
        backgroundColor : COLORS.lightGrey20
    }}>
        <Icon name='email' color={COLORS.white} size={60}/>
      <TextInput/>
    </View>
  )
}

export default CustumTextInput