import { View, Text, SafeAreaView, StatusBar, FlatList } from 'react-native'
import React from 'react'
import CustumHeader from '../../components/CustumHeader'
import { COLORS, dummyData } from '../../constants'
import HomeCard from '../../components/home/HomeCard'

const Home = () => {

    return (
        <View style={{
            flex : 1,
        }}>
            <HomeCard />
            <FlatList
                data={dummyData.homeItem}
                keyExtractor={item => item._id.toString()}
                keyboardDismissMode="on-drag"
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View />
                }
                renderItem={({ item }) => {
                    return(
                        <View>
                            <Text> {item.name}</Text>
                           
                        </View>
                    )
                }}

                ListFooterComponent={
                    <View style={{
                        marginBottom : 100
                    }}></View>
                }
                />
        </View>
    )
}

export default Home