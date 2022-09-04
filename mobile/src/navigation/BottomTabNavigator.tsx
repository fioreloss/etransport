import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from 'screens/Home';


const BottomTab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen name='home' component={Home} />
        </BottomTab.Navigator>
    )
}