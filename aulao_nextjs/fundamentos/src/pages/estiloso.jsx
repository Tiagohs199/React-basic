import style from '../styles/Estiloso.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Estiloso() {
    return (
        <Layout titulo="exemplo de css modular">
            <div className={style.roxo}>
                <h1>Estilo usando CSS modular</h1>
            </div>
        </Layout>


    )
}