import { createGlobalStyle } from 'styled-components';

const Animations = createGlobalStyle`
    .nav__wrapper {
        transition: all .35s linear;
        z-index: 99999;
    }    
    .active {
             background: #16222A;
             .nav {
                 @media only screen and (min-width: 1280px) {

                 padding: .5rem 0!important;
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
