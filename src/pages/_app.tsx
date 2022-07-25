import type { AppProps } from 'next/app';

// Import components
import Layout from '../components/Layout';
import CustomHead from '../components/Head';

// Import styles
import GlobalStyles from '../globalStyles';

// Import store
import { Store } from '../state/store';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Store>
    <Layout>
      <CustomHead />
      <Component {...pageProps} />
      <GlobalStyles />
    </Layout>
  </Store>
);

export default App;
