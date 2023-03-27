import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import CustumText from './CustumText'
import { COLORS, SIZES } from '../constants'

const CustumButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity 
    onPress={onPress}
    style={{
        backgroundColor : COLORS.primary,
        height : SIZES.width * .14,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : SIZES.radius
    }}>
     <CustumText
        fontFamily={'semibold'}
        style={{
            color : COLORS.white,
            fontSize : SIZES.width * .050
        }}
     >
         { label }
     </CustumText>
    </TouchableOpacity>
  )
}

export default CustumButton