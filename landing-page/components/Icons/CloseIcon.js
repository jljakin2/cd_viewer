import React from "react";
import styled from "styled-components";

const StyledSvg = styled.svg`
  margin-left: auto;
`;

const CloseIcon = ({ closeMobileMenu }) => {
  return (
    <StyledSvg
      width="22px"
      height="22px"
      viewBox="0 0 22 22"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      onClick={closeMobileMenu}>
      <g
        id="Main"
        stroke="none"
        stroke-width="1"
        fill="none"
        fillRule="evenodd">
        <g
          id="Tablet"
          transform="translate(-731.000000, -168.000000)"
          fill="#1B2E40">
          <g id="Group-6" transform="translate(731.393398, 168.393398)">
            <rect
              id="Rectangle-Copy-21"
              transform="translate(10.606602, 10.606602) rotate(-45.000000) translate(-10.606602, -10.606602) "
              x="-3.39339828"
              y="9.60660172"
              width="28"
              height="2"
              rx="1"></rect>
            <rect
              id="Rectangle-Copy-22"
              transform="translate(10.606602, 10.606602) rotate(45.000000) translate(-10.606602, -10.606602) "
              x="-3.39339828"
              y="9.60660172"
              width="28"
              height="2"
              rx="1"></rect>
          </g>
        </g>
      </g>
    </StyledSvg>
  );
};

export default CloseIcon;
