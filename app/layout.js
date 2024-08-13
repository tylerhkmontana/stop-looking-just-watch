import { Inter } from 'next/font/google';
import './globals.scss';
import { ThemeProvider } from '@/context/theme';
import Nav from '@/components/nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>ChipsOnCouch</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nabla&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-icon" href="/icons/chips.svg" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
