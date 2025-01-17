import PropTypes from "prop-types";
import styled from "styled-components";
import Head from "next/head";

import GlobalStyles from "../theme/GlobalStyles";
import Toast from "./Toast";

import Nav from "./Nav";
import { useMobileMenu } from "../lib/context/mobileMenuState";
import { useToast } from "../lib/context/showToast";
// import Header from "./Header";

// The purpose of this component is to add the content that will be used as a template for all of the pages (e.g. nav, footer, etc.). Each individual page's content
// will go in the {children} variable
export default function Page({ children }) {
  const { menuIsOpen } = useMobileMenu();
  const { showToast } = useToast();

  return (
    <>
      <GlobalStyles menuIsOpen={menuIsOpen} />
      {showToast && <Toast />}
      <header id="home">
        <Nav />
      </header>
      {/* <Header /> */}

      {children}
    </>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
