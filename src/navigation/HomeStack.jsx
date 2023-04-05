import { createStackNavigator } from '@react-navigation/stack'
import { ROUTES } from '../constants'
import Home from '../screens/home/Home'

const Homes = createStackNavigator()

const HomeStack = () => {
  return (
    <Homes.Navigator screenOptions={{
        headerShown: true
    }}>
      <Homes.Screen name={ROUTES.home} component={Home}/>
    </Homes.Navigator>
  )
}

export default HomeStack