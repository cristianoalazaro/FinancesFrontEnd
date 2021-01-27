import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import isEmail from 'validator/lib/isEmail';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

import '../styles/login.css';
import * as actions from '../store/modules/auth/actions';

export default function Login() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(()=>{

    },[]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        let formErrors = false;

        if (!isEmail(email)){
            formErrors = true;
            toast.error('E-mail inválido');
        }

        if (password.trim().length < 6 || password.trim().length > 100){
            formErrors = true;
            toast.error('Senha inválida');
        }

        if (formErrors) return;

        try{
            dispatch(actions.loginRequest({email, password}));
            history.push('/');
        } catch(error) {

        }
    }

    return (
        <div>
            <form>
                <h2>FAÇA SEU LOGIN</h2>
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
                <button type="submit" className="btn btn-primary" onClick={handleSubmit} >Entrar</button>
            </form >
        </div>
    )
}