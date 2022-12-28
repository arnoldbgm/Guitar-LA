import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/guitarras.module.css';
import Layout from '../../components/layout';
import Pagina404 from '../404';

const Producto = ({ guitarras }) => {
  const router = useRouter();
  const path = router.query.url;
  const guitarrasFinal = guitarras.filter(
    (guitarra) => guitarra.attributes.url === path
  );
  return (
    <>
      {guitarrasFinal.length > 0 ? (
        <Layout title={`Guitarra ${guitarrasFinal[0].attributes.nombre}`}>
          <div className={styles.guitarra}>
            <Image
              src={
                guitarrasFinal[0].attributes.imagen.data.attributes.formats
                  .medium.url
              }
              alt={guitarrasFinal[0].attributes.nombre}
              height={400}
              width={600}
            />
            <div className={styles.contenido}>
              <h3>{guitarrasFinal[0].attributes.nombre}</h3>
              <p className={styles.descripcion}>
                {guitarrasFinal[0].attributes.descripcion}
              </p>
              <p className={styles.precio}>
                ${guitarrasFinal[0].attributes.precio}
              </p>
            </div>
          </div>
        </Layout>
      ) : (
        <Pagina404 />
      )}
    </>
  );
};

export default Producto;

export async function getServerSideProps() {
  const response = await fetch(
    `https://63a9cbce7d7edb3ae618648a.mockapi.io/Guitarras`
  );
  const guitarras = await response.json();
  return {
    props: {
      guitarras,
    },
  };
}
