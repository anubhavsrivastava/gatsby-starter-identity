import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PageFooter from '../components/PageFooter';

const IndexPage = () => (
  <Layout>
    <section id="main">
      <Header />
      <Footer />
    </section>
    <PageFooter />
  </Layout>
);

export default IndexPage;
