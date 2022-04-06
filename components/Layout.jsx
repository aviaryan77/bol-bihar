import React from 'react';
import { Header } from './';
import Header2 from './Header2';
import Footer from './Footer';

function Layout(props) {
  return (
    <>
      {/* <Header2 /> */}
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;
