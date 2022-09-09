import { Button, Input, Screen, Text, View } from "ui";
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import NavigationBar from "components/NavigationBar";

type Props = {
    navigation?: any;

}
type FormData = {
    email?: string;
    licenceNumber?: string;
    fullname?: string
    password?: string;
    confirmPassWord?: string
}

const schema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
    licenceNumber: yup.string().required(),
    fullname: yup.string().required(),
    confirmPassWord: yup.string().required().min(6),
}
);

export const RegisterScreen = (props: Props) => {
    const { navigation } = props
    const [showPassword, setShowPassword] = useState<boolean>(true);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(true);
    const { handleSubmit, control } = useForm<FormData>({
        resolver: yupResolver(schema),
    });
    const handlePassword = () => {
        setShowPassword(!showPassword);
    };
    const handleConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };
    return (
        <Screen >
            <NavigationBar addBackButton style={{ paddingLeft: 24 }} />
            <View width={'100%'} height={200}></View>
            <View paddingHorizontal='screen'>
                <Text variant={'H_1'} marginBottom={'xxxl'}> Register</Text>
                <Input
                    style={{ marginBottom: 10 }}
                    control={control}
                    name="fullname"
                    placeholder="Full Name"
                    icon="person-outline"
                />
                <Input
                    style={{ marginBottom: 10 }}
                    control={control}
                    name="email"
                    placeholder="Email"
                    icon="mail-outline"
                />
                <Input
                    style={{ marginBottom: 10 }}
                    control={control}
                    name="licenceNumber"
                    placeholder="Licence Number"
                    icon="reader-outline"
                />
                <Input
                    control={control}
                    style={{ marginBottom: 10 }}
                    name="password"
                    placeholder="Password"
                    secureTextEntry={showPassword}
                    icon="lock-closed-outline"
                    actionIcon={
                        showPassword === false ? 'eye-outline' : 'eye-off-outline'
                    }
                    onPressIcon={handlePassword}
                />
                <Input
                    control={control}
                    style={{ marginBottom: 30 }}
                    name="confirmPassWord"
                    placeholder="Confirm Password"
                    secureTextEntry={showConfirmPassword}
                    icon="lock-closed-outline"
                    actionIcon={
                        showPassword === false ? 'eye-outline' : 'eye-off-outline'
                    }
                    onPressIcon={handleConfirmPassword}
                />
                <Button label="Register" variant={'primary'} onPress={() => {
                    navigation.navigate('Home', {
                        screen: 'home',
                    });
                }}></Button>
            </View>
        </Screen >
    )

}