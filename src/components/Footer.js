import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
//* Local imports
import Logo from '../svgs/logo-column.svg';
import GithubIcon from '../svgs/github.svg';
import LinkedinIcon from '../svgs/linkedin.svg';
import SpotifyIcon from '../svgs/spotify.svg';

const FooterStyles = styled.footer`
  width: 100%;
  background: #16222a;
  .footer {
    max-width: var(--maxWidth);
    padding: 5.5rem 0 2rem 0;
    width: 90%;
    margin: 0 auto;
    @media only screen and (min-width: 600px) {
      width: 80%;
    }
    @media only screen and (min-width: 1280px) {
      margin-top: 3rem;
    }
    &__wrapper {
      padding-top: 16rem;
      @media only screen and (min-width: 1280px) {
        padding-top: 12rem;
      }
      text-align: center;
      > svg {
        width: 110px;
        fill: #fff;
      }
      &__icons {
        display: flex;
        justify-content: space-between;
        width: 120px;
        margin: 2rem auto 0 auto;
        svg {
          fill: rgba(255, 255, 255, 0.7);
          width: 25px;
          height: 25px;
          transition: fill 0.35s ease-in-out;
          &:hover {
            fill: var(--mainColour);
          }
        }
      }
      .built {
        color: rgba(255, 255, 255, 0.7);
        margin-top: 2rem;
        font-family: var(--roboto);
        font-size: 0.85rem;
      }
      .legal {
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;
        p {
          color: rgba(255, 255, 255, 0.7);
          font-family: var(--roboto);
          font-size: 0.75rem;
          transition: color 0.35s ease-in-out;
          &:hover {
            color: rgba(255, 255, 255, 1);
          }
        }
      }
    }
  }
`;

const Footer = () => {
  const i = true;
  return (
    <FooterStyles>
      <FooterCTA />
      <div className="footer">
        <div className="footer__wrapper">
          <Logo />
          <div className="footer__wrapper__icons">
            <a
              href="https://github.com/NickEast12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </a>
            <a
              href="http://www.linkedin.com/in/nick-east"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://open.spotify.com/user/nickeast12?si=GeSIN_6YSeKYSKAFsmj-8A"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SpotifyIcon />
            </a>
          </div>
          <p className="built">Designed &amp; Built by Nick East</p>
          {/* <div className="legal">
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div> */}
        </div>
      </div>
    </FooterStyles>
  );
};

export default Footer;

const FooterCTAStyles = styled.section`
  width: 100%;
  position: relative;
  max-width: var(--maxWidth);
  margin: 4rem auto 0 auto;
  .cta {
    text-align: center;

    top: -3rem;
    left: 0;
    position: absolute;
    box-shadow: rgba(17, 12, 46, 0.95) 0px 48px 100px 0px;
    background: #fff;

    border-radius: 5px;
    padding: 2.5rem 1.85rem;
    width: 85%;
    margin: 0 calc(0% + 7.5%);
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
      width: 80%;
      margin: 0 calc(0% + 10%);
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

// ['#16222A', '#3A6073'],
// ['#0A1A2E', '#093637'],
