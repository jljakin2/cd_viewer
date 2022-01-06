import styled from "styled-components";

import FileIcon from "./Icons/FileIcon";

const FileCardStyles = styled.div`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  align-items: center;

  &:hover div {
    background: var(--greyWhite);
  }
`;

export default function FileCard({ name }) {
  return (
    <FileCardStyles>
      <FileIcon />
      <p>{name}</p>
    </FileCardStyles>
  );
}
