import styled from "styled-components";
import CardsWrapper from "./CardsWrapper";

const Body = styled.main`
  background-color: beige;
  overflow-y: auto;
  flex: 1;
  min-height: 80vh;
`;

export default function Main({children}) {
  return (
    <Body>
      <CardsWrapper />
    </Body>
  );
}
