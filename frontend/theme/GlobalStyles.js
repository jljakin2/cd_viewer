import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root{
      --primary: #2476D3;
      
      --shade1: #195394;
      --shade2: #0E2F54;
      --shade3: #07182A;

      --tint1: #669FE0;
      --tint2: #A7C8ED;
      --tint3: #D3E4F6;

      --grey1: #14191F;
      --grey2: #1E262F;
      --grey3: #3D4C5C;
      --grey4: #667E99;
      --grey5: #A3B2C2;

      --greyWhite: #E0E5EB;
      --white: #FFFFFF;

      --success: #A4CFA2;
      --warning: #FCD996;
      --error: #F27982;
    }

    html {
      box-sizing: border-box;
      font-size: 100%; // 16px
    }

    *, *::before, *::after {
      box-sizing: inherit;
      
      margin: 0;
      padding: 0;
    }

    body {
      background: var(--grey1);
      color: var(--greyWhite);
      font-family: "Inter", --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;

export default GlobalStyles;
