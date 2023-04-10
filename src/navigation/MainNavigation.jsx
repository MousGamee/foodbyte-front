import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./BottomTab";
import { useState } from "react";
import AuthStack from "./AuthStack";
import { ROUTES } from "../constants";
import RestaurantDetails from "../screens/home/RestaurantDetails";
import TrendingRestaurant from "../screens/home/TrendingRestaurant";

const Main = createStackNavigator()

const MainNavigation = () => {
    const [isLogin, setIsLogin] = useState(true)
    return (
        isLogin ? (
            <Main.Navigator screenOptions={{
                headerShown: false    
            }}>
                <Main.Screen name={ROUTES.main} component={BottomTab} />
                <Main.Screen name={ROUTES.restaurantDetails} component={RestaurantDetails} />
                <Main.Screen name={ROUTES.trendingRestaurant} component={TrendingRestaurant} />
            </Main.Navigator>
        ) : (
            <AuthStack />
        )
    )
}

export default MainNavigation