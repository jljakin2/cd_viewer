import styled from "styled-components";

const FolderIconStyles = styled.div`
  border: 2px solid var(--greyWhite);
  border-radius: 0.3125rem;

  position: relative;

  width: 5.5rem;
  height: 4rem;

  &::before {
    content: "";
    border: 2px solid var(--greyWhite);
    border-radius: 0.3125rem 0.3125rem 0 0;

    position: absolute;
    top: -0.5rem;
    right: 0;

    width: 3rem;
    height: 0.5rem;
  }
`;

export default function FolderIcon() {
  return <FolderIconStyles />;
}
