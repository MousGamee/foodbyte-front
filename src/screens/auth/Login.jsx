import {
    View,
    ImageBackground,
    Image,
    KeyboardAvoidingView,
    TouchableOpacity,
    Platform
} from 'react-native'
import React from 'react'
import images from '../../constants/images'
import { COLORS, ROUTES, SIZES } from '../../constants'
import CustumText from '../../components/CustumText'
import CustumTextInput from '../../components/CustumTextInput'
import CustumButton from '../../components/CustumButton'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
const navigation = useNavigation()
    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
            flex: 1,
            justifyContent: 'space-around'
        }}
        >
            <ImageBackground
                style={{
                    width: SIZES.width,
                    height: SIZES.height,
                    flex: 1,
                    justifyContent: 'space-around'
                }}
                source={images.loginBkg}
                resizeMode="cover"
            >
                {/* Logo */}
                <Image
                    source={images.logo2}
                    resizeMode="contain"
                    style={{
                        width: SIZES.width * .6,
                        alignSelf: 'center',
                        marginTop : SIZES.spacing * 2
                    }}
                />
                {/* Login form */}
                <View style={{
                    paddingHorizontal: SIZES.paddingHorizontal,
                }}>
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
                    <TouchableOpacity onPress={() => navigation.navigate(ROUTES.forgotPassword)} style={{
                        marginVertical: SIZES.spacing * 2
                    }}>
                        <CustumText
                            fontFamily={'regular'}
                            style={{
                                color: COLORS.white,
                                fontSize: SIZES.width * .045,
                                textAlign: 'right'
                            }}
                        >
                            Forgot Password ?
                        </CustumText>
                    </TouchableOpacity>

                    <CustumButton
                        onPress={() => alert('login')}
                        label='Login'
                    />

                    <TouchableOpacity onPress={() => navigation.navigate(ROUTES.register)} style={{ alignSelf: 'center', marginTop: SIZES.spacing * 2 }}>
                        <CustumText
                            fontFamily={'regular'}
                            style={{
                                color: COLORS.white,
                                fontSize: SIZES.width * .045,
                                textAlign: 'center',

                            }}
                        >
                            Create New Account
                        </CustumText>
                    </TouchableOpacity>
                </View>


            </ImageBackground>
        </KeyboardAvoidingView>

    )
}

export default Login