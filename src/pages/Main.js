import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Main() {
  const navi = useNavigate();

  return (
    <div>
      <Title>계약서가 필요하신가요?</Title>
      <Title>
        <BoldText>컨.라</BoldText>를 이용해보세요!
      </Title>
      <StartBtn onClick={() => navi("/login")}>시작하기</StartBtn>
    </div>
  );
}

export default Main;

const Title = styled.p`
  font-size: 7rem;
`;

const BoldText = styled.span`
  font-weight: bolder;
`;

const StartBtn = styled.button`
  width: 18rem;
  box-sizing: border-box;
  border-radius: 3.125rem;
  height: 4.375rem;
  border: none;
  box-shadow: 0px 0px 0px 0.025rem #ffffff;
  background-color: #353535;
  padding: 1.25rem;
  font-size: 1.25rem;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.4s;
  font-weight: bold;
  &:hover {
    color: #353535;
    background: #ffffff;
    box-shadow: 0px 0px 0px 0.025rem #353535;
  }
`;
