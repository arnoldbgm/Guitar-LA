import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/guitarras.module.css';
import Layout from '../../components/layout';
import Pagina404 from '../404';
import { useState } from 'react';
import Swal from 'sweetalert2';

const Producto = ({
  guitarras,
  agregarCarrito,
  eliminarProducto,
  actualizarCantidad,
}) => {
  const [cantidad, setCantidad] = useState(0);
  const router = useRouter();
  const path = router.query.url;
  const guitarrasFinal = guitarras.filter(
    (guitarra) => guitarra.attributes.url === path
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cantidad < 1) {
      Swal.fire('Debes de escoger una cantidad valida');
      return;
    }

    console.log(guitarrasFinal);

    const guitarrasSeleccionadas = {
      id: guitarrasFinal[0].id,
      imagen:
        guitarrasFinal[0].attributes.imagen.data.attributes.formats.medium.url,
      nombre: guitarrasFinal[0].attributes.nombre,
      precio: guitarrasFinal[0].attributes.precio,
      cantidad,
    };
    agregarCarrito(guitarrasSeleccionadas);
  };

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

              <form className={styles.formulario} onSubmit={handleSubmit}>
                <label htmlFor='cantidad'>Cantidad: </label>
                <select
                  id='cantidad'
                  onChange={(e) => setCantidad(parseInt(e.target.value))}
                >
                  <option value={0}>--Seleccione--</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
                <input type='submit' value='Agregar al carrito' />
              </form>
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
