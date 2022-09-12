import { FlatList, StyleSheet, } from 'react-native'
import React, { useState } from 'react'
import { Input, Screen, Text, View, WIDTH, Button } from 'ui'
import TicketCard from '../../components/TicketCard'
import NavigationBar from 'components/NavigationBar'
import * as yup from 'yup';
import Modal from "react-native-modal";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { lines } from './DummyData'

type FormData = {
    fullname: string,
    email: string
}
const schema = yup.object().shape({
    fullname: yup.string(),
    email: yup.string(),
});
const TicketsScreen = ({ navigation }: any) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState()
    const toggleModal = (item) => {
        setModalVisible(!isModalVisible);
        setSelectedItem(item)
    };
    const { handleSubmit, control, } = useForm<FormData>({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data: FormData) => {
        navigation.navigate('ticket', { data: data, item: selectedItem })
        setModalVisible(!isModalVisible);
    }
    return (
        <Screen style={{ paddingHorizontal: 28, backgroundColor: '#dee3f1' }}>
            <NavigationBar title='Choose your Bus' addBackButton />
            <FlatList
                data={lines}
                renderItem={({ item, index, separators }) => (
                    <TicketCard
                        key={index}
                        style={{ marginBottom: 10 }}
                        endPoint={item.endDestination}
                        startPoint={item.startDestination}
                        endTime={item.endTime}
                        startTime={item.startTime}
                        triptime={item.time}
                        price={item.price}
                        roadlength={item.length} onPress={() => toggleModal(item)} />
                )}
                style={{ flex: 1, }}
            />


            <Modal isVisible={isModalVisible}
                animationIn='slideInUp'
                animationOut={'slideOutDown'}
                style={{ margin: 0, justifyContent: 'flex-end' }}
                onSwipeComplete={toggleModal}
                onBackdropPress={toggleModal}
                animationInTiming={500}
                animationOutTiming={600}
            >
                <View backgroundColor={'white'} width={WIDTH} height='60%' style={styles.modal}>
                    <Text style={{ lineHeight: 24, fontSize: 24, letterSpacing: 3 }} variant={'H_1'} >Enter Your Details </Text>
                    <View backgroundColor={'whitegrey'} height="35%" justifyContent={'space-around'} paddingHorizontal='s' borderRadius={12}>
                        <Input control={control} name='fullname' placeholder='Full name' />
                        <Input control={control} name='email' placeholder='Email' />
                    </View>
                    <Button variant={'primary'} label='Get Ticket' onPress={handleSubmit(onSubmit)}></Button>
                </View>
            </Modal>
        </Screen>
    )
}

export default TicketsScreen

const styles = StyleSheet.create({
    modal: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingHorizontal: 25,
        justifyContent: 'space-evenly'
    }
})