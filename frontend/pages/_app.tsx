import { AppProps } from 'next/app';
import 'styles/index.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
};

export default MyApp;
