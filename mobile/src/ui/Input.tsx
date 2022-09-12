import React from 'react'
import { TextInput, TextInputProps, StyleSheet } from 'react-native';
import { Control, Path, RegisterOptions, useController } from "react-hook-form"
import { Text } from './Text'
import { View } from './View';
import { useTheme } from './theme';
import Icon from 'react-native-vector-icons/Ionicons'


Icon.loadFont()

type TRule = Omit<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
export type RuleType<T> = { [name in keyof T]: TRule };
export type InputContollerType<T> = {
    name: Path<T>;
    control: Control<T>;
    rules?: TRule;
    icon?: string;
    color?: string;
    actionIcon?: string;
    onPressIcon?: () => void;

};

interface Props<T> extends TextInputProps, InputContollerType<T> {
    disabled?: boolean;
    label?: string;
}
export function Input<T>(props: Props<T>) {
    const { label, name, control, icon, color, actionIcon, onPressIcon, style, rules, ...inputProps } = props
    const { colors } = useTheme()
    const { field, fieldState } = useController({ control, name, rules });
    const [isFocussed, setIsFocussed] = React.useState(false);
    const onBlur = () => setIsFocussed(false);
    const onFocus = () => setIsFocussed(true);

    const borderColor = fieldState.invalid
        ? colors.error
        : isFocussed
            ? colors.primary
            : colors['gray-500'];

    return (
        <View key={`input-${name}`}
            style={[
                styles.input,
                {
                    borderColor,
                },
                style,
            ]}>
            {label && (
                <Text
                    variant="label"
                    color={
                        fieldState.invalid ? 'error' : 'darkgrey'
                    }
                >
                    {label}
                </Text>
            )}
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                {icon && (
                    <Icon
                        name={icon}
                        size={20}
                        color={color}
                        style={{ marginRight: 14 }}
                    />
                )}
                <TextInput
                    placeholderTextColor={colors['gray-500']}
                    style={[
                        styles.inputStyle,
                        { width: actionIcon ? '80%' : '87%' },
                    ]}
                    autoCapitalize="none"
                    onChangeText={field.onChange}
                    value={field.value as string}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    {...inputProps}
                />
                {actionIcon && (
                    <Icon
                        name={actionIcon}
                        size={20}
                        onPress={onPressIcon}
                        color={color}
                    />
                )}
            </View>
            {fieldState.error && (
                <Text fontSize={12}
                    color="error"
                    variant={'Error'}
                >
                    {fieldState.error.message}
                </Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#F3F3F3',
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 1,
        marginBottom: 4,
        padding: 15,
        fontSize: 16,
        borderRadius: 13,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'

    },
    inputStyle: {
        fontSize: 14,
        height: '100%',
        fontFamily: 'Roboto-Regular',
        fontWeight: '600',
        color: 'black',
    },
}); 2