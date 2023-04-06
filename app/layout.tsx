import ContextProvider from './components/context/ContextProvider';
import './globals.css';
import { Space_Mono } from 'next/font/google';

export const metadata = {
  title: 'Splitter | Luis Cervantes',
};

const spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='bg-blue-200'>
      <head>
        <link rel='shortcut icon' href='/favicon.png' />
      </head>
      <ContextProvider>
        <body className={spaceMono.className}>{children}</body>
      </ContextProvider>
    </html>
  );
}
