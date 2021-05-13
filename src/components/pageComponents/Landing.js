import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Gradient } from 'react-gradient';
import { useIntersection } from 'react-use';
import gsap from 'gsap';

const BgStyles = styled.div`
  width: 100%;
  position: relative;
  .react-gradient {
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
  }
`;
const LandingStyles = styled.header`
  width: 100%;
  height: 100vh;
  @media only screen and (min-width: 600px) {
    height: 40rem;
  }
  @media only screen and (min-width: 1280px) {
    height: 42rem;
  }
  .landing {
    width: 90%;
    margin: 0 auto;
    text-align: left;
    padding-top: 8rem;
    max-width: var(--maxWidth);
    @media only screen and (min-width: 375px) {
      padding-top: 9.5rem;
    }
    @media only screen and (min-width: 414px) {
      padding-top: 11.5rem;
    }
    @media only screen and (min-width: 1280px) {
      &__wrapper {
        width: 75%;
        margin: 1rem auto 0 0;
      }
    }
    color: var(--secondaryColour);
    h6 {
      /* color: var(--mainColour); */
      font-size: var(--text);
      margin-bottom: 1rem;
    }
    h1 {
      margin-bottom: 1rem;
      font-weight: 500;
      span {
        font-weight: 700;
        position: relative;
        z-index: -2;
        &::after {
          position: absolute;
          width: 100%;
          height: 2px;
          background-color: var(--mainColour);
          content: '';
          bottom: 0;
          left: 0;
        }
      }
    }
    p {
      margin-bottom: 0.95rem;
    }
    button {
      margin-top: 0.5rem;
      padding: 0.75rem 0;
      width: 140px;
    }
  }
`;
const Landing = () => {
  const gradients = [
    ['#16222A', '#3A6073'],
    ['#0A1A2E', '#093637'],
    ['#4e94fb', '#69ffb7'],
  ];
  const reviewRef = useRef(null);
  const contactIntersection = useIntersection(reviewRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
  });
  const contactFadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: 0,
      ease: 'power2.out',
      delay: 0.5,
      stagger: {
        amount: 0.5,
      },
    });
  };
  useEffect(() => {
    if (contactIntersection && contactIntersection.isIntersecting) {
      contactFadeIn('.reviewFade');
      console.log('intersecting');
    }
  });
  return (
    <>
      <BgStyles>
        <Gradient
          gradients={gradients} // required
          property="background"
          duration={5000}
          angle="150deg"
        />
      </BgStyles>
      <LandingStyles>
        <div className="landing" ref={reviewRef} id="home">
          <div className="landing__wrapper">
            <h6 className="subtitle willFade reviewFade">Hi, i'm Nick </h6>
            <h1 className="willFade reviewFade">
              I build <span>Websites</span> and other cool things for the web!
            </h1>
            {/* <h1>I'm a Designer &amp; Front-end Developer</h1> */}
            {/* <h1>I'm a Front-end Developer &amp; Designer</h1> */}
            <p className="willFade reviewFade">
              I’m a self-taught UI/UX designer and Front-end Developer based in
              London, UK.
            </p>
            <button type="button" className="btn btn--main willFade reviewFade">
              <span>Say hello</span>
            </button>
          </div>
        </div>
      </LandingStyles>
    </>
  );
};

export default Landing;

// &:nth-child(1n) {
//   background: #4e94fb;
// }
// &:nth-child(2n) {
//   background: #69ffb7;
// }
// &:nth-child(3n) {
//   background: #ef5e93;
// }
