export default function ComParam(props) {

    const status = props.nota >= 7 ? 'aprovado' : 'reprovado'

    return <div>
        <h2>{props.titulo}</h2>
        <h3>
            {props.aluno}
            {props.nota}
            <strong> {status} </strong>
        </h3>

    </div>
}