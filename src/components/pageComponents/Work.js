import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useIntersection } from 'react-use';
import gsap from 'gsap';
import Image from '../functional/Image';
import UCtelLogo from '../../svgs/uctel-logo.svg';
import NutcrackerLogo from '../../svgs/nutcracker-logo.svg';
import RPILogo from '../../svgs/rpi-logo.svg';
import ZanoLogo from '../../svgs/zano-logo.svg';
import VSLogo from '../../svgs/vs-logo.svg';
import Github from '../../svgs/github.svg';
import LinkIcon from '../../svgs/link.svg';
import LashBaseIcon from '../../svgs/lashbase.svg';

const WorkStyles = styled.section`
  width: 100%;
  background-color: #fff;
  .work {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    h4 {
      font-size: 2rem;
      font-weight: 600;
    }
    > p {
      width: 90%;
      margin: 1rem auto 1.5rem auto;
      max-width: 600px;
      span {
        a {
          color: var(--mainColour) !important;
          font-weight: 800;
        }
      }
    }
    &__boxes {
      width: 100%;
      margin: 2rem auto 0 auto;
      section {
        height: 14rem;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        &:nth-child(2) {
          .gatsby-image-wrapper {
            &::after {
              background: rgba(22, 34, 42, 0.75);
            }
          }
        }
        @media only screen and (min-width: 375px) {
          height: 16rem;
        }
        position: relative;
        transition: inherit;
        &:hover {
          .overlay {
            opacity: 1;
          }
        }
        .gatsby-image-wrapper {
          height: 100%;
          width: 100%;
          &::after {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: rgba(22, 33, 42, 0.5);
            content: '';
          }
        }
        .box--logo {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          svg {
            position: relative;
            width: 200px;
            height: 200px;
            padding: 0.25rem;
          }
        }
        .rpi-logo {
          svg {
            padding: 1.5rem;
          }
        }
        .overlay {
          transition: all 0.35s ease-in-out;
          opacity: 0;
          width: 100%;
          height: 100%;
          position: absolute;
          padding: 1.6rem 1.25rem 1.25rem 1.25rem;
          top: 0;
          left: 0;
          background: #16212a;
          color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          div {
            width: 60px;
            justify-content: space-between;
            margin: 1rem auto 0 auto;
            display: flex;
            text-align: center;
            svg {
              text-align: center;
              width: 22.5px;
              height: 22.5px;
              fill: #fff;
              transition: fill 0.45s ease;
              &:hover {
                fill: var(--mainColour);
              }
            }
          }
        }
      }
      @media only screen and (min-width: 768px) {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        section {
          height: 15rem;
          margin-bottom: 0;
        }
      }
      @media only screen and (min-width: 1280px) {
        width: 100%;
        section {
          height: 16rem;
        }
      }
    }
  }
`;
const Work = () => {
  const workRef = useRef(null);
  const contactIntersection = useIntersection(workRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  });
  const contactFadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: 0,
      ease: 'power1.out',
      delay: 1.2,
      stagger: {
        amount: 1.15,
      },
    });
  };
  useEffect(() => {
    if (contactIntersection && contactIntersection.isIntersecting) {
      contactFadeIn('.workFade');
    }
  });
  return (
    <WorkStyles>
      <div className="work">
        <h4 className="willFade expFade" ref={workRef}>
          Recent work
        </h4>
        <p className="willFade expFade">
          A selection of my most recent projects to date for a full overview of
          all my projects, check out my
          <span>
            {' '}
            <a
              href="https://github.com/NickEast12"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>{' '}
          </span>
        </p>
        <div className="work__boxes">
          <section className="willFade workFade">
            <Image filename="rpi.jpeg" alt="RPI" />
            <div className="box--logo rpi-logo">
              <RPILogo />
            </div>
            <div className="overlay">
              <p>A global technology lead recruitment agency </p>
              <div>
                <a
                  href="https://github.com/NickEast12/rpi-website"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                </a>
                <a
                  href="https://www.rpint.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon />
                </a>
              </div>
            </div>
          </section>
          <section className="willFade workFade">
            <Image filename="uctel.jpeg" alt="UCtel" />
            <div className="box--logo">
              <UCtelLogo />
            </div>
            <div className="overlay">
              <p>5G communication specialists keeping businesses connected.</p>
              <div>
                <a
                  href="https://github.com/NickEast12/UCtel-website"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                </a>
                <a
                  href="https://www.uctel.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon />
                </a>
              </div>
            </div>
          </section>
          <section className="willFade workFade">
            <Image filename="nutcracker.jpeg" alt="Nutcracker Agency" />
            <div className="box--logo">
              <NutcrackerLogo />
            </div>
            <div className="overlay">
              <p>Multi-award winning digital marketing agency</p>
              <div>
                <a
                  href="https://github.com/NickEast12/nutcracker-website"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                </a>
                <a
                  href="https://www.nutcrackeragency.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon />
                </a>
              </div>
            </div>
          </section>

          <section className="willFade workFade">
            <Image filename="vs.png" alt="Vine Street Solutions" />
            <div className="box--logo">
              <VSLogo />
            </div>
            <div className="overlay">
              <p>
                Bespoke print solution provider based in the heart of Mayfair,
                London
              </p>
              <div>
                <a
                  href="http://www.vinestreet.solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon />
                </a>
              </div>
            </div>
          </section>
          <section className="willFade workFade">
            <Image filename="lashbase.jpg" alt="LashBase" />
            <div className="box--logo">
              <LashBaseIcon />
            </div>
            <div className="overlay">
              <p>
                Personal project for booking freelance eyelash technicians in
                your local area.
              </p>
              <div>
                <a
                  href="https://github.com/NickEast12/Lash-Base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                </a>
                <a
                  href="https://lashbase.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon />
                </a>
              </div>
            </div>
          </section>
          <section className="willFade workFade" id="blog">
            <Image filename="zano.jpeg" alt="Zano Controls" />
            <div className="box--logo rpi-logo">
              <ZanoLogo />
            </div>
            <div className="overlay">
              <p>
                Leading manufacturer of revolutionary LED dimming technology
              </p>
              <div>
                <a
                  href="https://github.com/NickEast12/zano-microsite"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                </a>
                <a
                  href="https://www.zanotechnology.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon />
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </WorkStyles>
  );
};

export default Work;
