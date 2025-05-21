import styled from "styled-components";

const FooterWrap = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 8vh;
  background-color: #08250f;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  z-index: 10;
  padding-left: 5px;
  padding-right: 5px;
`;

const FooterIcon = styled.img`
  height: 50px;
  width: 50px;
  filter: invert(90%);

  &:nth-of-type(1) {
  padding: 7px;
}

  &:nth-of-type(2) {
  padding: 6px;
}

  &:nth-of-type(3) {
  padding: 3px;
}

  &:nth-of-type(4) {
  padding: 3px;
}

  &:nth-of-type(5) {
  padding: 5px;
}
`;

export default function Footer() {
  return (
    <FooterWrap>
      <FooterIcon alt="Newsletter Icon" src="/bible-brief-app/home-icon.png" />
      <FooterIcon
        alt="Newsletter Icon"
        src="/bible-brief-app/search-icon.png"
      />
      <FooterIcon
        alt="Newsletter Icon"
        src="/bible-brief-app/newsletter-icon.png"
      />
      <FooterIcon
        alt="Newsletter Icon"
        src="/bible-brief-app/community-icon.png"
      />
      <FooterIcon
        alt="Newsletter Icon"
        src="/bible-brief-app/usernav-icon.png"
      />
    </FooterWrap>
  );
}
