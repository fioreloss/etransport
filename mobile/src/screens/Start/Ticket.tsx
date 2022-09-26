import { StyleSheet } from 'react-native'
import React from 'react'
import Slider from '../../../assets/icons/Slider.svg'
import { View, Text, Screen, Button } from 'ui'
import NavigationBar from 'components/NavigationBar'

const Ticket = ({ navigation, route }: any) => {
    const { data, item } = route.params


    const Sendemail = async () => {

        try {
            const response = await fetch(`http://localhost:3000/SendEmail/sendEmail`, {
                method: 'POST',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ticketId: item.id,
                    carTag: item.busPlate,
                    startTime: item.startTime,
                    busLine: `${item.startDestination}-${item.endDestination}`,
                    email: data.email
                })
            })
            const res = await response.json()
        } catch (error) {
            console.log('error', error)

        }
    }
    return (
        <Screen style={{ backgroundColor: '#d4e4f2', paddingHorizontal: 24, alignItems: 'center' }} >
            <NavigationBar title='Get Your Ticket' addBackButton />
            <View borderTopLeftRadius={15} borderTopRightRadius={15} backgroundColor='primary' width={'100%'} alignItems='center' paddingVertical={'xs'} marginTop='l'>
                <Text variant={'H_2_White'}>{item.id}</Text>
            </View>
            <View backgroundColor='white' width={'100%'} borderBottomLeftRadius={15} borderBottomRightRadius={15} paddingHorizontal={'m'} alignItems='flex-start' height='70%'>
                <View justifyContent={'space-between'} flexDirection='row' style={{ display: 'flex' }} width='100%' paddingTop='xxxl' paddingBottom={'s'}>
                    <Text variant={'H_2'}>{item.startTime}</Text>
                    <Text variant={'H_2'}>{item.endTime}</Text>
                </View>
                <Slider />
                <View justifyContent={'space-between'} flexDirection='row' style={{ display: 'flex' }} width='100%' paddingTop='m' paddingBottom={'s'}>
                    <Text variant={'H_2'}>{item.startDestination}</Text>
                    <Text variant={'H_2'}>{item.endDestination}</Text>
                </View>
                <View mt='l' flexDirection={'row'} justifyContent='space-between' width={'100%'}>
                    <View>
                        <Text variant={'H_2'} mb='xxxs'>
                            Date:
                        </Text>
                        <Text variant={'H_2'}>
                            {item.date}
                        </Text>
                    </View>
                    <View backgroundColor={'primary'} padding='xxxs' borderRadius={15} justifyContent='center' alignItems={'center'}>
                        <Text variant={'H_2_White'}>{item.busPlate}</Text>

                    </View>
                </View>
                <View mt='l'>
                    <Text variant={'H_2'} mb='xxxs'>
                        Passenger:
                    </Text>
                    <Text variant={'H_2'}>
                        {data.fullname}
                    </Text>
                </View>
                <View mt='l'>
                    <Text variant={'H_2'} mb='xxxs'>
                        ID:
                    </Text>
                    <Text variant={'H_2'}>
                        {item.id}
                    </Text>
                </View>
                <View mt='l'>
                    <Text variant={'H_2'} mb='xxxs'>
                        Email:
                    </Text>
                    <Text variant={'H_2'}>
                        {data.email}
                    </Text>
                </View>

            </View>
            <Button variant='primary' label='Get Your ticket' onPress={() => {
                Sendemail()
                navigation.navigate('StartScreen')
            }} marginTop='m' />
        </Screen>
    )
}

export default Ticket

const styles = StyleSheet.create({})