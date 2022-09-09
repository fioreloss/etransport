import { StyleSheet } from 'react-native'
import React from 'react'
import Slider from '../../../assets/icons/Slider.svg'
import { View, Text, Screen, Button } from 'ui'
import NavigationBar from 'components/NavigationBar'
const Ticket = () => {
    return (
        <Screen style={{ backgroundColor: '#d4e4f2', paddingHorizontal: 24, alignItems: 'center' }} >
            <NavigationBar title='Get Your Ticket' addBackButton />
            <View borderTopLeftRadius={15} borderTopRightRadius={15} backgroundColor='primary' width={'100%'} alignItems='center' paddingVertical={'xs'} marginTop='l'>
                <Text variant={'H_2_White'}>456-66-66</Text>
            </View>
            <View backgroundColor='white' width={'100%'} borderBottomLeftRadius={15} borderBottomRightRadius={15} paddingHorizontal={'m'} alignItems='flex-start' height='70%'>
                <View justifyContent={'space-between'} flexDirection='row' style={{ display: 'flex' }} width='100%' paddingTop='xxxl' paddingBottom={'s'}>
                    <Text variant={'H_2'}>13:00</Text>
                    <Text variant={'H_2'}>13:00</Text>
                </View>
                <Slider />
                <View justifyContent={'space-between'} flexDirection='row' style={{ display: 'flex' }} width='100%' paddingTop='m' paddingBottom={'s'}>
                    <Text variant={'H_2'}>Tirane</Text>
                    <Text variant={'H_2'}>Vlore</Text>
                </View>
                <View mt='l' flexDirection={'row'} justifyContent='space-between' width={'100%'}>
                    <View>
                        <Text variant={'H_2'} mb='xxxs'>
                            Date:
                        </Text>
                        <Text variant={'H_2'}>
                            12/03/2022
                        </Text>
                    </View>
                    <View backgroundColor={'primary'} padding='xxxs' borderRadius={15} justifyContent='center' alignItems={'center'}>
                        <Text variant={'H_2_White'}> AA234ab</Text>

                    </View>
                </View>
                <View mt='l'>
                    <Text variant={'H_2'} mb='xxxs'>
                        Passenger:
                    </Text>
                    <Text variant={'H_2'}>
                        Test Test
                    </Text>
                </View>
                <View mt='l'>
                    <Text variant={'H_2'} mb='xxxs'>
                        ID:
                    </Text>
                    <Text variant={'H_2'}>
                        Test Test
                    </Text>
                </View>
                <View mt='l'>
                    <Text variant={'H_2'} mb='xxxs'>
                        Email:
                    </Text>
                    <Text variant={'H_2'}>
                        Test Test
                    </Text>
                </View>

            </View>
            <Button variant='primary' label='Get Your ticket' onPress={() => { }} marginTop='m' />
        </Screen>
    )
}

export default Ticket

const styles = StyleSheet.create({})