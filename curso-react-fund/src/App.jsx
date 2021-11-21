import First from './components/basics/First'
import ComParam from './components/basics/ComParam'
import Frag from './components/basics/fragment'
import Aleatorio from './components/basics/Aleatorio'
import Card from './components/layout/Card'
import './App.css'
import Familia from './components/basics/Familia'
import FamiliaMembro from './components/basics/FamiliaMembro'
import ListaAlunos from './components/Repetição/ListaAlunos'
import TabelaProdutos from './components/Repetição/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'

export default _ =>
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">

        <Card titulo="#10-  Comunicação Indireta " color="#59323C">
             <IndiretaPai></IndiretaPai>
            </ Card>

            <Card titulo="#09-  Comunicação Direta " color="#59323C">
                <DiretaPai/>
            </ Card>

            <Card titulo="#08-  Rederização Condicional " color="#982395">
                <ParOuImpar numero={20}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: 'Tiago' }}></UsuarioInfo>

            </ Card>

            <Card titulo="#07- Teste Repetição " color="#3A9AD9">
                <TabelaProdutos></TabelaProdutos>
            </ Card>

            <Card titulo="#06- Repetição " color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </ Card>

            <Card titulo="#05- Componentes com filho" color="#00C8F8">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Lucas" />
                    <FamiliaMembro nome="Tiago" />
                </Familia>
            </ Card>

            <Card titulo="#04- Desafio aleatorio" color="#FA6900">
                <Aleatorio min={1} max={99} />
            </ Card>

            <Card titulo="#03- Fragmento" color="#E94c6F">
                <Frag />
            </ Card>

            <Card titulo="#02- Com parametro" color="#E8B71A">
                <ComParam
                    titulo="segundo comp"
                    aluno=" tiago "
                    nota={9.3}
                />
            </ Card>

            <Card titulo="#01- Primeiro componente" color="#588C73">
                <First></First>
            </ Card>


        </div>






    </div>

