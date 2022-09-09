import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Text, View } from 'ui'
import { Slot, SlotProps } from './Slot'
const Slotsmodal = () => {

    const slots: any[] = [
        { start: '06:30 am', selected: false }, { start: '07:00 am', selected: false }, { start: '07:30 am', selected: false }, { start: '08:00 am', selected: false },
        { start: '08:30 am', selected: false }, { start: '09:00 am', selected: false }, { start: '09:30 am', selected: false }, { start: '09:30 am', selected: false },
        { start: '10:00 am', selected: false }, { start: '10:30 am', selected: false }, { start: '11:00 am', selected: false }, { start: '11:30 am', selected: false },
        { start: '12:00 pm', selected: false }, { start: '12:30 pm', selected: false }, { start: '13:00 pm', selected: false }, { start: '13:30 pm', selected: false },
        { start: '14:00 pm', selected: false }, { start: '14:30 pm', selected: false }, { start: '15:00 pm', selected: false }, { start: '15:30 pm', selected: false },
        { start: '16:00 pm', selected: false }, { start: '16:30 pm', selected: false }, { start: '17:00 pm', selected: false },

    ]

    return (
        <View justifyContent={'center'} alignItems='center'>
            <Text variant={'H_1'} marginBottom='m' mt='l'>Select Yout Slot</Text>
            <View style={{ paddingHorizontal: 24, marginBottom: 50 }}>

                <FlatList
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    numColumns={2}
                    data={slots}
                    renderItem={({ item, index, separators }) => (
                        <Slot selected={item.selected} start={item.start} />
                    )}
                    style={{ flex: 1, }}
                />

            </View>
        </View>
    )
}

export default Slotsmodal

