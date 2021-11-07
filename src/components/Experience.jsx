import React from "react";
import Styled from "styled-components";
import TitleLine from "../assets/images/titleWhiteLine.svg";
import Card from "./Card";
import soptLogo from "../assets/images/soptLogo.png";
import internLogo from "../assets/images/internLogo.png";
function Experience() {
  return (
    <ExperienceWrapper>
      <Title>
        <p>Experience</p>
        <img src={TitleLine} alt="" />
      </Title>
      <Content>
        {cardData.map((card) => (
          <Card card={card} key={card.id} />
        ))}
      </Content>
    </ExperienceWrapper>
  );
}

const ExperienceWrapper = Styled.div`
  width: 100%;
  height: 750px;
  background-color: #ff9fcc;
  margin-bottom: 100px;
`;

const Title = Styled.div`
  width: 300px;
  color: white;
  font-size: 60px;
  font-weight: bold;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  img {
    width: 100px;
    margin-top: 10px;
    margin-left: 100px;
  }
`;

const Content = Styled.div`
  width: 1100px;
  height: 700px;
  margin: 100px auto;
  display: flex;
  justify-content: space-between;
`;

const cardData = [
  {
    id: 1,
    logo: soptLogo,
    title: "SOPT 28기 WEB part",
    category: ["대외활동", "동아리"],
    desc1:
      "웹 파트에서 진행하는 8번의 세미나를 통해 전반적인 HTML, CSS,Javascript에 대해 학습하고 React 라이브러리를 활용한 다양한 과제를 수행했습니다.",
    desc2: "자바스크립트 스터디를 진행하였습니다",
    desc3:
      "무박 2일로 진행되는 해커톤에도 참가하여 기획, 디자인, 서버파트와 협력하며 주어진 짧은 시간 안에 한 개의 프로젝트를 완성해 내는 경험을 했습니다.",
  },
  {
    id: 2,
    logo: internLogo,
    title: "차세대융합기술연구원 인턴",
    category: ["인턴"],
    desc1:
      "실시간 영상 센서 획득 및 로봇제어와 Mobile Robot을 활용한 ROS 기반 시뮬레이션 기술 연구를 수행했습니다. Robot Arm, RealSense카메라 와 Python OpenCV라이브러리를 활용하여 Object Detection을 통해 로봇을 제어하는 프로그램을 개발하였습니다.",
    desc2:
      "모바일 로봇에 Lidar를 부착하여 ROS와 ICP 알고리즘을 활용한 실내 Mapping을 구현했습니다.",
    desc3: "인턴 성과 발표회를 진행하였습니다. ",
  },
];
export default Experience;
