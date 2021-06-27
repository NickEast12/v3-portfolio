import { css } from 'styled-components';
import font from '../assets/fonts/Inter.ttf';
import altFont from '../assets/fonts/RobotoMono.ttf';

const Typography = css`
  @font-face {
    font-family: Inter;
    src: url(${font});
  }

  @font-face {
    font-family: RobotoMono;
    src: url(${altFont});
  }
  html {
    font-size: 16px;
    @media only screen and (min-width: 375px) {
      font-size: 16.5px;
    }
    @media only screen and (min-width: 414px) {
      font-size: 17px;
    }
    @media only screen and (min-width: 768px) {
      font-size: 18px;
    }
    @media only screen and (min-width: 1280px) {
      font-size: 19px;
    }
  }
  h1 {
    font-size: var(--titleLarge);
  }
  h2 {
    font-size: var(--titleSemiLarge);
  }
  h3 {
    font-size: var(--titleMedium);
  }
  h4 {
    font-size: var(--titleSmall);
  }
  h5 {
    font-size: var(--titleSmall);
  }
  h6 {
    font-size: var(--titleSmall);
  }
  p {
    font-size: var(--text);
  }
`;

export default Typography;
