import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import { lightTheme } from '../themes'
import {SWRConfig} from 'swr'
import { CartProvider, UiProvider } from '../components/context'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SWRConfig
            value={{
                fetcher:(resource,  init)=> fetch(resource, init).then(res => res.json())
            }}
        >
            <CartProvider>

                <UiProvider>

                    <ThemeProvider theme={ lightTheme}>
                        <Component {...pageProps}/>
                    </ThemeProvider>
                </UiProvider>
            </CartProvider>

        </SWRConfig>
    )
}


export default MyApp