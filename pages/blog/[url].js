import Layout from '../../components/layout';
import Image from 'next/image';
import styles from '../../styles/blog.module.css';
import { useRouter } from 'next/router';
import Pagina404 from '../404';
const Post = ({ post }) => {
  const router = useRouter();
  const path = router.query.url;
  const postFinal = post.filter((pos) => pos.attributes.url === path);

  return (
    <>
      {postFinal.length > 0 ? (
        <Layout title={postFinal[0].attributes.titulo}>
          <article className={`${styles.post} ${styles['mt-3']}`}>
            <div className={styles.contenedor}>
              <Image
                src={
                  postFinal[0].attributes.imagen.data.attributes.formats.medium
                    .url
                }
                alt={postFinal[0].attributes.titulo}
                height={400}
                width={600}
                className={styles.imagen}
              />
            </div>
            <div className={styles.contenido}>
              <h3>{postFinal[0].attributes.titulo}</h3>
              <p className={styles.fecha}>
                {postFinal[0].attributes.publishedAt}
              </p>
              <p className={styles.texto}>
                {postFinal[0].attributes.contenido}
              </p>
            </div>
          </article>
        </Layout>
      ) : (
        <Pagina404 />
      )}
    </>
  );
};

export default Post;

export async function getServerSideProps() {
  const response = await fetch(
    `https://63a9cbce7d7edb3ae618648a.mockapi.io/Post`
  );
  const post = await response.json();
  return {
    props: {
      post,
    },
  };
}
