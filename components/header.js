import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/header.module.css';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Link href='/'>
          <Image
            src={'/img/logo.svg'}
            width={300}
            height={40}
            alt='Logo de la Guitarra LA '
          />
        </Link>
        <nav className={styles.navegacion}>
          <Link
            href='/'
            className={router.pathname === '/' ? styles.activate : ''}
          >
            Inicio
          </Link>
          <Link
            href='/nosotros'
            className={router.pathname === '/nosotros' ? styles.activate : ''}
          >
            Nosotros
          </Link>
          <Link
            href='/blog'
            className={router.pathname === '/blog' ? styles.activate : ''}
          >
            Blog
          </Link>
          <Link
            href='/tienda'
            className={router.pathname === '/tienda' ? styles.activate : ''}
          >
            Tienda
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
