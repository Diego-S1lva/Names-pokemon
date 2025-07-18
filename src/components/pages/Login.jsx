import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [erro, setErro] = useState('');
    const [erroCampos, setErroCampos] = useState('');
    const navigate = useNavigate();

    const onChangeHandle = (event)=>{
        const {name, value} = event.target;

        if (name === 'fullname') {
            setName(value);
        }
        if (name === 'email-user') {
            setEmail(value);
        }
    }

    const onSubmitHandle = async (event) =>{
        event.preventDefault();
        if (!name || !email) {
            setErroCampos('Campos não preenchidos');
        }
        try{
            const response = await fetch('http://localhost:3000/users',{
                method: 'GET',
                headers: {'Content-Type': 'application.json'},
            });
            if (response.ok) {
                const dados = await response.json();
                dados.forEach(data => {
                   if (data.name == name && data.email == email) {
                    navigate('/mostrarnomes');
                   }
                });

            }
            else{
            const erroData = await response.json();
                setErro(`Error ao encontrar usuário: ${erroData.mesage || response.statusText}`)
        }
        }
        catch(errou){
            setErro(`Erro de rede: ${errou.mesage}`)
            console.log(errou.mesage);
        
    }
    }



    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={onSubmitHandle}>
                <input type="text" name="fullname" 
                value={name}
                onChange={onChangeHandle}
                />
                <input type="email" name="email-user" 
                value={email} 
                onChange={onChangeHandle}
                />
                <button type="submit">Registrar</button>
            </form>

            {erroCampos && <p>{erroCampos}</p>}
            {erro && <p>{erro}</p>}
        </div>
    )
}