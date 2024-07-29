// eslint-disable-next-line react/no-unescaped-entities
import Image from 'next/image';
import { verifySession } from './(auth)/session';

export default async function Home() {
  const session = await verifySession();

  return (
    <main>
      {session?.isAuth ? (
        <Image
          src="/HiThere.png"
          alt="Please, log in"
          width="200"
          height="200"
        />
      ) : (
        <Image
          src="/Please_log_in_image.png"
          alt="Please, log in"
          width="250"
          height="200"
        />
      )}
    </main>
  );
}
