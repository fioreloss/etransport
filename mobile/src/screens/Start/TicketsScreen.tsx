import { StyleSheet, } from 'react-native'
import React from 'react'
import { Screen, Text, View } from 'ui'
import TicketCard from '../../components/TicketCard'
import NavigationBar from 'components/NavigationBar'
const TicketsScreen = ({ navigation }: any) => {
    return (
        <Screen style={{ paddingHorizontal: 28, backgroundColor: '#dee3f1' }}>
            <NavigationBar title='Choose your Bus' addBackButton />
            <TicketCard time={'15:00'} onPress={() => {
                navigation.navigate('ticket')
            }} />
        </Screen>
    )
}

export default TicketsScreen

const styles = StyleSheet.create({})