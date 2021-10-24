import React from "react";
import Styled from "styled-components";
import TitleLine from "../assets/images/titleLine.svg";
import GithubIcon from "../assets/images/Group_1.jpg";
import EduIcon from "../assets/images/Group_2.jpg";
import EmailIcon from "../assets/images/Group_3.jpg";
import blogIcon from "../assets/images/Group_4.jpg";

function About() {
  return (
    <AboutWrapper>
      <Title>
        <p>About</p>
        <img src={TitleLine} alt="" />
      </Title>
      <ContentList>
        <Content>
          <img src={EduIcon} alt="" />
          <p>Education</p>
          <p>성신여자대학교</p>
          <p>정보시스템공학과</p>
        </Content>
        <Content>
          <img src={GithubIcon} alt="" />
          <p>Github</p>
        </Content>
        <Content>
          <img src={EmailIcon} alt="" />
          <p>Email</p>
          <p>shyunji023@gmail.com</p>
        </Content>
        <Content>
          <img src={blogIcon} alt="" />
          <p>Velog</p>
        </Content>
      </ContentList>
    </AboutWrapper>
  );
}

const AboutWrapper = Styled.div`
  width: 1100px;
  height: 500px;
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

const Content = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-bottom: 20px;
  }
  p {
    font-size: 16px;
    color: #5e5e5e;
    font-weight: bold;
  }
  p:nth-of-type(1) {
    font-size: 24px;
    color: #242424;
  }
`;
export default About;
