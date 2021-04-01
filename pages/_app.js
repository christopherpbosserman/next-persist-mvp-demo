import '../styles/globals.css';
import { AppWrapper } from '../context/state';
import Layout from '../components/Layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Layout>
        <Head>
          <title>most.js</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  );
}

export default MyApp;
