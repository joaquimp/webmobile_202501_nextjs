"use client"

import { useState } from "react";

export default function Notionalize() {
    const [paises, setPaises] = useState([]);
    const [nome, setNome] = useState("Joaquim");

    const buscar = async () => {
        console.log(nome);
        const resp = await fetch(`https://api.nationalize.io/?name=${nome}`);
        const json = await resp.json();
        setPaises(json.country);
    }

    const paisesJSX = paises.map((p) => {
        return (
            <div className="pais">
                País: {p.country_id} ({(p.probability*100).toFixed(2)}%)
            </div>
        )
    })

    const mudaNome = (e) => {
        const novoNome = e.target.value;
        setNome(novoNome);
    }

    return (
        <main>
            <h1>Lista de Paises</h1>
            <section className="paises">
                {paisesJSX}
            </section>
            <br/>
            <>
                Nome: <input type="text" value={nome} onChange={mudaNome} />
                <br/>
                <button onClick={buscar}>Buscar</button>
            </>
        </main>
    )
}