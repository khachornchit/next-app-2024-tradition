// src\pages\_app.tsx

import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../store';
import '../styles/globals.css';
import Layout from './layout'; // Adjust the import based on the actual path

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}

export default MyApp;
