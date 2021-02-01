import React from 'react';
import Modal from 'react-modal';

import '../styles/modal.css';

Modal.setAppElement('#root');

export default function ModalEditUser({ onClose }) {
    const handleClose = () => {
        onClose(null);
    }

    return (
        <div className='modalUser'>
            <div className='container'>
                <div className='modal-main'>
                    <div className='modal-title1'>
                        <h5 className='text-center'>EDITAR USUÁRIO</h5>
                        <hr />
                    </div>
                    <div className='modal-body1'>
                        <form>
                            <h2>FAÇA SEU LOGIN</h2>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nome</label>
                                <input type="text" className="form-control" id="name"
                                    aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lastname" className="form-label">Sobrenome</label>
                                <input type="text" className="form-control" id="lastname"
                                    aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">E-mail</label>
                                <input type="email" className="form-control" id="email"
                                    aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Senha</label>
                                <input type="password" className="form-control" id="password" />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={''} >
                                Salvar
                            </button>
                        </form >

                        <hr />
                    </div>
                    <div className='modal-footer1'>
                        <button className='btn btn-secondary' onClick={handleClose}>X</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

