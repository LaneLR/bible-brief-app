import styled from "styled-components";
import CardsWrapper from "./CardsWrapper";

const Bodystyle = styled.main`
  background-color: inherit;
  overflow-y: auto;
  flex: 1;
  min-height: 80vh;
`;

export default function Body({ children }) {
  return <Bodystyle>{children}</Bodystyle>;
}
