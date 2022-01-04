import styled from "styled-components";

const NavMenuStyles = styled.nav`
  background: var(--grey2);

  padding: 1rem 5rem;

  ul {
    display: flex;
  }

  li {
    list-style: none;
    line-height: 1.625rem;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }

    &:not(:last-child) {
      margin-right: 4rem;
    }
  }
`;

export default function NavMenu() {
  return (
    <NavMenuStyles>
      <ul>
        <li>File</li>
        <li>Edit</li>
        <li>View</li>
        <li>Tools</li>
        <li>Help</li>
      </ul>
    </NavMenuStyles>
  );
}
