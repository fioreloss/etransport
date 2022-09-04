import React from 'react'
import { SafeAreaView } from './SafeAreaView';


type Props = {
    children: React.ReactNode;
}

export const Screen = ({ children }: Props) => {
    return (
        <SafeAreaView
            justifyContent='center'
            flexDirection='column'
            flex={1}
        >
            {children}
        </SafeAreaView>
    )
}