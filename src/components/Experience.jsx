import React from "react";
import Styled from "styled-components";
import TitleLine from "../assets/images/titleLine.svg";

function Experience() {
  return (
    <StacksWrapper>
      <Title>
        <p>Experience</p>
        <img src={TitleLine} alt="" />
      </Title>
      <ContentList></ContentList>
    </StacksWrapper>
  );
}

const StacksWrapper = Styled.div`
  width: 1100px;
  height: 72px;
`;

const Title = Styled.div`
  width: 180px;
  color: #242424;
  font-size: 60px;
  font-weight: bold;
  margin: 0 auto 50px;
  display: flex;
  flex-direction: column;
  img {
    width: 100px;
    margin-top: 10px;
    margin-left: 35px;
  }
`;

const ContentList = Styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Experience;
