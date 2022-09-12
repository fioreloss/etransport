import { StyleSheet, } from 'react-native'
import React, { useState } from 'react'
import { Text, View, Input, Button } from 'ui'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import MultiSelect from 'react-native-multiple-select';
import { useNavigation } from '@react-navigation/native';
type FormData = {
    busPlate?: string
    shasi?: string
    busSeats?: number
}
const schema = yup.object().shape({
    busPlate: yup.string().required(),
    shasi: yup.string().required(),
    busSeats: yup.number().required()
});
const AddBus = (props: any) => {
    const navigation = useNavigation()
    const [road, setRoad] = useState<any>()
    const [type, setType] = useState<any>()
    const { handleSubmit, control } = useForm<FormData>({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data: FormData) => {
        console.log(data);
        props.onClose()
    };
    const Cites = [
        {
            id: '1',
            name: 'Tirane'
        },
        {
            id: '2',
            name: 'Vlore'
        }, {
            id: '3',
            name: 'Fier'
        },
        {
            id: '4',
            name: 'Sarande'
        }, {
            id: '5',
            name: 'Gjirokaster'
        },
        {
            id: '6',
            name: 'Shkoder'
        }, {
            id: '7',
            name: 'Lushnje'
        }, {
            id: '8',
            name: 'Kukes'
        }, {
            id: '9',
            name: 'Lac'
        }, {
            id: '10',
            name: 'Berat'
        }, {
            id: '11',
            name: 'Korce'
        }, {
            id: '12',
            name: 'Elbasan'
        }
    ]
    const types = [{
        id: 'minibus',
        name: 'MiniBus'
    }, {
        id: "bus",
        name: 'Full bus'
    }]
    return (
        <View paddingHorizontal={'screen'} width='100%'>
            <Input
                style={{ marginBottom: 15 }}
                control={control}
                name="busPlate"
                placeholder="Bus Plate"

            />
            <Input
                style={{ marginBottom: 30 }}
                control={control}
                name="shasi"
                placeholder="Shasi"


            />
            <MultiSelect
                items={types}
                onSelectedItemsChange={item => setType(item)}
                uniqueKey="id"
                selectedItems={type}
                single
                selectText={'Bus Type'}
                styleInputGroup={{
                    paddingRight: 20,
                    borderRadius: 14,
                    borderColor: '#246cf9',
                    borderWidth: 1,
                }}
                styleDropdownMenuSubsection={{
                    paddingLeft: 20,
                    paddingVertical: 20,
                    borderRadius: 14,
                    borderColor: 'grey',
                    borderWidth: 1,
                    height: 55,

                    marginBottom: 30,
                    backgroundColor: '#f2f2f2',
                }}
                styleItemsContainer={{ borderRadius: 14, }}
            />
            <MultiSelect
                items={Cites}
                onSelectedItemsChange={item => setRoad(item)}
                uniqueKey="id"
                selectedItems={road}
                single
                selectText={'Select Road'}
                styleInputGroup={{
                    paddingRight: 20,
                    borderRadius: 14,
                    borderColor: '#246cf9',
                    borderWidth: 1,
                }}
                styleDropdownMenuSubsection={{
                    paddingLeft: 20,
                    paddingVertical: 20,
                    borderRadius: 14,
                    borderColor: 'grey',
                    borderWidth: 1,
                    height: 55,
                    marginTop: 35,
                    marginBottom: 45,
                    backgroundColor: '#f2f2f2',
                }}
                styleItemsContainer={{ borderRadius: 14 }}
            />

            <Input
                style={{ marginBottom: 30 }}
                control={control}
                name="busSeats"
                placeholder="Bus Seats"


            />
            <Button label='Add Bus' variant={'primary'} onPress={handleSubmit(onSubmit)} style={{ width: '60%' }} />
        </View>
    )
}

export default AddBus

const styles = StyleSheet.create({})