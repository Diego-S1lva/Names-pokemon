import React, { Fragment, useState } from "react";
import Cartas from "./Cartas";
export default function CadastroCartas(){
    const [formNamePokemon, setFormNamePokemon] = useState('');
    const [formUrl, setFormUrl] = useState('');
    const [formType, setFormType] = useState('');

    const [displayedNamepokemon, setDipslayedNamePokemon] = useState('');
    const [displayedUrl, setDisplayedUrl] = useState('');
    const [displayedType, setDisplayedType] = useState('');
    const [error, setError] = useState('');

const envio = (event) => {
    const {name, value} = event.target;
    if (name === 'namepokemon') {
        setFormNamePokemon(value);
    }
    if (name === 'url') {
        setFormUrl(value);
    }
    if (name === 'type') {
        setFormType(value);
    }
    console.log(event.target.name)
}

const  aposEnvio = (event) =>{
        event.preventDefault();
        if (!formNamePokemon || !formUrl || !formType) {
            setError('Campos não preenchidos');
        }
        else{
            console.log('Dados salvos',{formNamePokemon, formUrl, formType});
            setError('');
            setDipslayedNamePokemon(formNamePokemon);
            setDisplayedUrl(formUrl);
            setDisplayedType(formType);
            console.log(formNamePokemon);
        }
    }


    return(
        <Fragment>
            <form onSubmit={aposEnvio}>
                <input type="text" name="namepokemon" 
                value={formNamePokemon} 
                onChange={envio}
                />
                <input type="text" name="url" 
                value={formUrl} 
                onChange={envio}
                />
                <input type="text" name="type" 
                value={formType} 
                onChange={envio}
                />
                <button type="Submit">Cadastrar Carta</button>
                {error && <p>{error}</p>}
            </form>
            <Cartas
            name={displayedNamepokemon}
            image={displayedUrl}
            type ={displayedType}
            />
        </Fragment>
    )
    

}