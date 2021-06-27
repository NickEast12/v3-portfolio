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
    padding: 2rem 0;
    width: 90%;
    margin: 0 auto;
    @media only screen and (min-width: 600px) {
      width: 80%;
    }
    &__wrapper {
      padding-top: 1rem;
      @media only screen and (min-width: 1280px) {
        padding-top: 2rem;
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
        </div>
      </div>
    </FooterStyles>
  );
};

export default Footer;
