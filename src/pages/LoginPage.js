import React, { useId, useRef, useState } from "react";
import styled from "styled-components";

function LoginPage() {
  const id = useId();

  const identityRefEmail = useRef(null);
  const identityRefPassword = useRef(null);
  const notIdentityRefNumber = useRef(null);
  const notIdentityRefPhone = useRef(null);
  const LoginHelpSectionRef = useRef(null);

  const [loginIdentity, setLoginIdentity] = useState(`고객 로그인`);

  const identityHandle = (identityName) => {
    if (identityName === `비회원 로그인`) {
      setLoginIdentity(identityName);
      LoginHelpSectionRef.current.style.visibility = "hidden";
      identityRefEmail.current.style.display = "none";
      identityRefPassword.current.style.display = "none";
      notIdentityRefNumber.current.style.display = "block";
      notIdentityRefPhone.current.style.display = "block";
    } else {
      setLoginIdentity(identityName);
      LoginHelpSectionRef.current.style.visibility = "visible";
      identityRefEmail.current.style.display = "block";
      identityRefPassword.current.style.display = "block";
      notIdentityRefNumber.current.style.display = "none";
      notIdentityRefPhone.current.style.display = "none";
    }
  };

  return (
    <div>
      <Wrapper>
        <LoginSection>
          <LoginIdentity>
            {[`사업자 로그인`, `고객 로그인`, `비회원 로그인`].map(
              (identityName, index) => (
                <LoginIdentityList
                  key={`${id}-identity-${index}`}
                  id={identityName}
                  style={{
                    color:
                      loginIdentity === identityName ? "#353535" : "#d9d9d9",
                  }}
                  onClick={() => {
                    identityHandle(identityName);
                  }}
                >
                  {identityName}
                </LoginIdentityList>
              )
            )}
          </LoginIdentity>
          <InputSettion>
            <InputArea
              id={`${id}-email`}
              ref={identityRefEmail}
              placeholder="이메일을 입력해주세요."
            />
            <InputArea
              id={`${id}-password`}
              ref={identityRefPassword}
              placeholder="비밀번호를 입력해주세요."
            />
            <InputArea
              id={`${id}-number`}
              ref={notIdentityRefNumber}
              placeholder="전달받은 번호를 입력해주세요."
              style={{ display: "none" }}
            />
            <InputArea
              id={`${id}-phone`}
              ref={notIdentityRefPhone}
              placeholder="전화번호를 입력해주세요."
              style={{ display: "none" }}
            />
          </InputSettion>
          <LoginBtn>로그인</LoginBtn>
          <LoginHelpSection ref={LoginHelpSectionRef}>
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
  margin-bottom: 1.7rem;

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

const InputSettion = styled.form`
  width: 100%;
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
  margin-bottom: 1rem;
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
  box-shadow: 0px 0px 0px 0.055rem #353535;
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
    box-shadow: 0px 0px 0px 0.055rem #ffffff;
  }
`;
