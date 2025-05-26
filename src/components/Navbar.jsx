import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrap = styled.footer`
  position: fixed;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 6.5vh;
  background-color: #08250f;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  z-index: 10;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 3px;
  
  a, button, img {
  -webkit-tap-highlight-color: transparent; 
  -webkit-focus-ring-color: transparent;   
  outline: none;                            
}
`;

const Icon = styled.img`
  max-height: 50px;
  max-width: 50px;
  filter: invert(100%);
  margin-top: 7px;

  &:nth-of-type(1) {
    padding: 5px;
  }
`;

export default function Navbar() {
  return (
    <Wrap>
      <Link to="/">
        <Icon alt="Home Icon" src="/bible-brief-app/home-icon.png" />
      </Link>
      <Link to="/search">
        <Icon alt="Search Icon" src="/bible-brief-app/search-icon.png" />
      </Link>
      <Link to="/newsletter">
        <Icon
          alt="Newsletter Icon"
          src="/bible-brief-app/newsletter-icon.png"
        />
      </Link>
      <Link to="/group">
        <Icon alt="Group Icon" src="/bible-brief-app/community-icon.png" />
      </Link>
      <Link to="/profile">
        <Icon alt="User Icon" src="/bible-brief-app/usernav-icon.png" />
      </Link>
    </Wrap>
  );
}
