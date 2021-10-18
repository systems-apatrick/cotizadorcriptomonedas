import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useCriptomoneda from "../hooks/useCriptomoneda";
import useMoneda from "../hooks/useMoneda";
import Error from "../components/Error";

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Formulario = ({ guardarMoneda, guardarCriptomoneda }) => {
  // state del listado de criptomonedas
  const [listaCripto, guardarCriptomonedas] = useState([]);
  const [error, guardaError] = useState(false);

  const MONEDAS = [
    { codigo: "USD", nombre: "Dolar de Estado Unidos" },
    { codigo: "MXN", nombre: "Peso Mexico" },
    { codigo: "EUR", nombre: "Euro" },
    { codigo: "GBP", nombre: "Libra Esterlina" },
  ];
  // utilizar useMoneda
  const [moneda, SelectMoneda] = useMoneda("Elige tu moneda", "", MONEDAS);
  const [criptomoneda, SelectCripto] = useCriptomoneda(
    "Selecciona tu criptomoneda",
    "",
    listaCripto
  );

  // ejecutar llamado a la API
  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD";
      const resultado = await axios.get(url);
      guardarCriptomonedas(resultado.data.Data);
    };
    consultarAPI();
  }, []);

  // cuando el usuario hace submit
  const cotizarMoneda = (e) => {
    e.preventDefault();

    //   validar si ambos campos estan llenos
    if (moneda === "" || criptomoneda === "") {
      guardaError(true);
      return;
    }

    //   pasar los datos al componente principal
    guardaError(false);
    guardarMoneda(moneda);
    guardarCriptomoneda(criptomoneda);
  };
  return (
    <form onSubmit={cotizarMoneda}>
      {error ? <Error mensaje="Seleccione todos los campos" /> : null}
      <SelectMoneda />
      <SelectCripto />
      <Boton type="submit" value="Calcular" />
    </form>
  );
};

export default Formulario;
