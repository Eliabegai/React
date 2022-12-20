import React,{useState} from 'react';
import Sub from './Sub';

// useState = consegue criar um dado na aplicação, um valor que pode ser modificado.
// propriedades até agora são apenas de leitura

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

    const [texto, setTexto] = useState(0)
    const [num, setNum] = useState(0)

    function quandoClicar(valorGerado, texto) {
        setNum(valorGerado);
        setTexto(texto);
    }

    return (
        <div>
            <h4>{texto}: {num}</h4>
            <Sub onClicar={quandoClicar}></Sub>
        </div>
    )
}
