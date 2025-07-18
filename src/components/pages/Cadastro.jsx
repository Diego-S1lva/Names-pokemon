import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import './CadastroUser.moules.css'

export default function Cadastro(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");
    const navigate = useNavigate();

    const newUser = {
        name: name,
        email: email,
        senha: senha
    };

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
   
    const onSubmitHandle = async (event) =>{
        event.preventDefault();
        if (!name || !email || !senha) {
            setErro('Campos não preenchidos');
        }
        try{
            const response = await fetch('http://localhost:3000/users',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            });
            if (response.ok) {
                const data = await response.json();
                console.log(JSON.stringify(data.name));
                setErro('');
                setName('');
                setEmail('');
                setSenha('');
                navigate('/mostrarnomes')
            }
        else{
            const errorData = await response.json();
            setErro(`Error ao cadastrar usuário: ${errorData.mesage || response.statusText}`)
        }
    }
        catch(erro){
            setErro(`Erro de rede: ${erro.mesage}`)
        
        
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
