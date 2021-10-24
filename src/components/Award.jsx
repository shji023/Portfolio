import React from "react";
import Styled from "styled-components";
import TitleLine from "../assets/images/titleLine.svg";
import AwardIcon from "../assets/images/award.svg";
function Award() {
  return (
    <StacksWrapper>
      <Title>
        <p>Awards</p>
        <img src={TitleLine} alt="" />
      </Title>
      <ContentList>
        <Content>
          <img src={AwardIcon} alt="" />
          <p>성신여자대학교 교내 소프트웨어 경진대회</p>
          <p>2018/08/29</p>
          <p>장려상</p>
        </Content>
        <Content>
          <img src={AwardIcon} alt="" />
          <p>SOPT 28기 해커톤</p>
          <p>2021/05/23</p>
          <p>인기상, 최우수상</p>
        </Content>
        <Content>
          <img src={AwardIcon} alt="" />
          <p>SOPT 28기 APPJAM</p>
          <p>2021/07/17</p>
          <p>최우수상</p>
        </Content>
      </ContentList>
    </StacksWrapper>
  );
}

const StacksWrapper = Styled.div`
  width: 1100px;
  height: 400px;
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
    margin-left: 50px;
  }
`;

const ContentList = Styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = Styled.div`
  display: flex;
  align-items: center;
  img {
    width: 45px;
    height: 45px;
    margin-right: 30px;
  }
  p {
    font-size: 20px;
  }
  p:nth-of-type(1) {
    flex: 1;
  }
  p:nth-of-type(2) {
    flex: 1;
  }
  p:nth-of-type(3) {
    width: 150px;
  }
  margin-bottom: 15px;
`;

export default Award;
