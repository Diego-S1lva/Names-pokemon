import React, { useState } from "react";
import { getPokemons } from "./PokeService";
import './Nomes.modules.css';


export default function Mostrarnomes(){
    const [pokemons, setPokemons] = useState([]);
    const [letra, setLetra] = useState('');
    const [erro, setErro] = useState('');
        


    const envio = (event) =>{
        const{name, value} = event.target;
        if (name === 'letra') {
            setLetra(value);
        }
        console.log(event.target.value);

    }
    const aposEnvio =  async (event) =>{
        event.preventDefault();
        if (!letra) {
            setErro('Digite outra letra');
        }
        else{
            console.log('Pokemon encontrado');
            setErro('');
        }
    const dadosDosPokemons = await getPokemons();
    const pokemonsFiltrados = dadosDosPokemons.filter(
    d => d.name.charAt(0).toLowerCase() === letra.toLowerCase());

    if (pokemonsFiltrados.length === 0) {
        setErro(`Na lista não tem nenhum pokemon com essa letra, '${letra}'`);
    }
    else{
        setErro('');
    }


    setPokemons(pokemonsFiltrados);
    }
        return(
            <div className="name">
            <form className="formletter" onSubmit={aposEnvio}>
            <input className="inputletter" type="text" name="letra" value={letra} onChange={envio}/>
            <button className="button-54" type="Submit">Procurar</button>
            
            <label className="nomes">
            {pokemons.map((pokemon, index) => (
                <p key={index}>
                    {pokemon.name}
                    </p>))}
                {erro && <p>{erro}</p>}
                </label>
            </form>
            </div>
        )
    }

