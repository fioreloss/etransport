import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from "react-native-vector-icons/Ionicons";
import { HomeScreen } from 'screens/Home/Home';

Icon.loadFont()
const BottomTab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen name='home' component={HomeScreen} options={{
                headerShown: false,
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, focused }) =>
                    focused ? (
                        <Icon name='home' size={25} color={color} />
                    ) : (
                        <Icon name='home-outline' size={25} color={color} />
                    ),
                tabBarActiveTintColor: '#ec8c85',
                tabBarInactiveTintColor: '#0d0e0e',
            }} />

        </BottomTab.Navigator>
    )
}