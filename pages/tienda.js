import Layout from '../components/layout';
import ListadoGuitarras from '../components/listadoGuitarras';
import styles from '../styles/grid.module.css';

const Tienda = ({ guitarras }) => {
  return (
    <Layout
      title='Tienda Virtual'
      description='Tienda virtual, venta de guitarras'
    >
      <main className='contenedor'>
        <h1 className='heading'>Nuestro Coleccion</h1>
        <div className={styles.grid}>
          {guitarras.map((guitarra) => {
            return (
              <ListadoGuitarras
                key={guitarra.id}
                guitarra={guitarra.attributes}
              />
            );
          })}
        </div>
      </main>
    </Layout>
  );
};

export default Tienda;

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://63a9cbce7d7edb3ae618648a.mockapi.io/Guitarras`
  );
  const guitarras = await res.json();

  // Pass data to the page via props
  return { props: { guitarras } };
}
