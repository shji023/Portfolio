import React from "react";
import Styled from "styled-components";
import TitleLine from "../assets/images/titleLine.svg";
import CircleIcon from "../assets/images/circle.svg";
import CircleIcon2 from "../assets/images/circle2.svg";
import JsIcon from "../assets/images/js.png";
import TsIcon from "../assets/images/ts.png";
import HtmlIcon from "../assets/images/html.png";
import CssIcon from "../assets/images/css.png";
import ReactIcon from "../assets/images/react.png";
import PythonIcon from "../assets/images/py.png";
import GitIcon from "../assets/images/git.png";
function Stack() {
  return (
    <StacksWrapper>
      <Title>
        <p>Stacks</p>
        <img src={TitleLine} alt="" />
      </Title>
      <ContentList>
        <StackCategory>
          {/* <img src={CircleIcon} alt="" /> */}
          <p>Front-End</p>
          {/* <img src={CircleIcon} alt="" /> */}
        </StackCategory>
        <IconList>
          <img src={JsIcon} alt="" />
          <img src={TsIcon} alt="" />
          <img src={HtmlIcon} alt="" />
          <img src={CssIcon} alt="" />
          <img src={ReactIcon} alt="" />
          {/* <Desc>
            왼쪽 스택을 사용하여 하나의 웹 프로젝트를 개발할 수 있습니다.
            기본적인 기능들을 구현할 수 있으며 까다로운 부분은 구글링이나
            공식문서를 참고하여 수정작업 또는 변경사항 추가를 할 수 있습니다.
          </Desc> */}
        </IconList>
        <StackCategory>
          {/* <img src={CircleIcon2} alt="" /> */}
          <p>Algorithm</p>
          {/* <img src={CircleIcon2} alt="" /> */}
        </StackCategory>
        <IconList>
          <img src={PythonIcon} alt="" />
          {/* <Desc>
            Python을 활용하여 알고리즘을 구현할 수 있습니다. <br />
            시스템 동작 방식을 알고 있으며, 프로젝트를 진행할 수 있습니다.
          </Desc> */}
        </IconList>
        <StackCategory>
          {/* <img src={CircleIcon} alt="" /> */}
          <p>Version Control</p>
          {/* <img src={CircleIcon} alt="" /> */}
        </StackCategory>
        <IconList>
          <img src={GitIcon} alt="" />
          {/* <Desc>
            Python을 활용하여 알고리즘을 구현할 수 있습니다. <br /> 시스템 동작
            방식을 알고 있으며, 프로젝트를 진행할 수 있습니다.
          </Desc> */}
        </IconList>
      </ContentList>
    </StacksWrapper>
  );
}

const StacksWrapper = Styled.div`
  width: 1100px;
  height: 900px;
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
  width: 1100px;
  height: 680px;
  border: 3px solid #a1a1a1;
  border-radius: 20px;
  padding: 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StackCategory = Styled.div`
  display: flex;
  img {
    margin-right: 20px;
  }
  p {
    font-size: 25px;
    margin-right: 20px;
  }
  margin-bottom: 30px;
`;

const IconList = Styled.div`
  display: flex;
  img {
    width: 100px;
    height: 100px;
    margin-right: 30px;
    border-radius: 20px;
  }
  margin-bottom: 50px;
`;

const Desc = Styled.p`
  font-size: 18px;

`;
export default Stack;
