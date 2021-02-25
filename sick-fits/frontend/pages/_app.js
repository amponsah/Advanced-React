import { ApolloProvider } from '@apollo/client';
import Page from '../components/Page';
import withData from '../lib/withData';

import '../styles/antd.less';

const MyApp = ({ Component, pageProps, apollo }) => (
  <ApolloProvider client={apollo}>
    <Page>
      <Component {...pageProps} />
    </Page>
  </ApolloProvider>
);

MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps)
    pageProps = await Component.getInitialProps(ctx);
  return { pageProps };
};

export default withData(MyApp);
