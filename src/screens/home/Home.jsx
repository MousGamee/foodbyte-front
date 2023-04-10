import { View, Text, SafeAreaView, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import CustumHeader from '../../components/CustumHeader'
import { COLORS, dummyData, ROUTES, SIZES } from '../../constants'
import HomeCard from '../../components/home/HomeCard'
import { useNavigation } from '@react-navigation/native'
import CustumText from '../../components/CustumText'

const Home = () => {
    const navigation = useNavigation()

    function renderTrending() {
        return (
            <View style={{
                marginBottom : SIZES.spacing * 2
            }}>
                <View style={{
                    paddingHorizontal: SIZES.padding,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: SIZES.spacing
                }}>
                    <CustumText fontFamily={'semibold'} style={{
                        fontSize: SIZES.h2,
                        color: COLORS.primary
                    }}>Trending Restaurant</CustumText>
                    <TouchableOpacity onPress={() => navigation.navigate(ROUTES.trendingRestaurant)}>
                        <CustumText fontFamily={'regular'} style={{
                            color: COLORS.primary
                        }}> See all (5)</CustumText>
                    </TouchableOpacity>
                </View>
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
                                onPress={() => navigation.push(ROUTES.restaurantDetails, { item })}
                                item={item}
                                containerStyle={{
                                    marginLeft: index === 0 ? SIZES.padding : 0,
                                    marginRight: SIZES.spacing
                                }}
                            />
                        )
                    }}
                />
            </View>
        )
    }

    function renderCategorie() {
        return (
            <View style={{
                marginBottom : SIZES.spacing * 2
            }}>
                <View style={{
                    paddingHorizontal: SIZES.padding,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: SIZES.spacing
                }}>
                    <CustumText fontFamily={'semibold'} style={{
                        fontSize: SIZES.h2,
                        color: COLORS.primary
                    }}>Category</CustumText>
                    <TouchableOpacity onPress={() => navigation.navigate(ROUTES.trendingRestaurant)}>
                        <CustumText fontFamily={'regular'} style={{
                            color: COLORS.primary
                        }}> See all (5)</CustumText>
                    </TouchableOpacity>
                </View>
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
                                onPress={() => navigation.push(ROUTES.restaurantDetails, { item })}
                                item={item}
                                containerStyle={{
                                    marginLeft: index === 0 ? SIZES.padding : 0,
                                    marginRight: SIZES.spacing
                                }}
                            />
                        )
                    }}
                />
            </View>
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
                    <View>
                        { renderTrending()}
                        { renderCategorie()}
                    </View>
                    
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