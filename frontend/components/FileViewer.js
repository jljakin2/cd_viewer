import styled from "styled-components";
import FileCard from "./FileCard";

const FileViewerStyles = styled.div`
  padding-left: 2.5rem;

  h2 {
    margin-bottom: 2.5rem;
  }

  .file-container {
    display: flex;
    gap: 2rem;
  }
`;

export default function FileViewer({ folderName, files }) {
  const renderedFiles = files?.map(file => {
    return <FileCard name={file.name} id={file.id} />;
  });

  return (
    <FileViewerStyles>
      <h2>
        {folderName}{" "}
        {`(${files?.length} ${files?.length === 1 ? "item" : "items"})`}
      </h2>
      <div className="file-container">{renderedFiles}</div>
    </FileViewerStyles>
  );
}
