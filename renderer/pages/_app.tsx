import { AppProps } from 'next/app';
import '../public/css/styles.css';
import { AuthProvider } from '../context/auth';
import { UIProvider } from '../context/ui';
import { SessionProvider } from 'next-auth/react';
import { SWRConfig } from 'swr';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SessionProvider>
            <SWRConfig
                value={{
                    fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
                }}>
                <AuthProvider>
                    <UIProvider>
                        <Component {...pageProps} />
                    </UIProvider>
                </AuthProvider>
            </SWRConfig>
        </SessionProvider>
    )
}
