import React from 'react'
import { createAppContainer, createBottomTabNavigator } from 'react-navigation'
import HomeScreen from '../components/HomeScreen'
import FavoriteScreen from '../components/FavoriteScreen'
import Icon from 'react-native-vector-icons/FontAwesome'

const MainNav = createBottomTabNavigator({
    Home : {
        screen: HomeScreen,
        navigationOptions:{
            tabBarIcon: ({tintColor}) => (
                <Icon name="home" size={20} color={tintColor} />
            ),
            tabBarLabel : 'الرئيسيه'
        }
    },
    Favorites:{
        screen: FavoriteScreen,
        navigationOptions:{
            tabBarIcon: ({tintColor}) => (
                <Icon name="heart" size={20} color={tintColor} />
            ),
            tabBarLabel : 'المفضله'
        }
    }
},{
    tabBarOptions:{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray'
    }
})
export default createAppContainer(MainNav)