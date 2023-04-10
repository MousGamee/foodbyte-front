import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { COLORS, images, SIZES } from '../../constants'
import { Badge } from '@rneui/themed';
import CustumText from '../CustumText';

const HomeCard = ({
    containerStyle,
    item,
    onPress
}) => {
    return (
        <TouchableOpacity 
        onPress={onPress}
        
        style={{
            ...containerStyle,
            backgroundColor: COLORS.primary20,
            width: SIZES.homeCardWith,
            height: SIZES.homeCardHeight,
            borderRadius: SIZES.radius
        }}>
            {/* Top */}
            <ImageBackground style={{
                width: '100%',
                flex: 1,
            }}
                source={item.image}
                resizeMode="cover">
                <View style={{
                    paddingHorizontal: SIZES.padding / 2,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingTop: SIZES.padding / 2
                }}>
                    <View style={{
                        paddingHorizontal: 8,
                        paddingVertical: 5,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.white,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <CustumText fontFamily={'semibold'}>{ item.isOpen ? 'Open' : 'Close'}</CustumText>
                    </View>
                    <View style={{
                        paddingHorizontal: 8,
                        paddingVertical: 5,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.white,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <MaterialIcons name="star" size={20} color={COLORS.error} />
                        <Text>{item.rating}</Text>
                    </View>
                </View>
            </ImageBackground>
            {/* Bottom */}
            <View style={{
                backgroundColor : COLORS.white,
                paddingHorizontal: SIZES.padding / 2,
                paddingVertical : SIZES.padding /2

            }}>
                <View style={{
                    flexDirection : 'row',
                    marginBottom : SIZES.spacing
                }}>
                    <CustumText fontFamily={'semibold'} style={{
                        fontSize : 17,
                        flex : 1,
                        color : COLORS.primary
                    }}>{item.name}</CustumText>
                    <Badge status='error' value="italian" />
                    <Badge status='success' value="3.5km" />
                </View>
                <View>
                    <CustumText fontFamily={'regular'} style={{
                         fontSize : 14,
                         color : COLORS.primary80
                    }}>{item.location}</CustumText>
                </View>
            </View>

        </TouchableOpacity>
    )
}

export default HomeCard