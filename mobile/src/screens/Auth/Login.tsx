import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Screen, View, Input, Button, Text } from "ui";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import NavigationBar from "components/NavigationBar";
import { LoginImage } from "../../../assets/images";
import { Image } from "react-native";
type LoginProps = {
    navigation: any;
}
type FormData = {
    email?: string;
    password?: string;
}

const schema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
});
export const LoginScreen = (props: LoginProps) => {
    const { navigation } = props

    const [showPassword, setShowPassword] = useState<boolean>(true);
    const { handleSubmit, control } = useForm<FormData>({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data: FormData) => {
        console.log(data);
    };
    const handlePassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <Screen >
            <NavigationBar addBackButton style={{ paddingLeft: 24 }} />
            <View backgroundColor={'gray-500'} height={'35%'}>
                <Image
                    style={{ width: '100%', height: '100%', }}
                    source={LoginImage}
                />
            </View>
            <View paddingHorizontal={'screen'} mt='m'>
                <View alignItems={'flex-end'}>
                    <Input
                        style={{ marginBottom: 20 }}
                        control={control}
                        name="email"
                        placeholder="Email"
                        icon="mail-outline"
                    />
                    <Input
                        control={control}
                        name="password"
                        placeholder="Password"
                        secureTextEntry={showPassword}
                        icon="lock-closed-outline"
                        actionIcon={
                            showPassword === false ? 'eye-outline' : 'eye-off-outline'
                        }
                        onPressIcon={handlePassword}
                    />
                    <Button variant={'text'} label="Forgot Password" ></Button>

                    <Button variant={'primary'} label="Log In" marginTop={'xxxl'} onPress={() => {
                        navigation.navigate('Home', {
                            screen: 'home',
                        });
                    }}></Button>
                </View>
                <View flexDirection={'row'} alignItems='center' marginTop={'xxxl'} justifyContent='center'>
                    <Text variant={'P_1'}> Don't have an account</Text>
                    <Button variant='text' label="Register here" marginLeft={'xxxxs'} onPress={() => {
                        navigation.navigate('register')
                    }}></Button>
                </View>
            </View>
        </Screen>
    )
}