import styled from "styled-components";

const HeaderWrap = styled.header`
  background-color: #08250f;
  height: 8vh;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftNav = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
  max-width: 77%;
  max-height: 100%;
  text-align: center;
  font-size: 1.8em;
  font-weight: bolder;
  font-family: sans-serif;
  padding: 0 0 0 3vw;
`;

const CenterNav = styled.div`
  display: flex;
  justify-content: center;
  width: 0vw;
  max-width: 33%;
  max-height: 100%;
`;

const RightNav = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
  max-width: 33%;
  max-height: 100%;
  margin-right: 5vw;
`;

const Logo = styled.img`
  aspect-ratio: 550 / 300;
  width: 20vw;
  height: auto;
`;

const UserIcon = styled.img`
  height: auto;
  max-width: 8vw;
  width: auto;
  display: block;
  object-fit: contain;
  filter: invert(100%);
`;

const BurgerBar = styled.div`
  transform: rotate(90deg);
  font-size: 1.8em;
`;

export default function Header() {
  return (
    <HeaderWrap>
      <LeftNav><p>Welcome back! 👋</p>
      </LeftNav>
      <RightNav>      <Logo  alt="The Bible Brief Logo"
            src="/bible-brief-app/biblebrief-logo.jpg"
       />
      </RightNav>
    </HeaderWrap>
  );
}
