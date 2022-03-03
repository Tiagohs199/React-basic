import Layout from "../../components/Layout";
import { useRouter } from "next/router";

export default function ClientePorCodigo(){

    const router = useRouter()

    return(
            <Layout titulo="navegação dinamica">
                <span>Codigo: {router.query.codigo} </span>

            </Layout>
    )   
}