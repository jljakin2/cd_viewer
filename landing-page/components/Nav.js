import styled from "styled-components";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { useMediaQuery } from "react-responsive";

import FullLogo from "./Icons/FullLogo";
import Hamburger from "./Icons/Hamburger";
import CloseIcon from "./Icons/CloseIcon";

import media from "../lib/mediaQueries";
import { useMobileMenu } from "../lib/context/mobileMenuState";

const NavStyles = styled.nav`
  background: var(--grey800);

  position: fixed;
  display: flex;
  align-items: center;

  width: 100%;
  padding: 1rem 1.5rem;

  z-index: 1000;

  ${media.laptop} {
    padding: 1rem 4rem;
  }

  svg {
    cursor: pointer;
  }

  ul {
    list-style: none;

    display: flex;

    margin-left: auto;
  }

  li {
    cursor: pointer;
  }

  p {
    transition: all 0.2s ease-out;
  }

  p:hover {
    color: var(--primary300);
  }

  li:not(:nth-last-child(1)) {
    margin-right: 4rem;
  }

  .apply-link {
    text-decoration: none;
    color: var(--white);
  }
`;

const MobileMenuStyles = styled.div`
  position: absolute;
  top: 5rem;
  left: 0;

  width: 100vw;
  height: 100vh;

  .blackout {
    background: black;
    opacity: 0.75;

    position: absolute;

    height: 100%;
    width: 100%;

    z-index: 9000;
  }

  .menu {
    background: var(--white);
    color: var(--grey800);
    opacity: 1;

    position: absolute;

    width: 100%;

    z-index: 10000;
  }

  ul {
    list-style: none;

    display: flex;
    flex-direction: column;

    li {
      text-align: center;

      width: 100%;
      padding: 1.5rem;
    }

    & > *:not(:last-child) {
      border-bottom: 1px solid var(--grey100);
    }
  }
`;

export default function Nav() {
  const isMobileTablet = useMediaQuery({
    query: `(max-width: ${media.sizes.laptop})`,
  });

  const { menuIsOpen, closeMobileMenu } = useMobileMenu();

  // TODO: create conditional for showing logo and other nav items depending on if index page or privacy/terms pages
  return (
    <NavStyles>
      <ScrollLink
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}>
        <div onClick={closeMobileMenu}>
          <FullLogo />
        </div>
      </ScrollLink>
      {/* <Link href="/">
        <FullLogo />
      </Link> */}

      {menuIsOpen && (
        <MobileMenuStyles>
          <div className="blackout" />
          <div className="menu">
            <ul>
              <li>
                <ScrollLink
                  activeClass="active"
                  to="features"
                  spy={true}
                  smooth={true}
                  offset={-110}
                  duration={500}>
                  <p className="body--regular" onClick={closeMobileMenu}>
                    Features
                  </p>
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  activeClass="active"
                  to="partners"
                  spy={true}
                  smooth={true}
                  offset={-110}
                  duration={500}>
                  <p className="body--regular" onClick={closeMobileMenu}>
                    Partners
                  </p>
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  activeClass="active"
                  to="apply"
                  spy={true}
                  smooth={true}
                  offset={-110}
                  duration={500}>
                  <p className="body--regular" onClick={closeMobileMenu}>
                    Apply
                  </p>
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-110}
                  duration={500}>
                  <p className="body--regular" onClick={closeMobileMenu}>
                    Contact
                  </p>
                </ScrollLink>
              </li>
            </ul>
          </div>
        </MobileMenuStyles>
      )}

      <ul>
        {isMobileTablet ? (
          <li>{!menuIsOpen ? <Hamburger /> : <CloseIcon />}</li>
        ) : (
          <>
            <li>
              <ScrollLink
                activeClass="active"
                to="features"
                spy={true}
                smooth={true}
                offset={-110}
                duration={500}>
                <p className="body--regular">Features</p>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                activeClass="active"
                to="partners"
                spy={true}
                smooth={true}
                offset={-110}
                duration={500}>
                <p className="body--regular">Partners</p>
              </ScrollLink>
            </li>
            <li>
              <a
                className="apply-link"
                href="https://angel.co/company/candelytics/jobs">
                <p className="body--regular">Apply</p>
              </a>
            </li>
            <li>
              <ScrollLink
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-110}
                duration={500}>
                <p className="body--regular">Contact</p>
              </ScrollLink>
            </li>
          </>
        )}
      </ul>
    </NavStyles>
  );
}
