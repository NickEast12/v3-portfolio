import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/functional/SEO';
import Landing from '../components/pageComponents/Landing';
import About from '../components/pageComponents/About';
import Experience from '../components/pageComponents/Experience';
import Work from '../components/pageComponents/Work';
import CTA from '../components/CTA';
import MetaImg from '../assets/images/meta-img.png';

const index = () => {
  const i = true;
  return (
    <Layout>
      <SEO
        title="Nick East | Front-end Developer"
        description="Nick East is a UX/UI Designer and Front-end developer specialising in designing and creating functional interfaces and exceptional digital experiences."
        img={MetaImg}
      />
      <Landing />
      <About />
      <Experience />
      <Work />
      <CTA />
      {/* <Blog /> */}
    </Layout>
  );
};

export default index;
