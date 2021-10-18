import React from "react";
import styled from "styled-components";

const ResultadoDiv = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  background-color: #fff;
  padding-bottom: 10px;
  border-radius: 10px;
  margin-bottom: 50px;
`;
const Parrafo = styled.p`
  font-size: 18px;
  margin-left: 20px;
  margin-top: 1px;
  margin-bottom: 10px;
  span {
    font-weight: bold;
  }
`;
const Precio = styled.p`
  font-size: 30px;
  text-align: center;
  padding: 20px;
  span {
    font-weight: bold;
  }
`;

const Cotizacion = ({ resultado }) => {
  if (Object.keys(resultado).length === 0) return null;
  return (
    <ResultadoDiv>
      <Precio>
        El precio es: <span>{resultado.PRICE}</span>
      </Precio>
      <Parrafo>
        Precio más alto del día: <span>{resultado.HIGHDAY}</span>
      </Parrafo>
      <Parrafo>
        Precio más bajo del día: <span>{resultado.LOWDAY}</span>
      </Parrafo>
      <Parrafo>
        Variación de las últimas 24 horas:{" "}
        <span>{resultado.CHANGEPCT24HOUR}</span>
      </Parrafo>
      <Parrafo>
        última actualización: <span>{resultado.LASTUPDATE}</span>
      </Parrafo>
    </ResultadoDiv>
  );
};

export default Cotizacion;
