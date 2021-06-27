import React from 'react';
import styled from 'styled-components';

const FooterCTAStyles = styled.section`
  width: 100%;
  position: relative;
  margin: 0 auto;
  background: rgb(2, 170, 176);
  background: linear-gradient(344deg, #3a6073 43%, rgba(22, 33, 42, 1) 92%);
  .cta {
    text-align: center;
    max-width: var(--maxWidth);
    color: #fff;
    margin: 0 auto;
    border-radius: 5px;
    padding: 2.5rem 1.85rem;
    width: 100%;
    text-align: center;
    h4 {
      font-weight: 600;
      font-size: 1.75rem;
    }
    p {
      margin-top: 1rem;
      max-width: 500px;
      margin: 1rem auto 0 auto;
    }
    button {
      margin-top: 1rem;
      padding: 0.75rem 0;
      width: 140px;
      max-width: 250px;
    }
    @media only screen and (min-width: 600px) {
    }
  }
`;
const FooterCTA = () => (
  <FooterCTAStyles>
    <div className="cta">
      <h4>Looking to start a new project?</h4>
      <p>
        My inbox is always open to discuss new opportunities, if you've got a
        project and think I'm the right man for the job then send me an email!
      </p>
      <a href="mailto:contact@nick-east.com">
        <button type="button" className="btn btn--main">
          <span>Contact me</span>
        </button>
      </a>
    </div>
  </FooterCTAStyles>
);

export default FooterCTA;
