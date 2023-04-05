<<<<<<< HEAD
import { AppProps } from 'next/app';
import '../public/css/styles.css';
import "../public/css/Layout.css";
=======
import { AppProps } from 'next/app'
import '../public/css/styles.css'
import { UIProvider } from '../context/ui'
import { AuthProvider } from '../context/auth'
>>>>>>> 3bc7ec50fefc4f51acc70664857c9fd8e810e793

export default function MyApp({ Component, pageProps }: AppProps) {

    return (
        <AuthProvider>
            <UIProvider>
                <Component {...pageProps} />
            </UIProvider>
        </AuthProvider>
    )
}
