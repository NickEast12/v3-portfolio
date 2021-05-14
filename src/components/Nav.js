import { Link } from 'gatsby';
import React, { useEffect, useRef, useState } from 'react';
import { window } from 'browser-monads';
import styled from 'styled-components';
import { useIntersection } from 'react-use';
import gsap from 'gsap';
import { StaticImage } from 'gatsby-plugin-image';
import Github from '../svgs/github.svg';
import LinkedIn from '../svgs/linkedin.svg';
import Spotify from '../svgs/spotify.svg';
import Logo from '../svgs/logo.svg';

const NavStyles = styled.nav`
  z-index: 999;
  @keyframes liAnimation {
    to {
      opacity: 1;
      transform: translateY(0px);
      z-index: 50;
    }
  }
  @keyframes iconAnimation {
    to {
      opacity: 1;
      transform: translateY(0px);
      z-index: 50;
    }
  }
  width: 100%;
  position: fixed;
  .nav {
    display: flex;
    justify-content: space-between;
    width: 90%;
    padding: 1rem 0;
    margin: 0 auto;
    position: relative;
    z-index: 999;
    max-width: var(--maxWidth);
    transition: padding 0.35s ease-in-out;
    &--logo {
      .gatsby-image-wrapper {
        width: 40px;
        height: auto;
      }
      svg {
        fill: black;
        width: 45px;
        height: 100%;
      }
    }
    &--menu {
      width: 30px;
      margin-top: 4px;
      outline: none;
      div {
        width: 100%;
        height: 3px;
        margin-bottom: 0.3rem;
        transition: all 0.25s ease 0s;
        transform-origin: 26px center;
        background-color: rgba(255, 255, 255, 1);
        &:nth-child(1) {
          transform: ${({ open }) =>
            open ? 'rotate(-45deg)' : 'rotate(0deg)'};
          width: ${({ open }) => (open ? '100%' : '75%')};
          margin: 0 0 0.3rem auto;
        }
        &:nth-child(2) {
          opacity: ${({ open }) => (open ? '0' : '1')};
        }
        &:nth-child(3) {
          transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0deg)')};
          width: ${({ open }) => (open ? '100%' : '75%')};
          margin: 0 0 0.3rem auto;
        }
      }
      @media only screen and (min-width: 768px) {
        display: none;
      }
    }
    &--desktop {
      display: none;
      @media only screen and (min-width: 768px) {
        display: block;
        ul {
          list-style: none;
          display: flex;
          gap: 1.25rem;
          li {
            color: #fff;
            align-items: center;
            align-self: center;
            button {
              padding: 0.75rem 0;
              width: 140px;
            }
          }
        }
      }
    }
    @media only screen and (min-width: 1280px) {
      padding: 1.5rem 0;
    }
  }
  .menu {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.35s linear;
    /* background: ${({ open }) =>
      open ? 'rgba(22, 33, 41, 1)' : 'rgba(22, 33, 41, 0.85)'}; */
    background-color: rgba(22, 33, 42, 0.85);
    backdrop-filter: saturate(120%) blur(8px);
    max-height: ${({ open }) => (open ? '1000rem' : '0')};
    height: ${({ open }) => (open ? '100vh' : '0')};
    ul {
      display: ${({ open }) => (open ? 'block' : 'none')};
      width: 80%;
      margin: 6rem auto;
      text-align: center;
      list-style: none;
      padding: 2rem 0;
      @media only screen and (min-width: 375px) {
        margin-top: 9.5rem;
      }
      @media only screen and (min-width: 414px) {
        margin-top: 10.5rem;
      }
      a {
        li {
          margin-bottom: 2rem;
          font-family: var(--roboto);
          font-size: var(--text);
          transition: all 0.35s ease;
          opacity: 0;
          transform: translateY(-10px);
          .nav-button {
            width: 70%;
          }
          &:hover {
            color: var(--mainColour);
          }
          .page__num {
            display: block;
            font-family: var(--Roboto);
            color: var(--mainColour);
            margin-bottom: 0.5rem;
          }
        }
      }
      a:nth-child(1) li {
        animation: ${({ open }) => (open ? 'liAnimation' : '')} 0.65s 0.5s
          forwards;
      }
      a:nth-child(2) li {
        animation: ${({ open }) => (open ? 'liAnimation' : '')} 0.65s 0.7s
          forwards;
      }
      a:nth-child(3) li {
        animation: ${({ open }) => (open ? 'liAnimation' : '')} 0.65s 0.9s
          forwards;
      }
      a:nth-child(4) li {
        animation: ${({ open }) => (open ? 'liAnimation' : '')} 0.55s 1.1s
          forwards;
      }
      a:nth-child(5) li {
        animation: ${({ open }) => (open ? 'liAnimation' : '')} 0.55s 1.3s
          forwards;
      }
      a:nth-child(6) li {
        animation: ${({ open }) => (open ? 'liAnimation' : '')} 0.55s 1.5s
          forwards;
      }
      .nav__icons {
        display: flex;
        width: 110px;
        margin: 6rem auto 0 auto;
        justify-content: space-between;
        a {
          opacity: 0;
          transform: translateY(20px);
          &:nth-child(1) {
            animation: ${({ open }) => (open ? 'iconAnimation' : '')} 0.55s 2s
              forwards;
          }
          &:nth-child(2) {
            animation: ${({ open }) => (open ? 'iconAnimation' : '')} 0.55s 2.2s
              forwards;
          }
          &:nth-child(3) {
            animation: ${({ open }) => (open ? 'iconAnimation' : '')} 0.55s 2.4s
              forwards;
          }
          svg {
            transition: all 0.35s ease;
            width: 22px;
            fill: rgba(255, 255, 255, 0.5);
            &:hover {
              fill: var(--mainColour);
            }
          }
        }
      }
    }
  }
`;
const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const changeNavScroll = () => {
    if (window.scrollY >= 20) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener('scroll', changeNavScroll);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    }
    if (!open) {
      document.body.style.overflow = 'auto';
    }
  }, [open]);

  const navRef = useRef(null);
  const contactIntersection = useIntersection(navRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
  });
  const contactFadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: 0,
      ease: 'power2.out',
      delay: 1.25,
      stagger: {
        amount: 0.45,
      },
    });
  };
  useEffect(() => {
    if (contactIntersection && contactIntersection.isIntersecting) {
      contactFadeIn('.navFade');
    }
  });
  return (
    <NavStyles open={open}>
      <div className={scroll ? 'active nav__wrapper' : 'nav__wrapper'}>
        <div className="nav" ref={navRef}>
          <div className="nav--logo">
            <Link to="/#home">
              <Logo />
            </Link>
          </div>
          <div
            className="nav--menu"
            onClick={() => setOpen(!open)}
            onKeyDown={() => setOpen(!open)}
            role="button"
            tabIndex={0}
          >
            <div />
            <div />
            <div />
          </div>
          <div className="nav--desktop">
            <ul>
              <li className="willFade navFade">
                <Link to="/#about">About</Link>
              </li>
              <li className="willFade navFade">
                <Link to="/#experience">Experience</Link>
              </li>
              <li className="willFade navFade">
                <Link to="/#work">Work</Link>
              </li>
              <li className="willFade navFade">
                <Link to="/#blog">Blog</Link>
              </li>
              <li className="willFade navFade">
                <a
                  href="mailto:contact@nick-east.com"
                  rel="noopener noreferrer"
                >
                  <button type="button" className="btn btn--main ">
                    <span>Say hello</span>
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="menu" open={open}>
          <ul>
            <Link to="/#about" onClick={() => setOpen(!open)}>
              <li>About</li>
            </Link>
            <Link to="/#experience" onClick={() => setOpen(!open)}>
              <li>Experience</li>
            </Link>
            <Link to="/#work" onClick={() => setOpen(!open)}>
              <li>Work</li>
            </Link>
            <Link to="/#blog" onClick={() => setOpen(!open)}>
              <li>Blog</li>
            </Link>
            <a
              href="mailto:contact@nick-east.com?subject=Request Resume"
              onClick={() => setOpen(!open)}
            >
              <li>
                <a
                  href="mailto:contact@nick-east.com"
                  rel="noopener noreferrer"
                >
                  <button type="button" className="btn btn--main nav-button">
                    <span>Say hello</span>
                  </button>
                </a>
              </li>
            </a>
            <div className="nav__icons">
              <a
                href="https://github.com/NickEast12"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
              </a>
              <a
                href="http://www.linkedin.com/in/nick-east"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn />
              </a>
              <a
                href="https://open.spotify.com/user/nickeast12?si=GeSIN_6YSeKYSKAFsmj-8A"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Spotify />
              </a>
            </div>
          </ul>
        </div>
      </div>
    </NavStyles>
  );
};

export default Nav;
