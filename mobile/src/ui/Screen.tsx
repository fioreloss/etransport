import React from 'react'
import { StatusBar } from 'react-native';
import { SafeAreaView } from './SafeAreaView';


type Props = {
    children: React.ReactNode;
    style?: any;
}

export const Screen = ({ children, style }: Props) => {
    return (
        <SafeAreaView
            style={style}
            flexDirection='column'
            flex={1}
        >
            <StatusBar backgroundColor={'red'} barStyle="dark-content" />
            {children}
        </SafeAreaView>
    )
}