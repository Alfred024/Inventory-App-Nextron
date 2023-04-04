import { AppProps } from 'next/app';
import '../public/css/styles.css';
import "../public/css/Layout.css";

export default function MyApp({ Component, pageProps }: AppProps) {

    return (
        <Component {...pageProps} />
    )
}
