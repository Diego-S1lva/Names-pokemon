import React from "react";


export default function Cartas({name, url, type}){

    {console.log('Cartas recebeu:', { name, url, type })}
    return(
    <div className="pokemon">
        <h2>
            {name && <p>Nome: {name}</p>}
            {type && <p>Tipo: {type}</p>}
            {url && <p>{url}</p>}
        </h2>
    </div>
    )
}