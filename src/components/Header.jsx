import React from "react";
import Styled from "styled-components";

function Header() {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <Title>Hyun Ji Young</Title>
        <div>
          <Category>About</Category>
          <Category>Stacks</Category>
          <Category>Awards</Category>
          <Category>Experience</Category>
          <Category>Projects</Category>
        </div>
      </HeaderContent>
    </HeaderWrapper>
  );
}

const HeaderWrapper = Styled.header`
  width: 100%;
  height: 72px;
  background-color: #242424;
`;

const HeaderContent = Styled.div`
  width: 1100px;
  height: 72px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const Title = Styled.div`
  color: white;
  font-size: 32px;
  font-weight: bold;
  flex: 1;
`;

const Category = Styled.button`
  border: none;
  background-color: transparent;
  color: white;
  font-size: 20px;
  font-weight: bold;
  :hover {
    color: #CCD2F0;
  }
`;
export default Header;
