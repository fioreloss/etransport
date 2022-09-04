import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import Home from 'screens/Home';


export type AuthStackParamList = {
    Login: undefined;

}
const Stack = createStackNavigator();

export const AuthNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Home} />
        </Stack.Navigator>
    )
}