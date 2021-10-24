import React from "react";
import Header from "./components/Header";
import Stacks from "./components/Stack";
import Styled from "styled-components";
import About from "./components/About";
import Awards from "./components/Award";
import Experience from "./components/Experience";
import Projects from "./components/Project";

function App() {
  return (
    <div>
      <Header></Header>
      <Main>
        <Content>
          <Title>현지영 Portfolio</Title>
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
    </div>
  );
}

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
