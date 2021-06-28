import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from './Nav';
import Footer from './Footer';

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Nav />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
