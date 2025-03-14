import { Playwrite_DE_Grund } from 'next/font/google';
import StyledComponentsRegistry from '../lib/registry';
import RootLayout from '../components/RootLayout';
import '../styles/globals.css';

const playwrite = Playwrite_DE_Grund({ subsets: ['latin'], weight: ['100', '400'] });

export const metadata = {
  title: 'Photography Blog',
  description: 'A beautiful blog showcasing photography',
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={playwrite.className}>
        <StyledComponentsRegistry>
          <RootLayout fontFamily={playwrite.style.fontFamily}>{children}</RootLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
