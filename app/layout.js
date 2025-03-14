import { Inter } from 'next/font/google';
import StyledComponentsRegistry from '../lib/registry';
import RootLayout from '../components/RootLayout';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Photography Blog',
  description: 'A beautiful blog showcasing photography',
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <RootLayout fontFamily={inter.style.fontFamily}>
            {children}
          </RootLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
