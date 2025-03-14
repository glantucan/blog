import { Inter } from 'next/font/google';
import StyledComponentsRegistry from '../lib/registry';
import { ThemeProvider } from 'styled-components';
import { ConfigProvider } from 'antd';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

const antdTheme = {
  token: {
    colorPrimary: theme.colors.primary,
    fontFamily: inter.style.fontFamily,
  },
};

export const metadata = {
  title: 'Photography Blog',
  description: 'A beautiful blog showcasing photography',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <ConfigProvider theme={antdTheme}>
              <GlobalStyle />
              <Header />
              <main>{children}</main>
              <Footer />
            </ConfigProvider>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
