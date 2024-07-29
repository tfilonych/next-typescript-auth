// eslint-disable-next-line react/no-unescaped-entities
import { verifySession } from './(auth)/session';

export default async function Home() {
  const session = await verifySession();

  return (
    <main>
      {session?.isAuth ? (
        <img src="/HiThere.png" alt="Please, log in" width="300px" />
      ) : (
        <img
          src="/Please_log_in_image.png"
          alt="Please, log in"
          width="300px"
        />
      )}
    </main>
  );
}
