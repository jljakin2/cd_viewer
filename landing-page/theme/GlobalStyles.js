import { createGlobalStyle } from "styled-components";
import media from "../lib/mediaQueries";

const GlobalStyles = createGlobalStyle`
    :root{
      --primary: #E04D57;
      --primary300: #E87880;
      --primary200: #EFA4A9;

      
      --grey900: #181A1B;
      --grey800: #242729;
      --grey700: #474E52;
      --grey600: #5F686D;
      --grey500: #778288;
      --grey400: #929BA0;
      --grey300: #ADB4B8;
      --grey200: #C8CDD0;
      --grey100: #E4E6E7;
      --grey50: #F1F2F3;
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
      background: var(--grey900);
      color: var(--white);
      font-family: "Roboto", --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      overflow-x: hidden;
      overflow-y: ${({ menuIsOpen }) => (menuIsOpen ? "hidden" : "visible")};

      position: relative;
    }

    input, textarea, button {
      border-radius: 0.375rem;
    }

/* ===== H1 STYLES ===== */
    h1 {
      font-weight: bold;
      letter-spacing: 0.0075em;
    }

    h1.display {
      font-size: 3rem;
      line-height: 3rem;

      ${media.tablet} {
        font-size: 4rem;
        line-height: 3.5rem;

        margin-bottom: 2rem;
      }
    }

    h1.heading {
      font-size: 2.25rem;
      line-height: 2.75rem;

      ${media.tablet} {
        font-size: 2.5rem;
        line-height: 3rem;
      }
    }
/* ========== ========== */ 

/* ===== H2 STYLES ===== */
    h2 {
      font-size: 2rem;
      line-height: 2.5rem;
      letter-spacing: 0.01em;
    }

    h2.display {
      font-weight: normal;

      ${media.tablet} {
        font-size: 3rem;
        line-height: 3rem;
      }
    }

    h2.heading {
      font-weight: bold;

      ${media.tablet} {
        font-size: 2rem;
        line-height: 2.75rem;
      }
    }
/* ========== ========== */ 

/* ===== H3 STYLES ===== */
    h3 {
      font-weight: 500;
      font-size: 1.75rem;
      line-height: 2.25rem;

      ${media.tablet} {
        font-size: 2rem;
        line-height: 2.5rem;
      }
    }
/* ========== ========== */ 

/* ===== H4 STYLES ===== */
    h4 {
      font-weight: 500;
      font-size: 1.5rem;
      line-height: 2rem;

      ${media.tablet} {
        font-size: 1.75rem;
        line-height: 2rem;
      }
    }
/* ========== ========== */ 

/* ===== H5 STYLES ===== */
    h5 {
      font-weight: 500;
      font-size: 1.25rem;
      line-height: 1.75rem;

      ${media.tablet} {
        font-size: 1.5rem;
        line-height: 2rem;
      }
    }
/* ========== ========== */ 

/* ===== H6 STYLES ===== */
    h6 {
      font-weight: 500;
      font-size: 1.125rem;
      line-height: 1.5rem;

      ${media.tablet} {
        font-size: 1.25rem;
        line-height: 1.75rem;
      }
    }
/* ========== ========== */ 

/* ===== BODY STYLES ===== */
    p.body--large {
      font-weight: normal;
      font-size: 1.125rem;
      line-height: 1.75rem;
    }

    p.body--regular {
      font-weight: normal;
      font-size: 1rem;
      line-height: 1.5rem;
    }

    p.body--small {
      font-weight: 300;
      font-size: 0.875rem;
      line-height: 1.5rem;
    }
/* ========== ========== */ 

/* ===== BUTTON STYLES ===== */
  button {
    background: var(--primary);
    border: none;
    color: var(--white);
    font-size: 1rem;
    font-family: "Roboto", --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    cursor: pointer;

    padding: 1rem;

    transition: all .2s ease-out;

    &:hover {
      background: var(--primary300);
    }
  }
/* =========== ========== */

/* ===== FORM STYLES ===== */
    fieldset {
      border: none;
    }

    input {
      border: none;
      font-size: 1rem;
      color: var(--grey800);

      width: 100%;
      padding: 1rem;
    }

    input::placeholder {
      font-family: "Roboto", --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-weight: 300;
      font-size: 1rem;
      line-height: 1.5rem;
      color: var(--grey300);
    }

    textarea {
      font-family: "Roboto", --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 1rem;
      line-height: 1.5rem;
      color: var(--grey800);
      resize: none;

      width: 100%;
      padding: 1rem;
    }

    textarea::placeholder {
      font-family: "Roboto", --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-weight: 300;
      font-size: 1rem;
      line-height: 1.5rem;
      color: var(--grey300);
    }

    .error {
      color: var(--error)
    }
/* =========== ========== */

/* ===== HELPERS ===== */
    .highlight-text {
      color: var(--primary);
    }

    .blackout {
      background: black;
      opacity: 0.5;

      width: 100vw;
      height: 100vh;
    }

    .error-border {
      border: 2px solid var(--error);
    }
/* =========== ========== */
`;

export default GlobalStyles;
