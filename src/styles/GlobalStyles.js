import { createGlobalStyle } from 'styled-components';
import Typography from './Typography';
import Vars from './Vars';
import Animations from './Animations';

const GlobalStyles = createGlobalStyle`
  ${Vars}
  ${Typography}
  ${Animations}
    *, *:after, *:before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        
    }
    a, a:visited {
        color: inherit;
        text-decoration: none;
   }
  
    body {
        width: 100%;
        height: 100%;
        overflow: scroll;
        -webkit-font-smoothing: subpixel-antialiased !important; 
        text-rendering:optimizeLegibility !important;
        /* background-color: var(--backgroundColour); */
    }
    h1,h2,h3,h4,h5,h6 {
      font-family: var(--title);
      margin: 0;
      letter-spacing: -.5px;
      font-feature-settings: "kern" 1;
      font-kerning: normal;
      text-rendering: optimizeLegibility; 
      font-smoothing: antialiased; 
      font-weight: 100;
    }
    .subtitle {
        font-family: var(--roboto);
        font-weight: 400;
        letter-spacing: -.5px;
        z-index: -2;
    }
    .mainTitle {
        z-index: 0;
        font-family: var(--roboto);
        font-weight: 400;
        letter-spacing: -.5px;
        position: relative;
        font-size: var(--titleSmall);
        span {
            width: 100%;
            position: relative;
            z-index: -1;
            padding-bottom: 4.5px;
            &::after {
            position: absolute;
            left: 0;
            z-index: 0;
            bottom: 0;
            width: 100%;
            height: 2px;
            background-color: var(--mainColour);
            content: '';
        }
        }
        
    }
    .btn {
        width: 100%;
        padding: .5rem 0; 
        border-radius: 4.5px;
        cursor: pointer;
        border: none;
        transition: all .35s ease-in-out;
        
        span {
            transition: all .35s ease-in-out;
            font-size: var(--text);
            font-family: var(--title);
            letter-spacing: -.25px;
            color: #fff;
        }
       
    }
    .btn--outline {
        background: none;
        border: solid 2px var(--mainColour);
        span {
            color: var(--mainColour);
        }
    }
    .btn--main {
        background-color: var(--mainColour);
        span {
            color: #fff;
        }
        &:hover {
            background-color: #01767B;
        }
       
    }    
    p , li, input, address, label,input, textarea  {
      font-family: var(--title);
      font-feature-settings: "kern" 1;
      font-kerning: normal;
    }
    p {
        line-height: 1.5;
    }
    a {
        font-family: var(--title);
   
    }
   #mobileMenu {
       background-color: rgba(22, 33, 42, 0.7);
    -webkit-backdrop-filter: saturate(180%) blur(14px) !important;
    backdrop-filter: saturate(180%) blur(14px) !important;
   }
    .willFade {
        opacity: 0;
        transform: translateY(20px);
    }
    //* Overiding normalise css font-size: 100%;
    button {
        font-size: inherit;
    }
   
    a[aria-current="page"] {
        color: var(--favColour);
    }
    .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
    }
`;

export default GlobalStyles;
