import React from 'react'
import {
    ThemeProvider as ReThemeProvider,
    TextProps,
    BoxProps,
    useTheme as useRTheme,
    backgroundColor,
} from "@shopify/restyle"

type ThemeTypes = typeof BaseTheme & {
    textVariants: { [key: string]: TextProps<typeof BaseTheme> };
    navigation: any;
    buttonVariants: { [key: string]: BoxProps<typeof BaseTheme> }
}

const createTheme = <T extends ThemeTypes>(themeObject: T) => themeObject;

const BaseTheme = {
    colors: {
        'black': '#0d0e0e',
        'white': '#FFFFFF',
        'whitegrey': '#dee3f1',
        'darkgrey': '#72788a',
        'primary': '#ec8c85',
        'whitesmoke': '#d4e4f2',
        'darkprimary': '#cd827e',
        'error': 'red',
        'gray-500': '#A0AEC0'
    },
    spacing: {
        noSpace: 0,
        xxxxs: 4,
        xxxs: 8,
        xxs: 12,
        xs: 16,
        s: 18,
        m: 20,
        l: 24,
        xl: 30,
        xxl: 34,
        xxxl: 40,
        screen: 28,
    },
    breakpoints: {
        phone: 0,
        tablet: 768,
    },

}

export const theme = createTheme({
    ...BaseTheme,
    textVariants: {
        default: {},
        'H_1': {
            fontFamily: 'Roboto-Regular',
            fontWeight: '700',
            fontSize: 24,
            lineHeight: 24,

        },
        'H_2': {
            fontFamily: 'Roboto-Regular',
            fontWeight: 'bold',
            fontSize: 20,
            lineHeight: 24,

        },
        'H_2_White': {
            fontFamily: 'Roboto-Regular',
            fontWeight: '900',
            fontSize: 22,
            lineHeight: 24,
            color: 'white'

        },
        'H_3': {
            fontFamily: 'Roboto-Regular',
            fontWeight: '600',
            fontSize: 14,
            lineHeight: 16,

        },
        'H_3_White': {
            fontFamily: 'Roboto-Regular',
            fontWeight: '600',
            fontSize: 14,
            lineHeight: 16,
            color: 'white'
        },
        'P_1': {
            fontFamily: 'Roboto-Regular',
            fontWeight: '400',
            fontSize: 18,
            lineHeight: 19.6,
            letterSpacing: 0,
        },
        'Time': {
            fontFamily: 'Roboto-Regular',
            fontWeight: '500',
            fontSize: 14,
            lineHeight: 19.6,
            letterSpacing: 0,
        },
        label: {
            fontFamily: 'Roboto-Regular',
            fontWeight: '400',
            fontSize: 14,
            lineHeight: 19.6,
            letterSpacing: 0,

        },


        primary_label: {
            fontFamily: 'Roboto-Regular',
            fontWeight: '600',
            fontSize: 16,
            lineHeight: 19.6,
            letterSpacing: 0,
            color: 'white'
        },
        icon_label: {},
        text_label: {
            fontFamily: 'Roboto-Regular',
            fontWeight: '800',
            fontSize: 16,
            lineHeight: 20,
            color: 'primary',

        }
    },
    navigation: undefined,
    buttonVariants: {
        defaults: {},
        primary: {
            width: '100%',
            backgroundColor: 'black',
            borderRadius: 16,
            height: 56,
        },
        icon: {
            width: 44,
            backgroundColor: 'primary',
            borderRadius: 16,
            height: 44,
        },
        text: {
            width: 'auto',

            height: 44
        }
    }
})

export type Theme = typeof theme;

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ReThemeProvider theme={theme}>
            {children}
        </ReThemeProvider>
    )
}
export const useTheme = () => useRTheme<Theme>();