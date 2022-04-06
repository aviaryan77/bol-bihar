import React from 'react';
import { Header, Meta } from './';
import Header2 from './Header2';
import Footer from './Footer';

function Layout(props) {
  return (
    <>
      <Meta />
      {/* <Header2 /> */}
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;
