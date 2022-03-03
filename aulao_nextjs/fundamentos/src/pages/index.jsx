import Link from "next/link"
import Navegasor from "../components/Navegador"

export default function Inicio() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height:'100vh'
        }}>
            <Navegasor texto="Estiloso" destino="/estiloso"/>
            <Navegasor texto="Exemplo" destino="/exemplo" cor="crimson"/>
            <Navegasor texto="Navegacao 01" destino="/navegacao" cor="green"/>
            <Navegasor texto="Navegacao 02" destino="/cliente/123" cor="red"/>
            <Navegasor texto="Navegacao 03" destino="/estado" cor="blue"/>
            <Navegasor texto="Integração API" destino="/integracao" cor="blue"/>
            <Navegasor texto="Conteudo estatico" destino="/estatico" cor="pink"/>

        </div>
    )
} 