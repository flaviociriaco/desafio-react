import styled from "styled-components";

export const Container = styled.div`
  background-color: #0a0a10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  height: 100%;
  min-height: 100vh;
`;

export const Image = styled.img`
  margin-top: 11px;
  width: 200px;
  height: 300px;
`;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
`;

export const H1 = styled.h1`
  font-size: 25px;
  line-height: 30px;
  font-style: bold;
  color: #ffffff;
`;

export const Button = styled.button`
  height: 68px;
  width: 342px;
  background: rgba(255, 255, 255, 0.14);
  margin-top: 130px;
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

export const Orde = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;

  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;

  width: 342px;
  height: 101px;

  border: none;
  outline: none;

  cursor: pointer;

  p {
    color: #ffffff;
    display: flex;
    flex-direction: column;
    width: 121px;
    height: 30px;

    font-size: 18px;
    width: 188px;
    margin-right: 50px;
    margin-top: 5px;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;
