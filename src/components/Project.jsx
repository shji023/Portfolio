import React from "react";
import Styled from "styled-components";
import TitleLine from "../assets/images/titleLine.svg";
import o2 from "../assets/images/o2.png";
function Project() {
  return (
    <ProjectWrapper>
      <Title>
        <p>Projects</p>
        <img src={TitleLine} alt="" />
      </Title>
      <ContentList>
        <ProjectTitle>Open Together 웹사이트</ProjectTitle>
        <Period>2021.06.26 ~ 12인 팀프로젝트(front-end 4인)</Period>
        <ProjectContent>
          <img src={o2} alt="" />
          <ProjectDetail>
            <p>
              예비 창업가를 대상으로 한 회고 커뮤니티 서비스 입니다. <br /> 제공
              서비스로는 <br /> 오늘의 나를 돌아보는 시간, 오늘의 회고 챌린지
              나는 성장하는 CEO,
              <br /> 나를 이야기 하는 시간, O2 Concert <br />가 있습니다.
            </p>
            <p>
              HTML, CSS와 함께 타입스크립트를 사용했으며 리액트 라이브러리를
              활용하였습니다. <br /> 중복되는 컴포넌트가 많다고 판단, 아토믹
              디자인을 도입했습니다. 실제로 사용자를 유입할 수 있는 서비스를
              만들기 위해 Next.js를 기반으로 제작하였습니다. <br />
              타입스크립트를 능숙하게 사용할 수 있게 하고 리액트 관련 기술
              습득에 집중하였습니다.
            </p>
            <ProjectDesc>
              <p>주요 기능</p>
              <p>
                로그인/회원가입, 회원 정보 관리, 회고록 작성,
                <br /> 콘서트/공지사항 업로드 및 열람, 댓글/스크랩/좋아요
              </p>
            </ProjectDesc>
            <ProjectDesc>
              <p>담당한 부분</p>
              <p>[Front-End] ShareTogether, 공지사항, 푸터구현</p>
            </ProjectDesc>
            <ProjectDesc>
              <p>Github</p>
              <a href="https://github.com/Team-O2/Front-end">Team-O2</a>
            </ProjectDesc>
            <ProjectDesc>
              <p>도메인</p>
              <a href="https://www.opentogether-o2.com/">Open Together</a>
            </ProjectDesc>
            <ProjectDesc>
              <p>사용 기술</p>
              <p>React, TypeScript, Next.js</p>
            </ProjectDesc>
          </ProjectDetail>
        </ProjectContent>
      </ContentList>
    </ProjectWrapper>
  );
}

const ProjectWrapper = Styled.div`
  width: 1100px;
  height: 1000px;
`;

const Title = Styled.div`
  width: 200px;
  color: #242424;
  font-size: 60px;
  font-weight: bold;
  margin: 0 auto 50px;
  display: flex;
  flex-direction: column;
  img {
    width: 100px;
    margin-top: 10px;
    margin-left: 60px;
  }
`;

const ContentList = Styled.div`
  width: 1100px;
  height: 800px;
  border: 3px solid #a1a1a1;
  border-radius: 20px;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'AppleSDGothic';
`;

const ProjectTitle = Styled.div`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Period = Styled.div`
  font-family: 'HomepageBaukasten';
  font-size: 18px;
  color: #a1a1a1;
  margin-bottom: 60px;
`;

const ProjectContent = Styled.div`
  font-size: 18px;
  img {
    height: 550px;
    margin-right: 50px;
  }
  display: flex;
`;
const ProjectDetail = Styled.div`
  width: 500px;
  word-break: keep-all;
  & > p:nth-of-type(2) {
    margin-bottom: 30px;
  }
`;
const ProjectDesc = Styled.div`
  display: flex;
  font-size: 18px;

  p {
    margin-bottom: 15px;
  }
  p:first-child {
    width: 100px;
    font-weight: bold;
  }
  a {
    text-decoration: none;
    color: #559402;
  }
`;

export default Project;
