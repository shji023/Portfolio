import React from "react";
import Header from "./components/Header";
import Stacks from "./components/Stack";
import Styled, { keyframes } from "styled-components";
import About from "./components/About";
import Awards from "./components/Award";
import Experience from "./components/Experience";
import Projects from "./components/Project";

function App() {
  return (
    <>
      <Header></Header>
      <Main>
        <Content>
          <Title>
            현지영{" "}
            <Wrapper>
              {reactArray.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </Wrapper>
          </Title>

          <Intro>
            세상을 바꿀 서비스를 만드는 개발자가 되고 싶습니다.
            <br /> 문제에 대해 호기심을 가지고 접근하며 완성도 높은 코드를
            작성하기위해
            <br /> 끊임없이 노력하는 개발자가 되도록 하겠습니다.
          </Intro>
        </Content>
      </Main>
      <Container>
        <About></About>
        <Stacks></Stacks>
        <Awards></Awards>
        <Experience></Experience>
        <Projects></Projects>
      </Container>
    </>
  );
}

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-100px); }
  25% { opacity: 1; transform: translateY(0px); }
  75% { opacity: 1; transform: translateY(0px); }
  100% { opacity: 0; transform: translateY(-100px); }
`;
const Wrapper = Styled.span`
  display: inline-block;

  span {
    opacity: 0;
    display: inline-block;
    animation-name: ${animation};
    animation-duration: 6s;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
  }
  span:nth-child(1) {
    animation-delay: 0.1s;
  }
  span:nth-child(2) {
    animation-delay: 0.2s;
  }
  span:nth-child(3) {
    animation-delay: 0.3s;
  }
  span:nth-child(4) {
    animation-delay: 0.4s;
  }
  span:nth-child(5) {
    animation-delay: 0.5s;
  }
  span:nth-child(6) {
    animation-delay: 0.6s;
  }
  span:nth-child(7) {
    animation-delay: 0.7s;
  }
  span:nth-child(8) {
    animation-delay: 0.8s;
  }
  span:nth-child(9) {
    animation-delay: 0.9s;
  }
  span:nth-child(10) {
    animation-delay: 1s;
  }
`;
const reactArray = "Portfolio".split("");

const Main = Styled.main`
  width: 100%;
  height: 588px;
  background-color: #CCD2F0;
  display: flex;
  margin-bottom: 100px;
`;

const Content = Styled.div`
  width: 1100px;
  height: 300px;
  margin: auto;
`;

const Title = Styled.p`
  color: white;
  font-weight: bold;
  font-size: 80px;
  margin-bottom: 50px;
`;

const Intro = Styled.p`
  margin: 0 auto;
  color: #3d3d3d;
  font-size: 24px;
  font-weight: bold;
  line-height: 2;
`;

const Container = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
