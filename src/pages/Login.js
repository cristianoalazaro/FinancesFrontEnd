import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import '../styles/login.css';

import * as exampleActions from '../store/modules/example/actions';

export default function Login() {
    const dispatch = useDispatch();

    const handleClick = (event) => {
        event.preventDefault();
        dispatch(exampleActions.clicaBotaoRequest());

    }

    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">E-mail</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Senha</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick} >Entrar</button>
            </form >
        </div>
    )
}