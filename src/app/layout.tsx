import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import StyledComponentsRegistry from '@/app/lib/registry';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Auth in NextJS + style-components',
  description:
    'Train layout and auth functionality for NextJS app + style-components',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
