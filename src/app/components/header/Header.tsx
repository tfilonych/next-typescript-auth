// eslint-disable-next-line react/no-unescaped-entities
import Link from 'next/link';
import styles from './header.module.css';
import { verifySession, deleteSession } from '@/app/(auth)/session';
import Button from '../ui/button/Button';

const Header = async () => {
  const session = await verifySession();

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        LOGO
      </Link>
      <nav>
        {session?.isAuth ? (
          <form action={deleteSession} method="POST">
            <Button type="submit" className={styles.button}>
              Sign Out
            </Button>
          </form>
        ) : (
          <Link className={styles.button} href="/login">
            <Button type="submit" className={styles.button}>
              Log In
            </Button>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
