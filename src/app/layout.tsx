/* eslint-disable @next/next/no-page-custom-font */
import { AppProvider } from './provider';

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en-US'>
      <head>
        <link
          href='https://fonts.googleapis.com/css2?family=Quicksand:wght@200;300;400;500;600;700;800&display=swap'
          rel='stylesheet'
        />
      </head>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
