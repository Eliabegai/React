import React from "react"

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    // props é somente leitura!
    // props.titulo = 'Outro Título';
    return (
        <>
            <h3>{props.titulo}</h3>
            <h4>{props.subtitulo}</h4>
        </>
    )
}