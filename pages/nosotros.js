import Image from 'next/image';
import Layout from '../components/layout';
import styles from '../styles/nosotros.module.css';

const Nosotros = () => {
  return (
    <Layout title='Nosotros' description='Sobre nosotros GuitarLA'>
      <main className='contenedor'>
        <h1 className='heading'>Nosotros</h1>
        <div>
          <div className={styles.contenido}>
            <Image
              src='/img/nosotros.jpg'
              width={1000}
              height={800}
              alt='Imagen de nosotros'
              className={styles.img}
            />
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at
                feugiat arcu, quis luctus ipsum. Proin ultrices leo ut tortor
                tincidunt tempus. Sed sed sem rutrum, interdum nisi non,
                sagittis ante. Nam in bibendum sapien, sed ullamcorper est. In
                sollicitudin.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at
                feugiat arcu, quis luctus ipsum. Proin ultrices leo ut tortor
                tincidunt tempus. Sed sed sem rutrum, interdum nisi non,
                sagittis.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
