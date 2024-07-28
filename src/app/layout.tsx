import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './../styles/index.css';
import Header from './components/header/Header';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Auth in NextJS using actions',
  description:
    'Train layout and auth functionality for NextJS app with actions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
