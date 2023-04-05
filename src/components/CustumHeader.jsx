import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Surface } from 'react-native-paper'
import { COLORS, SIZES } from '../constants'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import CustumText from './CustumText'

const CustumHeader = () => {
    return (
        <Surface style={styles.header}>
            {/* left */}
            <View style={styles.view}>
                {<TouchableOpacity>
                    <MaterialIcons name='arrow-back-ios' size={24} color={COLORS.primary} />
                </TouchableOpacity>}
                {<TouchableOpacity>
                    <MaterialIcons name='arrow-back-ios' size={24} color={COLORS.primary} />
                </TouchableOpacity>}
            </View>

            {/* center */}
            <View style={styles.view}>
                <CustumText fontFamily={'semibold'} style={{
                    fontSize : SIZES.h3
                }}>
                    Header title
                </CustumText>
            </View>

            {/* right */}
            <View style={[styles.view, styles.rightView]}>
                {<TouchableOpacity>
                    <MaterialIcons name='arrow-back-ios' size={24} color={COLORS.primary} />
                </TouchableOpacity>}
                {<TouchableOpacity>
                    <MaterialIcons name='arrow-back-ios' size={24} color={COLORS.primary} />
                </TouchableOpacity>}
            </View>
        </Surface>
    )
}

export default CustumHeader

const styles = StyleSheet.create({
    header: {
        paddingTop : 50,
        paddingHorizontal : SIZES.padding,
        paddingBottom : SIZES.padding,
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 4,
        flexDirection: 'row',
        backgroundColor: COLORS.white
    },
    view: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
    },
    rightView: {
        justifyContent: 'flex-end'
    }
})