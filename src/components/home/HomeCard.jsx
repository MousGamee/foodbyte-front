import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { COLORS } from '../../constants'

const HomeCard = () => {
    return (
        <TouchableOpacity>
            {/* Top */}
            <ImageBackground>
                <View>
                    <View>
                        <Text>Open</Text>
                    </View>
                    <View>
                        <MaterialIcons name="star" size={20} color={COLORS.error} />
                        <Text>4.5</Text>
                    </View>
                </View>
            </ImageBackground>
            {/* Bottom */}
            <View>
                <View>
                    <Text>Adresse du resto</Text>
                    
                </View>
            </View>

        </TouchableOpacity>
    )
}

export default HomeCard