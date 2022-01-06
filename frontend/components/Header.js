import { useState } from "react";
import styled from "styled-components";

import Search from "../components/Search";
import CardViewIcon from "./Icons/CardViewIcon";
import ListViewIcon from "./Icons/ListViewIcon";

const HeaderStyles = styled.section`
  display: flex;
  align-items: flex-end;
  column-gap: 2.5rem;

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 1.5rem;
  }
`;

export default function Header() {
  const [isListView, setIsListView] = useState(false);

  return (
    <HeaderStyles>
      <Search />

      <div>
        <div onClick={() => setIsListView(false)}>
          <CardViewIcon active={!isListView} />
        </div>
        <div onClick={() => setIsListView(true)}>
          <ListViewIcon active={isListView} />
        </div>
      </div>
    </HeaderStyles>
  );
}
