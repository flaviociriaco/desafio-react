import styled from "styled-components";

export const Container = styled.div`
  background-color: #0a0a10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  
`;

export const Image = styled.img`
  margin-top: 11px;
  width: 342px;
  height: 265px;
`;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
`;



export const InputLabel = styled.p`
  width: 129px;
  height: 22px;
  line-height: 22px;
  color: #eeeeee;
  font-size: 18px;
  font-style: bold;
  letter-spacing: -0.41px;
  vertical-align: center;
  line-height: 104%;
  margin-left: 15px;
`;

export const Input = styled.input`
  width: 342px;
  height: 58px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  margin-bottom: 30px;

  font-style: ligth;
  font-size: 18px;
  line-height: 21px;
  line-height: 100%;
  vertical-align: top;
  color: #ffffff;
  padding-left: 15px;
  border: none;
  cursor: pointer;
  outline: none;
`;

export const Button = styled.button`
  height: 68px;
  width: 342px;
  background: #d93856;
  margin-top: 30px;
  border: none;
  color: #ffffff;
  cursor: pointer;

  margin-bottom: 51px;
  font-size: 17px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;








