import { DefaultTheme } from "styled-components/native"

export type AppTheme = {
    colors: {
        bg: string,
        txt: {
            p: string,
            s: string
        },
        btn: string,
        err: string,
        dsb: string
    }
}

export const theme: DefaultTheme = {
    colors: {
        bg: '#FFFFFF',
        txt: {
            p: '#000000',
            s: '#FFFFFF'
        },
        btn: '#86D3FF',
        err: '#CC0000',
        dsb: '#D3D3D3',
    }
}