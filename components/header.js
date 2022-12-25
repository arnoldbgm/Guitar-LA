import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className='contenedor'>
        <Image
          src={'img/logo.svg'}
          width={300}
          height={40}
          alt='Logo de la Guitarra LA '
        />
        <nav>
          <Link href='/'>Inicio</Link>
          <Link href='/nosotros'>Nosotros</Link>
          <Link href='/blog'>Blog</Link>
          <Link href='/tienda'>Tienda</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
