import React from 'react'
import {
    ThemeProvider as ReThemeProvider,
    TextProps,
    BoxProps,
    useTheme as useRTheme,
} from "@shopify/restyle"

type ThemeTypes = typeof BaseTheme & {
    textVariants: { [key: string]: TextProps<typeof BaseTheme> };
    navigation: any;
    buttonVariants: { [key: string]: BoxProps<typeof BaseTheme> }
}

const createTheme = <T extends ThemeTypes>(themeObject: T) => themeObject;

const BaseTheme = {
    colors: {

    },
    spacing: {

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
        header: {}
    },
    navigation: undefined,
    buttonVariants: {
        defaults: {},
        primary: {},
        secondary: {}
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