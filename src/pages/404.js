import React from 'react';
import styled from 'styled-components';
import { Gradient } from 'react-gradient';

import Layout from '../components/Layout';

const NotFoundStyles = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  .react-gradient {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -5;
  }
  .error {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    h1 {
      font-weight: 700;
      font-size: 4rem;
      color: #fff;
      text-align: center;
    }
    p {
      color: #fff;
      font-size: 1.5rem;
    }
  }
`;
const NotFound = () => {
  const gradients = [
    ['#16222A', '#3A6073'],
    ['#0A1A2E', '#093637'],
    ['#4e94fb', '#69ffb7'],
  ];
  return (
    <Layout>
      <NotFoundStyles>
        <Gradient
          gradients={gradients} // required
          property="background"
          duration={5000}
          angle="150deg"
        />
        <div className="error">
          <h1>404</h1>
          <p>Page not found</p>
        </div>
      </NotFoundStyles>
    </Layout>
  );
};

export default NotFound;
