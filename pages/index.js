import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';

function Home() {
  return (
    <>
      <Layout
        title={'Inicio'}
        description={'Blog de musica, tienda de guitarras'}
      >
        <h1>Hola mundio</h1>
        <Link href='/nosotros'>PASDKAS</Link>
      </Layout>
    </>
  );
}

export default Home;
