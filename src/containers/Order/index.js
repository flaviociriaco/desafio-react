import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

import StarBucks from "../../assets/starbucks.svg";
import Trash from "../../assets/trash.svg";

import { Container, Image, H1, ContainerItens, Button, Orde } from "./styles";

function Order() {
  const [orde, setOrde] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchOrde() {
      const { data: newOrde } = await axios.get("http://localhost:3001/orders");

      setOrde(newOrde);
    }

    fetchOrde();
  }, []);

  async function deleteOrder(ordeId) {
    await axios.delete(`http://localhost:3001/orders/${ordeId}`);
    const newOrde = orde.filter((orde) => orde.id !== ordeId);
    setOrde(newOrde);
  }

  function goBackPage() {
    history.push("/");
  }

  return (
    <Container>
      <Image alt="logo-burguer" src={StarBucks} />

      <H1>Pedidos</H1>

      <ContainerItens>
        <ul>
          {orde.map((orde) => (
            <Orde key={orde.id}>
              <div>
                <p> {orde.order}</p> <p>{orde.clientName}</p>
              </div>
              <button onClick={() => deleteOrder(orde.id)}>
                <img src={Trash} alt="lata-de-lixo" />
              </button>
            </Orde>
          ))}
        </ul>

        <Button onClick={goBackPage}>Voltar</Button>
      </ContainerItens>
    </Container>
  );
}

export default Order;
