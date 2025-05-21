import styled from "styled-components";

const CardStyle = styled.div`
  width: 80vw;
  height: 20vh;
  background-color:rgb(45, 139, 67);
  margin: 10px 0;
  border-radius: 20px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export default function Card({children}) {
  return (
    <CardStyle>{children}</CardStyle>
  );
}

