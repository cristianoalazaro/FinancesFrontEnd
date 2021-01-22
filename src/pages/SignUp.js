import React from 'react';

import '../styles/login.css';

export default function SignUp() {
    return (
        <div>
            <form>
            <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nome completo</label>
                    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">E-mail</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Senha</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                
                <button type="submit" className="btn btn-primary">Entrar</button>
            </form >
        </div>
    )
}