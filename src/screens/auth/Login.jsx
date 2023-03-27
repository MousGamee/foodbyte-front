import { View, Text, ImageBackground, Image, TextInput } from 'react-native'
import React from 'react'
import images from '../../constants/images'
import { SIZES } from '../../constants'
import CustumText from '../../components/CustumText'
import CustumTextInput from '../../components/CustumTextInput'

const Login = () => {
  return (
    <ImageBackground
        style={{
            width : SIZES.width,
            height: SIZES.height,
            flex : 1,
        }}
        source={images.loginBkg}
        resizeMode="cover"
    >
        {/* Logo */}
        <Image 
            source={images.logo2}
            resizeMode="contain"
            style={{
                width : SIZES.width * .6
            }}
        />
        {/* Login form */}
        <View style={{
            paddingHorizontal : SIZES.paddingHorizontal
        }}>
          <CustumTextInput />

        </View>


    </ImageBackground>
  )
}

export default Login