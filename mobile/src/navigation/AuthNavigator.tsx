import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import Home from 'screens/Start/StartScreen';
import TicketsScreen from 'screens/Start/TicketsScreen';
import { LoginScreen } from 'screens/Auth/Login';
import { RegisterScreen } from 'screens/Auth/Register';
import Ticket from 'screens/Start/Ticket';


export type AuthStackParamList = {
    Login: undefined;

}
const Stack = createStackNavigator();

export const AuthNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='StartScreen' component={Home} options={{ headerShown: false }} />
            <Stack.Screen name='Tickets' component={TicketsScreen} options={{ headerShown: false }} />
            <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name='register' component={RegisterScreen} options={{ headerShown: false }} />
            <Stack.Screen name='ticket' component={Ticket} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}