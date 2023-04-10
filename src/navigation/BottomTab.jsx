import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import * as Animatable from 'react-native-animatable';
import { useRef, useEffect } from 'react';
import {Icon, COLORS, Icons } from '../constants';
import Favoris from '../screens/favoris/Favoris';
import Home from '../screens/home/Home';
import Notification from '../screens/notification/Notification';
import Profile from '../screens/profile/Profile'
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import HomeStack from './HomeStack';

const Tabs = createBottomTabNavigator()

const TabArr = [
  { route: 'HomeStack', label: 'Home', type: Icons.Ionicons, activeIcon: 'grid', inActiveIcon: 'grid-outline', component: HomeStack },
  { route: 'Like', label: 'Like', type: Icons.MaterialCommunityIcons, activeIcon: 'heart-plus', inActiveIcon: 'heart-plus-outline', component: Favoris },
  { route: 'Search', label: 'Search', type: Icons.MaterialCommunityIcons, activeIcon: 'timeline-plus', inActiveIcon: 'timeline-plus-outline', component: Notification },
  { route: 'Account', label: 'Account', type: Icons.FontAwesome, activeIcon: 'user-circle', inActiveIcon: 'user-circle-o', component: Profile },
];
const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);


  useEffect(() => {
    if (focused) {
      viewRef.current.animate({0: {scale: .5, rotate: '0deg'}, 1: {scale: 1.5, rotate: '360deg'}});
    } else {
      viewRef.current.animate({0: {scale: 1.5, rotate: '360deg'}, 1: {scale: 1, rotate: '0deg'}});
    }
  }, [focused])

  return(
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View
       ref={viewRef}
       duration={800}
        style={styles.container}>
        <Icon type={item.type} name={focused ? item.activeIcon : item.inActiveIcon} color={focused ? COLORS.primary : COLORS.primary20} /> 
      </Animatable.View>
    </TouchableOpacity>
  )
}
const BottomTab = () => {
  return (
    <Tabs.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: {
        // height: 60,
        // position: 'absolute',
        // bottom: 16,
        // right: 16,
        // left: 16,
        // borderRadius: 16,
        // alignItems : 'center',
        // justifyContent : 'space-around'
      }
    }}>
      {TabArr.map((item, index) => {
        return (
          <Tabs.Screen key={index} name={item.route} component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />
            }}
          />
        )
      })}
    </Tabs.Navigator>
  )
}

export default BottomTab


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})