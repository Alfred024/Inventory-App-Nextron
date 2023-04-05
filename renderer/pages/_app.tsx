import { AppProps } from 'next/app'
import '../public/css/styles.css'
import { UIProvider } from '../context/ui'
import { AuthProvider } from '../context/auth'

export default function MyApp({ Component, pageProps }: AppProps) {

    return (
        <AuthProvider>
            <UIProvider>
                <Component {...pageProps} />
            </UIProvider>
        </AuthProvider>
    )
}
