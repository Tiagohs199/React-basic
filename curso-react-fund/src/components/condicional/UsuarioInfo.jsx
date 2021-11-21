import _if, { Else } from "./if"

export default props => {

    const usuario = props.usuario || {}
    return (

        <div>
            <_if test={usuario && usuario.nome}>
                Seja Bem vindo <strong>{usuario.nome}</strong>
                <Else>
                    Seja bem vindo <strong>Brodi</strong>
                </Else>
            </_if>

            {/* <_if test={!usuario || !usuario.nome}>
                Seja Bem vindo <strong>BRO</strong>
                <Else>
                    Seja bem vindo <strong>Brodi</strong>
                </Else>
            </_if> */}

        </div>
    )
}