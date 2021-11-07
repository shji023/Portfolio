import React from "react";
import Styled from "styled-components";

function Card({ card }) {
  const { logo, title, category, desc1, desc2, desc3 } = card;
  return (
    <CardWrapper>
      <Title>
        <img src={logo} alt="" />
        <p>{title}</p>
      </Title>
      <Category>
        <p>{category[0]}</p>
        {category[1] && <p>{category[1]}</p>}
      </Category>
      <Detail>
        <ul>
          <li>{desc1}</li>
          <li>{desc2}</li>
          <li>{desc3}</li>
        </ul>
      </Detail>
    </CardWrapper>
  );
}

const CardWrapper = Styled.div`
  width: 500px;
  height: 400px;
  background-color: white;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, 
  rgba(0, 0, 0, 0.07) 0px 2px 4px, 
  rgba(0, 0, 0, 0.07) 0px 4px 8px, 
  rgba(0, 0, 0, 0.07) 0px 8px 16px, 
  rgba(0, 0, 0, 0.07) 0px 16px 32px, 
  rgba(0, 0, 0, 0.07) 0px 32px 64px;
  padding: 30px;
  box-sizing: border-box;
  font-family: 'AppleSDGothic';
`;

const Title = Styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  font-family: 'HomepageBaukasten';
  p {
    font-size: 28px;
    margin-left: 10px;
    font-weight: bold;
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  margin-bottom: 10px;
`;

const Category = Styled.div`
  display: flex;
  p {
    width: 80px;
    height: 30px;
    background-color: #960096;
    color: white;
    border-radius: 30px;
    text-align: center;
    line-height: 30px;
    margin-right: 15px;
    font-weight: bold;
  }
  p:nth-of-type(2) {
    background-color: #ff0080;
  }
  margin-bottom: 25px;
`;

const Detail = Styled.div`
  ul {
    padding-left: 20px;
  }
  li {
    margin-bottom: 15px;
  }
  color: #3d3d3d;
  word-break:keep-all;
`;

export default Card;
