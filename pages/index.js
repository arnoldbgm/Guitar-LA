import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';
import Post from '../components/post';
import ListadoGuitarras from '../components/listadoGuitarras';
import styles from '../styles/grid.module.css';
import Curso from '../components/curso';
function Home({ posts, guitarras, cursos }) {
  return (
    <>
      <Layout
        title={'Inicio'}
        description={'Blog de musica, tienda de guitarras'}
      >
        {/* Ventas */}
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
        {/* Curso */}
        <Curso cursos={cursos}/>
        {/* Posts */}
        <main className='contenedor'>
          <h1 className='heading'>Blog</h1>
          <div className={styles.grid}>
            {posts?.map((post) => (
              <Post key={post.id} post={post.attributes} />
            ))}
          </div>
        </main>
      </Layout>
    </>
  );
}

export default Home;

export async function getStaticProps() {
  const respuesta = await fetch(
    `https://63a9cbce7d7edb3ae618648a.mockapi.io/Post`
  );
  const posts = await respuesta.json();

  const res = await fetch(
    `https://63a9cbce7d7edb3ae618648a.mockapi.io/Guitarras`
  );
  const guitarras = await res.json();
  const resp = await fetch(
    `https://63a9cbce7d7edb3ae618648a.mockapi.io/Cursos`
  );
  const cursos = await resp.json();
  return {
    props: {
      posts,
      guitarras,
      cursos
    },
  };
}
