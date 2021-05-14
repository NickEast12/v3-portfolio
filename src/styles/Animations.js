import { createGlobalStyle } from 'styled-components';

const Animations = createGlobalStyle`
    .nav__wrapper {
        transition: all .35s linear;
        z-index: 99999;
    }    
    .active {
             background: #16222A;
             .nav {
                 padding: .5rem 0!important;
             }
             .nav--menu {
                 div {
                     background-color: #fff;
                 }
             }
             /* background: var(--opacityBackground); */
             /*   opacity: 1; */
              /* backdrop-filter: saturate(180%) blur(24px);   */
            /* border-bottom: solid rgba(255, 255, 255, 0.5) 1px; */
    }
`;

export default Animations;
