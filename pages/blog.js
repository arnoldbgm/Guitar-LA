import Layout from '../components/layout';
import Post from '../components/post';
import styles from '../styles/grid.module.css';

const Blog = ({ posts }) => {
  return (
    <Layout title='Blog' description='Blog de Guitar-LA'>
      <main className='contenedor'>
        <h1 className='heading'>Blog</h1>
        <div className={styles.grid}>
          {posts?.map((post) => (
            <Post key={post.id} post={post.attributes} />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default Blog;

export async function getStaticProps() {
  const respuesta = await fetch(
    `https://63a9cbce7d7edb3ae618648a.mockapi.io/Post`
  );
  const posts = await respuesta.json();

  return {
    props: {
      posts,
    },
  };
}
