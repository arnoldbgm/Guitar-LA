import Layout from '../components/layout';
import Image from 'next/image';
import error_404 from '../public/img/error_404.jpg';
import styles from '../styles/404.module.css';

const Pagina404 = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <div className={styles.contenedor}>
        <Image src={error_404} alt={'Ga'} className={styles.error} />
      </div>
    </Layout>
  );
};

export default Pagina404;
