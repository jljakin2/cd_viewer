import styled from "styled-components";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

import FullLogo from "./Icons/FullLogo";
import Hamburger from "./Icons/Hamburger";

const NavStyles = styled.nav`
  position: fixed;
`;

export default function Nav() {
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
            offset={-10}
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
            offset={-10}
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
            offset={-10}
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
            offset={-10}
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
