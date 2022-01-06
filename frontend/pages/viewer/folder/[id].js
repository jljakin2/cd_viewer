import { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import data from "../../../lib/data.json";
import Header from "../../../components/Header";

const ViewerStyles = styled.section`
  border: 1px solid red;

  display: grid;
  grid: ${({ isPreviewed }) =>
    isPreviewed
      ? "'folders files preview' 1fr / 20vw 2fr 1fr"
      : "'folders files preview' 1fr / 20vw 1fr"};

  #folders {
    background: yellow;
    grid-area: folders;
  }

  #files {
    background: blue;
    grid-area: files;
  }
  #preview {
    background: pink;
    grid-area: preview;
  }
`;

export default function Viewer() {
  const router = useRouter();
  const { id } = router.query;

  const [isPreviewed, setIsPreviewed] = useState(false);

  return (
    <ViewerStyles isPreviewed={isPreviewed}>
      <section id="folders">folders</section>
      <section id="files">files</section>
      {isPreviewed && <section id="preview">preview</section>}
    </ViewerStyles>
  );
}
