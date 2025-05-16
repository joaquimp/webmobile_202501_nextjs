"use client"

import { useEffect, useState } from "react";

export default function Notionalize() {
    const [paises, setPaises] = useState([]);
    const [nome, setNome] = useState("Manuel");
    const [erro, setErro] = useState(null);

    const buscar = async () => {
        try {
            const resp = await fetch("https://api.nationalize.io/?name="+nome);
            const json = await resp.json();
            if(json.error) {
                setErro(json.error);
                setPaises([]);
            } else {
                setPaises(json.country);
                setErro(null);
            }
        }catch(error) {
            setErro("Deu ruim no fetch");
        }
    }

    useEffect(() => {
        buscar();
    },[]);

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
            {erro && <h2>{erro}</h2>}
            <section className="paises">
                {paisesJSX}
            </section>
            <br/>
            <>
                Nome: <input type="text" defaultValue={nome} onChange={mudaNome} />
                <br/>
                <button onClick={buscar}>Buscar</button>
            </>
        </main>
    )
}