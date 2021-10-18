import React, { Fragment, useState } from "react";
import styled from "styled-components";

const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1.2rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
`;
const useCriptomoneda = (label, stateInicial, opciones) => {
  // state de nuestro custom hook
  const [state, actualizarState] = useState(stateInicial);

  const SelectCripto = () => {
    return (
      <Fragment>
        <Label>{label}</Label>
        <Select onChange={(e) => actualizarState(e.target.value)} value={state}>
          <option value="">-- Seleccione una moneda-</option>
          {opciones.map((opcion) => (
            <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Internal}>
              {opcion.CoinInfo.FullName}
            </option>
          ))}
        </Select>
      </Fragment>
    );
  };

  // retornar state, interfaz y funcion que modifica el state
  return [state, SelectCripto];
};
export default useCriptomoneda;
