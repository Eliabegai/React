import './App.css';
import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import ComFilhos from './components/basicos/ComFilhos';
import Card from './components/layout/Card';
import Repeticao from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import CondicionalComIf from './components/basicos/CondicionalComIf';
import Pai from './components/comunicacao/direta/Pai';
import Super from './components/comunicacao/indireta/Super';
import Input from './components/form/Input'
import Contador from './components/contadorV1/Contador'
import ContadorV2 from './components/contadorV2/ContadorV2'
import Mega from './components/mega/Mega';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) =>
    <div className='App'>
        <h1>Fundamentos React</h1>

        <div className='Cards'>
            <Card titulo='#12 - Mega Sena' color="#0392cf">
                <Mega qtdeNumero={8}></Mega>
            </Card>
            <Card titulo='#11 - Contador V2' color="#ee4035">
                <ContadorV2 passo={10} valor={100}></ContadorV2>
            </Card>
            <Card titulo='#10 - Contador V1' color="#f37736">
                <Contador passo={10} valor={100}></Contador>
            </Card>
            <Card titulo='#09 - Input' color="#0392cf">
                <Input></Input>
            </Card>
            <Card titulo='#08 - Comunicação Indireta | Super e Sub' color="#7bc043">
                <Super></Super>
            </Card>
            <Card titulo='#07 - Comunicação Direta | Pai e Filho' color="#f37736">
                <Pai sobrenome='Freitas'></Pai>
            </Card>
            <Card titulo='#06 - Condicional com IF' color="#ee4035">
                <CondicionalComIf numero={12}></CondicionalComIf>
            </Card>
            <Card titulo='#05 - Condicional' color="#f37736">
                <Condicional numero={11}></Condicional>
            </Card>
            <Card titulo='#04 - Repetição' color="#fdf498">
                <Repeticao></Repeticao>
            </Card>
            <Card titulo='#03 - Componente com Filhos' color="#7bc043">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carlos</li>
                        <li>Daniel</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card titulo='#02 - Componente com Parâmetro' color="#0392cf">
                <ComParametro titulo='Esse é o Título'
                    subtitulo='Esse é o subtítulo' />
                <ComParametro titulo='Opa'
                    subtitulo='Epa' />
            </Card>
            <Card titulo='#01 - Primeiro Componente' color="#ee4035">
                <Primeiro />
            </Card>
        </div>

    </div>
