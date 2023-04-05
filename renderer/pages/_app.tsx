import { AppProps } from 'next/app';
import '../public/css/styles.css';
import "../public/css/Layout.css";
import { AuthProvider } from '../context/auth';
import { UIProvider } from '../context/ui';

export default function MyApp({ Component, pageProps }: AppProps) {

    return (
        <AuthProvider>
            <UIProvider>
                <Component {...pageProps} />
            </UIProvider>
        </AuthProvider>
    ) 
}
