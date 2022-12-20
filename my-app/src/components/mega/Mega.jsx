import React, { useState } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

    const [numeros, setNumeros] = useState(Array(props.qtdeNumero).fill(0));

    function gerarNumerosNaoContido(array) {
        const min = 1;
        const max = 60;
        const novoNumero = parseInt(Math.random() * (max - min)) + 1
        return array.includes(novoNumero) ? gerarNumerosNaoContido(array) : novoNumero
    }

    function gerarNumeros() {
        const novoArray = Array(props.qtdeNumero).fill(0)
        .reduce((a, e) => {
            const novoNumero = gerarNumerosNaoContido(a)
            return [...a, novoNumero]}, []).sort ((a, b) => a - b)
        setNumeros(novoArray)
    }

    return (
        <>
            <h2>Mega da Virada</h2>
            <h3>{numeros.join(' ')}</h3>
            <button onClick={gerarNumeros}>Gerar Número</button>
        </>
    )
}