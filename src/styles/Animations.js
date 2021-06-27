import { css } from 'styled-components';

const Animations = css`
  .nav__wrapper {
    transition: all 0.35s linear;
    z-index: 99999;
  }
  .active {
    background: #16222a;
    .nav {
      @media only screen and (min-width: 1280px) {
        padding: 0.5rem 0 !important;
      }
    }
    .nav--menu {
      div {
        background-color: #fff;
      }
    }
  }
`;

export default Animations;
