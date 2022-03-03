import Layout from "../components/Layout";
import { useState, useEffect } from "react";

export default function Estado(){
    let numero = 3

    const[state, setState] =  useState(3)


    
    return(
        <Layout titulo='Componente com estado'>
            <span>{state}</span>
            <button onClick={() => setState(state +1)}>Incrementar</button>
        </Layout>
    )
}