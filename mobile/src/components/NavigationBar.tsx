import { StyleSheet } from 'react-native';
import { View, Text } from 'ui';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

Icon.loadFont();
export type TopBarProps = {
    style?: any;
    addBackButton?: boolean;
    backButtonStyles?: any;

    title?: string;
    rightButtonIcon?: React.ReactNode;
    rightButtonOnPress?: () => void;
};
const NavigationBar = (props: TopBarProps) => {
    const { style, addBackButton, title, rightButtonIcon, backButtonStyles } =
        props;
    const navigation = useNavigation();

    return (
        <View style={[styles.container, style && style]} height={48}>
            <View style={{ width: 80 }}>
                {addBackButton && (
                    <TouchableHighlight
                        underlayColor={'#fff'}
                        onPress={() => navigation.goBack()}
                        style={[styles.backButton, backButtonStyles]}>
                        <Icon name="chevron-back-outline" size={20} color="black" />
                    </TouchableHighlight>
                )}
            </View>
            <View style={styles.titleContainer}>
                {title && <Text variant='H_2'>{title}</Text>}
            </View>
            <View
                style={{
                    width: 80,
                    alignItems: 'flex-end',
                }}>
                {rightButtonIcon}
            </View>
        </View>
    );
};

export default NavigationBar;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 12,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    titleContainer: {
        alignItems: 'center',
    },
    rightButton: {
        // width: 80,
        height: 40,
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFFFFF',
    },
});
