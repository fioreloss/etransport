import React, { useEffect } from 'react';
import RNBootSplash from "react-native-bootsplash";
import { createStackNavigator } from "@react-navigation/stack";

import { useAuth } from 'core';
import { NavigationContainer } from './NavigationContainer';
import { AuthNavigator } from './AuthNavigator';
import { BottomTabNavigator } from "./BottomTabNavigator"

const Stack = createStackNavigator()

const RootStack = () => {
    const { status } = useAuth();
    useEffect(() => {
        if (status !== 'idle') {
            RNBootSplash.hide({ fade: true })
        }
    }, [status]);

    return (
        <Stack.Navigator screenOptions={{
            cardOverlayEnabled: false,
            headerShown: false,
            gestureEnabled: false,
            animationTypeForReplace: status === 'signIn' ? 'push' : 'pop'
        }}>
            <Stack.Screen name="Auth" component={AuthNavigator} />
            {/* {status === 'signIn' ? ( */}
            <Stack.Screen name="Home" component={BottomTabNavigator} />
            {/* ) : ( */}

            {/* )} */}
        </Stack.Navigator>
    )
}

export const RootNavigator = () => (
    <NavigationContainer>
        <RootStack />
    </NavigationContainer>
)