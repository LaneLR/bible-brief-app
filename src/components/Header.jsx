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
  width: 25vw;
  max-width: 33%;
  max-height: 100%;
`;

const CenterNav = styled.div`
  display: flex;
  justify-content: center;
  width: 10vw;
  max-width: 33%;
  max-height: 100%;
`;

const RightNav = styled.div`
  display: flex;
  justify-content: center;
  width: 25vw;
  max-width: 33%;
  max-height: 100%;
`;

const Logo = styled.img`
  aspect-ratio: 550 / 300;
  width: 18vw;
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
      <LeftNav>
        <BurgerBar>|||</BurgerBar>
      </LeftNav>
      <CenterNav>
        <Logo  alt="The Bible Brief Logo"
            src="/bible-brief-app/biblebrief-logo.jpg"
       />
      </CenterNav>
      <RightNav>
        <UserIcon alt="The Bible Brief Logo"src="/bible-brief-app/user-icon.png"/>
      </RightNav>
    </HeaderWrap>
  );
}
