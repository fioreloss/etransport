import { Screen, View, Text, Button } from "ui"
import React, { useState } from 'react'
import NavigationBar from "components/NavigationBar"
import { Avatar } from 'react-native-paper';
import Icon from "react-native-vector-icons/Ionicons";
import Modal from "react-native-modal";
import QRCodeScanner from 'react-native-qrcode-scanner';
import AddBus from "components/AddBus";
import Slotsmodal from "components/Slotsmodal";
Icon.loadFont()
export const HomeScreen = ({ navigation }) => {
    const [modalScanVisible, setModalScanVisible] = useState(false)
    const [modalAddBusisible, setModalAddBusVisible] = useState(false)
    const [modalSlotVisible, setModalSlotVisible] = useState(false)
    const toggleModal = () => {
        setModalScanVisible(!modalScanVisible);
    };
    const toggleModalBus = () => {
        setModalAddBusVisible(!modalAddBusisible);
    }
    const toggleModalSlot = () => {
        setModalSlotVisible(!modalSlotVisible);
    }
    const Buses = [{}]
    const onSuccess = (e: any) => {
        console.log(e)
    };
    return (
        <Screen style={{ backgroundColor: '#dee3f1', justifyContent: 'space-between' }}>
            <View mt='l'>
                <View width='100%' alignItems={'center'}>
                    <Avatar.Text size={80} label="AA" color="black" style={{ backgroundColor: '#ec8c85' }} />
                    <Text mt='l' variant={"H_1"}>Admin Admin</Text>
                </View>
                <View flexDirection={'row'} width='100%' justifyContent={'space-around'} mt={'xxxl'} >
                    <Button onPress={toggleModal} label='Scan Ticket' variant={'text'} style={{ width: '35%' }} icon={<Icon name='scan-circle-outline' color='#ec8c85' size={20} />} />
                    <Button label='Get your slot' variant={'text'} style={{ width: '40%' }} icon={<Icon name='list-outline' color='#ec8c85' size={20} />} onPress={toggleModalSlot} />
                    <Button label='Add new bus' variant={'text'} style={{ width: '40%', }} icon={<Icon name='add-circle-outline' color='#ec8c85' size={20} />} onPress={toggleModalBus} />
                </View>
                <View width='100%' alignItems={'center'} mt='xxl' paddingHorizontal={'screen'}>
                    <Text variant={"H_1"} mb='l'> Your Buses</Text>

                    {Buses.map((item) => {
                        return (
                            <View width={'80%'} justifyContent='center' alignItems={'center'} backgroundColor='white' padding={'s'} borderRadius={15}>
                                <Text variant={'H_2'}>AA345SF</Text>
                                <View width={'100%'} justifyContent='space-around' flexDirection={'row'} alignItems='center'>
                                    <Text variant={'P_1'} color='darkprimary'>Type:</Text>
                                    <Text variant='H_2'>Minibus</Text>
                                    <Text variant='H_2'>20 seats</Text>
                                </View>
                                <View width={'100%'} justifyContent='space-around' flexDirection={'row'} alignItems='center'>
                                    <Text color='darkprimary' variant={'P_1'}>Road:</Text>
                                    <Text variant='H_2'>Tirane</Text>
                                    <Text variant='H_2'>Durres</Text>
                                </View>
                            </View>
                        )
                    })}
                </View>
                <Modal isVisible={modalScanVisible}
                    animationIn='slideInUp'
                    animationOut={'slideOutDown'}
                    style={{ margin: 0, justifyContent: 'flex-end' }}
                    onSwipeComplete={toggleModal}
                    onBackdropPress={toggleModal}
                    animationInTiming={500}
                    animationOutTiming={600}
                >
                    <View height={'70%'} width={'100%'} backgroundColor='white' justifyContent={'center'} alignItems='center'>


                        <QRCodeScanner
                            onRead={onSuccess}
                            // reactivate={isReactivated}
                            reactivateTimeout={4000}
                        />
                    </View>
                </Modal>
                <Modal isVisible={modalAddBusisible}
                    animationIn='slideInUp'
                    animationOut={'slideOutDown'}
                    style={{ margin: 0, justifyContent: 'flex-end' }}
                    onSwipeComplete={toggleModalBus}
                    onBackdropPress={toggleModalBus}
                    animationInTiming={500}
                    animationOutTiming={600}
                >
                    <View height={'70%'} width={'100%'} backgroundColor='white' borderTopLeftRadius={15} borderTopRightRadius={15} paddingTop='l'>
                        <AddBus />
                    </View>
                </Modal>
                <Modal isVisible={modalSlotVisible}
                    animationIn='slideInUp'
                    animationOut={'slideOutDown'}
                    style={{ margin: 0, justifyContent: 'flex-end' }}
                    onSwipeComplete={toggleModalSlot}
                    onBackdropPress={toggleModalSlot}
                    animationInTiming={500}
                    animationOutTiming={600}
                >
                    <View height={'75%'} width={'100%'} backgroundColor='white' borderTopLeftRadius={15} borderTopRightRadius={15} paddingTop='l'>
                        <Slotsmodal />
                    </View>
                </Modal>
            </View>
            <Button label="Logout" variant={'primary'} style={{ width: '80%', marginLeft: 24 }} onPress={() => {
                navigation.navigate('Auth', {
                    screen: 'Login',
                });
            }} />
        </Screen >
    )
}