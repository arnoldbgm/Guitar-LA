import Link from 'next/link';
import Layout from '../components/layout';

const Nosotros = () => {
  return (
    <Layout title='Nosotros' description='Sobre nosotros GuitarLA'>
      <h1>Nosotros</h1>
      <Link href='/'>Al inicio</Link>
    </Layout>
  );
};

export default Nosotros;
