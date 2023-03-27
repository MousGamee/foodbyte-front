import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'
import Icon from 'react-native-vector-icons/MaterialIcons'

const CustumTextInput = ({
    placeholder,
    keyboardType,
    iconName,
    secureTextEntry,
    moreStyle
}) => {
    return (
        <View style={{
            ...moreStyle,
            height: SIZES.width * .16,
            borderRadius: 15,
            backgroundColor: COLORS.lightGrey20,
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <TextInput
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            placeholderTextColor={COLORS.light60}
            keyboardType={keyboardType}
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    paddingLeft: SIZES.padding * 2.7,
                    color : COLORS.white,
                }}
            />
            <Icon name={iconName} color={COLORS.white} size={SIZES.width * .08} style={{
                marginLeft: SIZES.margin,
            }} />
        </View>
    )
}

export default CustumTextInput