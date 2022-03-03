
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import useClientes from "../hooks/useClientes";


export default function Home() {

  const {clienteExcluido, clienteSelecionado, novoCliente,
  cliente,clientes,salvarCliente, tabelaVisivel, exibirTabela} = useClientes()


  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-red-400
    text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel  ? (
          <>
            <div className="flex justify-end">
              <Botao cor="green" className="mb-4"
                onClick={novoCliente}>
                Novo Botao</Botao>
            </div>

            <Tabela clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido} />
          </>
        ) : (
          <Formulario cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={exibirTabela} />
        )}
      </Layout>
    </div>
  )
}

