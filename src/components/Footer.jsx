import styled from "styled-components"

const FooterWrap = styled.footer`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  height: 10vh;
  padding: 1vh 0 0 0;
`;

const FooterFirstPhrase  = styled.p`
  font-weight: 600;
  font-size: large;
`

const FooterSecondPhrase  = styled.p`
  font-weight: 600;
  font-size: small;
`


export default function Footer() {
    return (
        <FooterWrap>
            <FooterFirstPhrase>TheBibleBrief.org</FooterFirstPhrase>
            <FooterSecondPhrase>Copyright © 2025 The Bible Brief - All Rights Reserved.</FooterSecondPhrase>
        </FooterWrap>
    )
}
