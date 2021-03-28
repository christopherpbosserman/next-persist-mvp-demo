import '../styles/globals.css';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps, data }) {
  // console.log('Component: ', Component);
  // console.log('pageProps', pageProps);
  // console.log('data', data);
  const getInitialProps = async (context) => {
    const res = await fetch('https://fakestoreapi.com/products?limit=1');
    const data = await res.json();
    console.log('data', data);

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: { data }, // will be passed to the page component as props
    };
  };

  // const dataProp = getInitialProps();

  return (
    <Layout>
      <Component {...pageProps} state={getInitialProps()} />
    </Layout>
  );
}

export default MyApp;
