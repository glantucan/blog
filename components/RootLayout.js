'use client';

import { ThemeProvider } from 'styled-components';
import { ConfigProvider } from 'antd';
import GlobalStyle from '../styles/GlobalStyle';
import theme, { antdTheme } from '../styles/theme';
import Header from './Header';
import Footer from './Footer';
import PageTransition from './PageTransition/PageTransition';

export default function RootLayout({ children, fontFamily }) {
  // Update antdTheme with font family
  const customAntdTheme = {
    ...antdTheme,
    token: {
      ...antdTheme.token,
      fontFamily,
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider theme={customAntdTheme}>
        <GlobalStyle />
        <Header />
        <main>
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
      </ConfigProvider>
    </ThemeProvider>
  );
}
