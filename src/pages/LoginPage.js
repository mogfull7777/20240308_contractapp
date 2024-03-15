import React, { useId, useState } from "react";
import styled from "styled-components";

function LoginPage() {
  const [loginIdentity, setLoginIdentity] = useState(false);
  const id = useId();

  const loginIdentityHandle = (e) => {
    let targeting = e.target.id;

    console.log("******", targeting, loginIdentity);
  };

  return (
    <div>
      <Wrapper>
        <LoginSection>
          <LoginIdentity id={`${id}-identity`}>
            <LoginIdentityList
              id={`${id}-identity1`}
              style={{
                color: loginIdentity ? "#353535" : "#d9d9d9",
              }}
              onClick={loginIdentityHandle}
            >
              사업자 로그인
            </LoginIdentityList>
            <LoginIdentityList
              id={`${id}-identity2`}
              style={{
                color: loginIdentity ? "#353535" : "#d9d9d9",
              }}
              onClick={loginIdentityHandle}
            >
              고객 로그인
            </LoginIdentityList>
            <LoginIdentityList
              id={`${id}-identity3`}
              style={{
                color: loginIdentity ? "#353535" : "#d9d9d9",
              }}
              onClick={loginIdentityHandle}
            >
              비회원 로그인
            </LoginIdentityList>
          </LoginIdentity>
          <InputSettion>
            <InputArea
              id={`${id}-email`}
              placeholder="이메일을 입력해주세요."
            />
            <InputArea
              id={`${id}-password`}
              placeholder="비밀번호를 입력해주세요."
            />
          </InputSettion>
          <LoginBtn>로그인</LoginBtn>
          <LoginHelpSection>
            <LoginMaintain>
              <LoginMaintainChack id={`${id}-checkbox`} type="checkbox" />
              <label htmlFor={`${id}-checkbox`}>로그인 상태 유지</label>
            </LoginMaintain>
            <LoginForget>아이디 ・ 비밀번호를 잊어버리셨나요?</LoginForget>
          </LoginHelpSection>
          <SignupBtn>회원가입</SignupBtn>
        </LoginSection>
      </Wrapper>
    </div>
  );
}

export default LoginPage;

// 로그인 구분 해결하기

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginSection = styled.section`
  width: 31.25rem;
  height: 34.375rem;
`;

const LoginIdentity = styled.ul`
  display: flex;
  justify-content: space-between;
  & :last-child {
    border-right: none;
  }
`;

const LoginIdentityList = styled.li`
  width: calc(100% / 3);
  color: #d9d9d9;
  box-sizing: border-box;
  border-right: 0.063rem solid #d9d9d9;
  cursor: pointer;
  text-align: center;
`;

const InputSettion = styled.section`
  width: 100%;
  margin: 1.875rem 0;
  & :last-child {
    margin-top: 1rem;
  }
`;

const InputArea = styled.input`
  width: 100%;
  box-sizing: border-box;
  border-radius: 3.125rem;
  height: 4.375rem;
  border: none;
  background-color: #d9d9d9;
  padding: 1.25rem;
  font-size: 1.25rem;
  &::placeholder {
    color: #ffffff;
  }
`;

const LoginBtn = styled.button`
  width: 100%;
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

const LoginHelpSection = styled.section`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
`;

const LoginMaintain = styled.form`
  padding: 0.3rem;
`;

const LoginMaintainChack = styled.input`
  border: 0.025rem soild #353535;
  margin-right: 0.4rem;
  accent-color: #353535;
`;

const LoginForget = styled.label`
  cursor: pointer;
  transition: all 0.4s;
  padding: 0.3rem;
  &:hover {
    background: #353535;
    color: #ffffff;
  }
`;

const SignupBtn = styled.button`
  width: 100%;
  box-sizing: border-box;
  border-radius: 3.125rem;
  height: 4.375rem;
  border: none;
  box-shadow: 0px 0px 0px 0.025rem #353535;
  background-color: #ffffff;
  padding: 1.25rem;
  font-size: 1.25rem;
  color: #353535;
  cursor: pointer;
  transition: all 0.4s;
  font-weight: bold;
  &:hover {
    color: #ffffff;
    background: #353535;
    box-shadow: 0px 0px 0px 0.025rem #ffffff;
  }
`;
