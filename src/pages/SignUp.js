import React, {useEffect, useState} from 'react';
import {toast} from 'react-toastify';
import isEmail from 'validator/lib/isEmail';
import {useHistory} from 'react-router-dom';

import '../styles/login.css';
import axios from '../services/axios';

export default function SignUp() {
    let history = useHistory();

    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event)=>{
        event.preventDefault();

        let formErrors = false;
        
        if (name.trim().length < 3 || name.trim().length > 50){
            formErrors = true;
            toast.error('Nome deve ter entre 3 e 50 caracteres');
        }
        
        if (lastname.trim().length < 3 || lastname.trim().length > 100){
            formErrors = true;
            toast.error('Sobrenome deve ter entre 3 e 100 caracteres');
        }

        if (!isEmail(email.trim())){
            formErrors = true;
            toast.error('E-mail inválido');
        }

        if (password.trim().length < 6 || password.trim().length > 100){
            formErrors = true;
            toast.error('Senha deve ter entre 6 e 100 caracteres');
        }

        if (formErrors) return;
        try{
            await axios.post('/users', {name, lastname, email, password});
            toast.success('Usuário cadastrado com sucesso!');
            history.push('/');
        }catch(error){
            const errors = error.response.data;
            errors.map(error=>toast.error(error));
        }
    }

    return (
        <div>
            <h2>CRIE SUA CONTA</h2>
            <form>
            <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nome</label>
                    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" 
                    value={name} onChange={(event)=>setName(event.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="lastname" className="form-label">Sobrenome</label>
                    <input type="text" className="form-control" id="lastname" aria-describedby="emailHelp" 
                    value={lastname} onChange={(event)=>setLastname(event.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">E-mail</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" 
                    aria-describedby="emailHelp" value={email} 
                    onChange={(event)=>setEmail(event.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Senha</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" 
                    value={password} onChange={(event)=>setPassword(event.target.value)} />
                </div>
                
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Entrar</button>
            </form >
        </div>
    )
}