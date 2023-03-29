import { createStackNavigator } from '@react-navigation/stack'
import { ROUTES } from '../constants'
import ForgotPassword from '../screens/auth/ForgotPassword'
import Login from '../screens/auth/Login'
import Register from '../screens/auth/Register'

const Auth = createStackNavigator()

const AuthStack = () => {
    return (
        <Auth.Navigator screenOptions={{
            headerShown: false
        }}>
            <Auth.Screen name={ROUTES.login} component={Login} />
            <Auth.Screen name={ROUTES.register} component={Register} />
            <Auth.Screen name={ROUTES.forgotPassword} component={ForgotPassword} options={{
               
            }} />
        </Auth.Navigator>
    )
}

export default AuthStack