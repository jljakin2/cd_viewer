import styled from "styled-components";

const StyledSvg = styled.svg`
  display: none;

  /* margin-left: auto; */

  // 850px
  @media only screen and (max-width: 53.125em) {
    display: block;
  }
`;

const Hamburger = ({ showMobileMenu }) => {
  return (
    <StyledSvg
      width="28px"
      height="22px"
      viewBox="0 0 28 22"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      onClick={showMobileMenu}>
      <g id="Main" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g
          id="Tablet"
          transform="translate(-680.000000, -127.000000)"
          fill="#fff">
          <g id="Group-4" transform="translate(680.000000, 127.000000)">
            <rect
              id="Rectangle"
              x="0"
              y="0"
              width="28"
              height="2"
              rx="1"></rect>
            <rect
              id="Rectangle-Copy-21"
              x="0"
              y="10"
              width="28"
              height="2"
              rx="1"></rect>
            <rect
              id="Rectangle-Copy-22"
              x="0"
              y="20"
              width="28"
              height="2"
              rx="1"></rect>
          </g>
        </g>
      </g>
    </StyledSvg>
  );
};

export default Hamburger;
