import { View, StatusBar, KeyboardAvoidingView, ImageBackground, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { SIZES, COLORS, ROUTES } from '../../constants'
import images from '../../constants/images'
import { BlurView } from 'expo-blur'
import Icon from 'react-native-vector-icons/MaterialIcons'
import CustumTextInput from '../../components/CustumTextInput'
import CustumButton from '../../components/CustumButton'
import CustumText from '../../components/CustumText'
import { useNavigation } from '@react-navigation/native'


const Register = () => {
  const navigation = useNavigation()
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 1
      }}
    >
      <ImageBackground
        style={{
          width: SIZES.width,
          height: SIZES.height,
          paddingHorizontal: SIZES.padding,
          flex: 1,
          paddingTop : SIZES.spacing,
          justifyContent: 'space-around'
        }}
        source={images.registerBkg}
        resizeMode="cover"
      >
        <Pressable style={{
          width: SIZES.width * .4,
          height: SIZES.width * .4,
          borderRadius: SIZES.width * .4,
          backgroundColor: COLORS.light20,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center'
        }}>
          <Icon name='person-outline' color={COLORS.white} size={SIZES.width * .13} />
        </Pressable>

        <View style={{ marginBottom: SIZES.spacing }}>
          <CustumTextInput
            placeholder={'Name'}
            iconName="person-outline"
            keyboardType={'default'}
            secureTextEntry={false}
            moreStyle={{ marginBottom: SIZES.spacing }}
          />
          <CustumTextInput
            placeholder={'Email'}
            iconName="email"
            keyboardType={'email-address'}
            secureTextEntry={false}
            moreStyle={{ marginBottom: SIZES.spacing * 2 }}
          />
          <CustumTextInput
            placeholder={'Password'}
            iconName="lock"
            keyboardType={'default'}
            secureTextEntry={true}
            moreStyle={{ marginBottom: SIZES.spacing }}
          />
          <CustumTextInput
            placeholder={'Confirm password'}
            iconName="lock"
            keyboardType={'default'}
            secureTextEntry={true}
            moreStyle={{ marginBottom: SIZES.spacing }}
          />
        </View>

        <CustumButton label={'Register'} />

        <TouchableOpacity onPress={() => navigation.navigate(ROUTES.login)} style={{ alignSelf: 'center', marginTop: SIZES.spacing * 2 }}>
          <CustumText
            fontFamily={'regular'}
            style={{
              color: COLORS.white,
              fontSize: SIZES.width * .045,
              textAlign: 'center',

            }}
          >
            Already have an account ? Login
          </CustumText>
        </TouchableOpacity>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}

export default Register