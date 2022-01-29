import styled from "styled-components";
import Link from "next/link";

import FullLogo from "./Icons/FullLogo";
import Hamburger from "./Icons/Hamburger";

export default function Nav() {
  return (
    <nav>
      <Link href="/">
        <FullLogo />
      </Link>
      <ul>
        <li>
          <p className="body--regular">Features</p>
        </li>
        <li>
          <p className="body--regular">Partners</p>
        </li>
        <li>
          <p className="body--regular">Apply</p>
        </li>
        <li>
          <p className="body--regular">Contact</p>
        </li>
        <li>
          <Hamburger />
        </li>
      </ul>
    </nav>
  );
}
