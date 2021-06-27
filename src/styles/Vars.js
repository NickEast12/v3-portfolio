import { css } from 'styled-components';

const Vars = css`
  :root {
    //*Colours
    --mainColour: #02aab0;
    --secondaryColour: #f4f5f6;
    --backgroundColour: #16212a;
    --opacityBackground: rgba(22, 33, 42, 0.99);
    --opacityAlt: rgba(244, 245, 246, 0.55);
    //*Font
    --roboto: RobotoMono, -apple-system, system-ui, 'Helvetica Neue', Helvetica,
      Arial, sans-serif;
    --title: Lato, -apple-system, system-ui, 'Helvetica Neue', Helvetica, Arial,
      sans-serif;
    //*Font-size
    --titleLarge: 2.6rem;
    --titleSemiLarge: 2.441rem;
    --titleMedium: 1.953rem;
    --titleSmall: 1.563rem;
    --titleExtraSmall: 1.25rem;
    --text: 1rem;
    --textMedium: 0.95rem;
    //*Max-width
    --maxWidth: 1100px;
  }
`;

export default Vars;
