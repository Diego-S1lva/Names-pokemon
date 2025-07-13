import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import './CadastroUser.moules.css'

export default function Cadastro(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");
    const navigate = useNavigate();
    const onChangeHandle = (event) => {
        const {name, value} = event.target;
        if (name === 'fullname') {
            setName(value);
        }
        if (name === 'email') {
            setEmail(value);
        }
        if (name === 'password') {
            setSenha(value);
        }
    }
   
    const onSubmitHandle = (event) =>{
        event.preventDefault();
        if (!name || !email || !senha) {
            setErro('Campos não preenchidos');
        }
        else{
            console.log('Dados salvos',{name, email, senha});
            setErro('');
            setName('');
            setEmail('');
            setSenha('');
            navigate('/mostrarnomes')
        }
        
    }

    return(
        <div className="cadastro">
            <h1>Cadastrar</h1>
            <form className="campos" onSubmit={onSubmitHandle}>
                
                <input id="input-name" type="text" name="fullname"  
                value={name}
                placeholder="Digite seu nome"
                onChange={onChangeHandle}
                />        
                <input id="input-email" type="email" name="email" 
                    value={email}
                    placeholder="usuario@provedor.com"
                    onChange={onChangeHandle}
                /> 
                <input id="input-password" type="password" name="password"
                    value={senha}
                    placeholder="Digite a senha"
                    onChange={onChangeHandle}
                />
                <button id="button-cadastrar" type="submit">Registrar</button>

                {erro && <p>{erro}</p>}
            </form>
        </div>
    )

}