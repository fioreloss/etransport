import { Pressable, StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'
import { View, Text } from 'ui'
import { backgroundColor, border, composeRestyleFunctions, createVariant, VariantProps, SpacingProps, ColorProps, spacing, useRestyle } from '@shopify/restyle'
import Icon from 'react-native-vector-icons/Ionicons'
import { Theme } from './theme';
Icon.loadFont()

const buttonVariant = createVariant({ themeKey: 'buttonVariants' });

type RestyleProps = SpacingProps<Theme> &
    ColorProps<Theme>;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
    buttonVariant as any,
    spacing,
    border,
    backgroundColor,
]);

type Props = SpacingProps<Theme> &
    VariantProps<Theme, 'buttonVariants'> & {
        style?: any;
        onPress?: () => void,
        icon?: React.ReactNode,
        label?: string,
        price?: string,
        variant?: string,
        backgroundColor?: string,
    };

export const Button = ({
    icon,
    label,
    price,
    variant,
    onPress,
    ...rest
}: Props) => {
    const props = useRestyle(restyleFunctions, { ...rest, variant });
    const textVariant = variant + '_label';

    return (
        <Pressable
            {...props}

            onPress={onPress}
        >
            <View
                height='100%' flexDirection='row' justifyContent='center' alignItems='center'
            >
                {icon && <View flexDirection='row' justifyContent='center' alignItems='center'>{icon}</View>}
                {label &&
                    <Text
                        variant={textVariant as Partial<keyof Theme['textVariants']>}
                    >
                        {label}
                    </Text>}

            </View>
        </Pressable>
    )
}