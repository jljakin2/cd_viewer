import styled from "styled-components";

import FolderCard from "../components/FolderCard";
import FileCard from "../components/FileCard";
import Search from "../components/Search";
import CardViewIcon from "../components/Icons/CardViewIcon";
import ListViewIcon from "../components/Icons/ListViewIcon";

const HomeStyles = styled.main`
  padding: 4rem 5rem;

  & section:not(:last-child) {
    margin-bottom: 5rem;
  }
`;

export default function Home() {
  return (
    <HomeStyles>
      <section>
        <Search />
        <CardViewIcon />
        <ListViewIcon />
      </section>

      <section>
        <h1>Recent Files</h1>
        <FileCard />
        <FileCard />
        <FileCard />
      </section>

      <section>
        <h1>Folders</h1>
        <FolderCard />
        <FolderCard />
        <FolderCard />
      </section>

      <section>
        <h1>Boats</h1>
        <FolderCard />
        <FolderCard />
        <FolderCard />
      </section>
    </HomeStyles>
  );
}
