import { Image, StyleSheet } from 'react-native';
import React, { FC } from 'react';
import { Text, View } from 'ui';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/Ionicons"

Icon.loadFont()
type TicketsCardProps = {
    style?: any;
    time: string;
    id?: number;
    onPress?: () => void;

};

const TicketsCard: FC<TicketsCardProps> = props => {
    const { style, time, onPress, } =
        props;
    return (
        <TouchableHighlight
            onPress={onPress}
            underlayColor={''}
            style={[styles.container, style]}>
            <View
                backgroundColor='white'
                flexDirection={'row'}
                borderRadius={12}
                overflow={'hidden'}
                height={110}>
                <View padding={'s'} width={'67%'} flexDirection='row' justifyContent='space-between' height='100%' alignItems={'center'}>
                    <View justifyContent='space-around' height='100%'>
                        <View flexDirection={'row'}>
                            <Text variant='P_1' mr='xxxxs'>15:00</Text>
                            <Text variant='P_1' >
                                Vlore
                            </Text>
                        </View>

                        <View flexDirection={'row'}>
                            <Text variant='P_1' mr='xxxxs'>17:30</Text>
                            <Text variant='P_1' >
                                Tirane
                            </Text>
                        </View>
                    </View>
                    <View backgroundColor={'primary'} width={60} height={60} borderRadius={15} justifyContent='center' alignItems={'center'}>
                        <Text variant={'Time'}> 500 All</Text>
                    </View>

                </View>
                <View
                    width={0}
                    position={'relative'}
                    borderStyle={'dashed'}
                    borderWidth={1}
                    borderColor='whitegrey'
                >
                    <View
                        width={16}
                        aspectRatio={1}
                        backgroundColor='whitegrey'
                        top={-8}
                        left={-8}
                        position={'absolute'}
                        borderRadius={100}
                    />
                    <View
                        width={16}
                        aspectRatio={1}
                        backgroundColor='whitegrey'
                        bottom={-8}
                        left={-8}
                        position={'absolute'}
                        borderRadius={100}
                    />
                </View>
                <View
                    padding={'s'}
                    flex={1}
                    justifyContent={'space-around'}
                    alignItems={'flex-start'}>
                    <View flexDirection={'row'} alignItems='center'>
                        <Icon name='pin' size={20} />
                        <Text variant={'Time'}>
                            12km
                        </Text>
                    </View>
                    <View flexDirection={'row'} alignItems='center'>
                        <Icon name='time-outline' size={20} />
                        <Text variant={'Time'}>
                            2h 30min
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    );
};

export default TicketsCard;

const styles = StyleSheet.create({
    container: {},
});
