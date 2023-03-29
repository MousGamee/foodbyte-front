import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { images, SIZES, COLORS } from '../../constants'
import CustumText from '../../components/CustumText'
import CustumTextInput from '../../components/CustumTextInput'
import CustumButton from '../../components/CustumButton'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'


const ForgotPassword = () => {
    const navigation = useNavigation()
    return (
        <ImageBackground
            style={{
                width: SIZES.width,
                height: SIZES.height,
                flex: 1,
                paddingHorizontal: SIZES.padding,
                paddingTop: SIZES.spacing * 3
            }}
            source={images.loginBkg}
            resizeMode="cover"
        >
            <View style={{
                flexDirection: 'row',
                paddingVertical : SIZES.paddingHorizontal,
                alignItems : 'center'
            }}>
                <TouchableOpacity onPress={() => navigation.goBack()}
                style={{
                    padding : SIZES.spacing,
                    justifyContent : 'center',
                    alignItems : 'center'
                }}>
                    <Icon name='arrow-back-ios' color={COLORS.white} size={SIZES.headerIcon}/>
                </TouchableOpacity>
                <CustumText fontFamily={'semibold'} style={{
                    color: COLORS.white,
                    fontSize: SIZES.largeTitle,
                }}>Forgot password</CustumText>
            </View>

            <View style={{
                marginVertical : SIZES.spacing * 3
            }}>
                <CustumText fontFamily={'light'} style={{
                    color: COLORS.white,
                    fontSize: SIZES.body1, 
                    textAlign : 'center'
                }}>Enter your email and will send you instructions on how to reset it</CustumText>
            </View>

            <CustumTextInput
                iconName={'email'}
                keyboardType="email-address"
                placeholder={'Your email'}
            />

            <CustumButton label={'Send'} moreStyle={{
                marginTop : SIZES.spacing * 3
            }}/>
        </ImageBackground>
    )
}

export default ForgotPassword