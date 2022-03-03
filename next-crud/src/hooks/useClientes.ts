import { useEffect, useState } from "react"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import ClienteRepo from "../core/ClienteRepo"
import useVisivel from "./useVisivel"

export default function useClientes(){
    const repo: ClienteRepo = new ColecaoCliente()

    const {tabelaVisivel,
    exibirFormulario,exibirTabela} = useVisivel()

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])
    
  
    useEffect(obterTodos, [])
  
    function obterTodos() {
      repo.obterTodos().then(clientes => {
        setClientes(clientes)
        exibirTabela()
      })
    }
  
    function clienteSelecionado(cliente: Cliente) {
      setCliente(cliente)
      exibirFormulario()
    }
    async function clienteExcluido(cliente: Cliente) {
      await repo.excluir(cliente)
      obterTodos()
    }
    async function salvarCliente(cliente: Cliente) {
      await repo.salvar(cliente)
      obterTodos()
    }
    function novoCliente() {
      setCliente(Cliente.vazio())
      exibirFormulario()
    }
    return {
        clienteSelecionado,
        clienteExcluido,
        salvarCliente,
        novoCliente,
        obterTodos,
        cliente,setCliente,
        clientes,setClientes,
        tabelaVisivel,exibirTabela
    }
}