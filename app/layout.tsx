import './globals.css';

export const metadata = {
  title: 'Splitter | Luis Cervantes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='shortcut icon' href='/favicon.png' />
      </head>
      <body>{children}</body>
    </html>
  );
}
