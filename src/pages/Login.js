import React, { useState } from 'react';
import { toast } from 'react-toastify';
import isEmail from 'validator/lib/isEmail';
import { useDispatch, useSelector } from 'react-redux';

import '../styles/login.css';
import * as actions from '../store/modules/auth/actions';
import Loading from '../components/loading';

export default function Login() {

    const dispatch = useDispatch();

    const isLoading = useSelector(state => state.auth.isLoading);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        let formErrors = false;

        if (!isEmail(email)) {
            formErrors = true;
            toast.error('E-mail inválido');
        }

        if (password.trim().length < 6 || password.trim().length > 100) {
            formErrors = true;
            toast.error('Senha inválida');
        }

        if (formErrors) return;

        try {
            dispatch(actions.loginRequest({ email, password }));
        } catch (error) {

        }
    }

    return (
        <div>
            <Loading isLoading={isLoading} />
            <form>
                <h2>FAÇA SEU LOGIN</h2>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">E-mail</label>
                    <input type="email" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Senha</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"
                        value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit} >Entrar</button>
            </form >
        </div>
    )
}
