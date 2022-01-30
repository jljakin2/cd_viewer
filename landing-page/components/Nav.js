import styled from "styled-components";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

import FullLogo from "./Icons/FullLogo";
import Hamburger from "./Icons/Hamburger";

const NavStyles = styled.nav`
  background: var(--grey800);

  position: fixed;
  display: flex;
  align-items: center;

  width: 100%;
  padding: 1rem 1.5rem;

  z-index: 1000;

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
`;

export default function Nav() {
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
        <FullLogo />
      </ScrollLink>
      {/* <Link href="/">
        <FullLogo />
      </Link> */}
      <ul>
        <li>
          <ScrollLink
            activeClass="active"
            to="features"
            spy={true}
            smooth={true}
            offset={-70}
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
            offset={-70}
            duration={500}>
            <p className="body--regular">Partners</p>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            activeClass="active"
            to="apply"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            <p className="body--regular">Apply</p>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            <p className="body--regular">Contact</p>
          </ScrollLink>
        </li>
        <li>
          <Hamburger />
        </li>
      </ul>
    </NavStyles>
  );
}
