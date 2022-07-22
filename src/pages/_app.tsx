import type { AppProps } from 'next/app';
import Head from 'next/head';

import Layout from '../components/Layout';
import GlobalStyles from '../globalStyles';

const AlbumApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Layout>
    <Head>
      <title>Pavlos Koutoglou</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Component {...pageProps} />
    <GlobalStyles />
  </Layout>
);

export default AlbumApp;
