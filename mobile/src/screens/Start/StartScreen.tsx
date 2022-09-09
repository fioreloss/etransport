import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Input, Screen, Text, View, WIDTH } from 'ui';
import Modal from "react-native-modal";
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';


type FormData = {
    startPoint: string,
    destination: string
}
const schema = yup.object().shape({
    startPoint: yup.string().required(),
    destination: yup.string().required(),
});
const Home = ({ navigation }: any) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const { handleSubmit, control } = useForm<FormData>({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data: FormData) => {
        console.log(data);
    };
    return (
        <Screen style={{ justifyContent: 'space-between' }}>
            <View>
                <View backgroundColor={'gray-500'} height={'45%'}></View>
                <View paddingHorizontal={'screen'} width='100%' style={{ paddingTop: '15%' }}>
                    <Text variant={'H_1'} paddingBottom='s'>Ready to hit the road</Text>
                    <Text variant={'P_1'}>Ready to hit the road</Text>
                    <View alignItems='center' width='100%' style={{ paddingTop: '30%' }}>
                        <Button variant={'primary'} label='Get Your Ticket' style={{ width: '65%' }} onPress={() => {
                            toggleModal()
                            console.log('pres')
                        }} />
                    </View>
                </View>
            </View>
            <Button variant={'text'} label="Are you an admin" onPress={() => { navigation.navigate('Login') }} />
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
                    <Text style={{ lineHeight: 24, fontSize: 24, letterSpacing: 3 }} variant={'P_1'} >Where would you like to go <Text variant={'H_1'}>Today</Text>?</Text>
                    <View backgroundColor={'whitegrey'} height="35%" justifyContent={'space-around'} paddingHorizontal='s' borderRadius={12}>
                        <Input control={control} name='startPoint' placeholder='From' />
                        <Input control={control} name='destination' placeholder='To' />
                    </View>
                    <Button variant={'primary'} label='Search' onPress={() => {
                        navigation.navigate('Tickets')
                        toggleModal()
                    }}></Button>
                </View>
            </Modal>
        </Screen>
    )
}

export default Home

const styles = StyleSheet.create({
    modal: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingHorizontal: 25,
        justifyContent: 'space-evenly'
    }
})