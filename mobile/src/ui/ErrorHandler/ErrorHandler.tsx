import React from 'react'
import { View } from 'ui/View';
import { Text } from 'ui/Text';
import { Button } from 'ui/Button';
import { Screen } from 'ui/Screen';


export function ErrorFallback({ resetErrorBoundary }: any) {
    return (
        <Screen>
            <View>
                <Text>Something went wrong:</Text>
                <Button label="try Again" onPress={resetErrorBoundary}></Button>
            </View>
        </Screen>
    )
}