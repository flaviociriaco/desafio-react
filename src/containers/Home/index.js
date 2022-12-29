import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

import Burguer from "../../assets/burguer.svg";

import { H1 } from "../../components/Title/styles";

import {
  Container,
  Image,
  ContainerItens,
  InputLabel,
  Input,
  Button,
} from "./styles";

const App = () => {
  const [orde, setOrde] = useState([]);
  const history = useHistory();
  const inputOrder = useRef();
  const inputClientName = useRef();

  async function addNewUser() {
    const { data: newOrde } = await axios.post("http://localhost:3001/orders", {
      order: inputOrder.current.value,
      clientName: inputClientName.current.value,
    });
    setOrde([...orde, newOrde]);

    history.push("/pedidos");
  }

  return (
    <Container>
      <Image alt="logo-burguer" src={Burguer} />

      <H1>Faça seu pedido</H1>

      <ContainerItens>
        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder="Pedido" />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputClientName} placeholder="Nome" />

        <Button onClick={addNewUser} placeholder="Novo Pedido">
          Novo Pedido
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default App;
