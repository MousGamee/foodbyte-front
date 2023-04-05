import { View, Text, SafeAreaView, StatusBar, FlatList } from 'react-native'
import React from 'react'
import CustumHeader from '../../components/CustumHeader'
import { COLORS, dummyData, ROUTES, SIZES } from '../../constants'
import HomeCard from '../../components/home/HomeCard'
import { useNavigation } from '@react-navigation/native'

const Home = () => {

    const navigation = useNavigation()
    function renderHeader() {
        return (
            <FlatList
                data={dummyData.homeItem}
                keyExtractor={item => item._id.toString()}
                showsHorizontalScrollIndicator={false}
                horizontal
                snapToInterval={SIZES.homeCardWith + SIZES.padding}
                decelerationRate={'fast'}
                renderItem={({ item, index }) => {
                    return (
                        <HomeCard
                        onPress={() => navigation.push(ROUTES.restaurantDetails, {item})}
                            item={item}
                            containerStyle={{
                                marginLeft: index === 0 ? SIZES.padding : 0,
                                marginRight: SIZES.spacing
                            }}
                        />
                    )
                }}
            />
        )
    }

    // Main return
    return (
        <View style={{
            flex: 1,
            paddingTop: SIZES.spacing,

        }}>
            <FlatList
                data={dummyData.homeItem}
                keyExtractor={item => item._id.toString()}
                keyboardDismissMode="on-drag"
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    renderHeader()
                }
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text>{item.name}</Text>
                        </View>
                    )
                }}

                ListFooterComponent={
                    <View style={{
                        marginBottom: 100
                    }}></View>
                }
            />
        </View>
    )
}

export default Home