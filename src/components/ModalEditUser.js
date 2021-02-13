import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import {useSelector} from 'react-redux';

import '../styles/modal.css';

Modal.setAppElement('#root');

export default function ModalEditUser({ onClose }) {
    const getName = useSelector(state=>state.auth.user.name);
    const getLastname = useSelector(state=>state.auth.user.lastname);
    const getEmail = useSelector(state=>state.auth.user.email);

    const [name, setName] = useState(getName);
    const [lastname, setLastname] = useState(getLastname);
    const [email, setEmail] = useState(getEmail);

    useEffect(()=>{
        document.addEventListener('keydown', handleKeyDown);
    })

    const handleClose = () => {
        onClose(null);
    }

    const handleKeyDown = (event)=>{
        if (event.key === 'Escape'){
            onClose(null);
        }
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
                            <h2>EDITE SEUS DADOS</h2>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nome</label>
                                <input type="text" className="form-control" id="name"
                                    aria-describedby="emailHelp" value={name} onChange={
                                        (event)=>setName(event.target.value)} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="lastname" className="form-label">Sobrenome</label>
                                <input type="text" className="form-control" id="lastname"
                                    aria-describedby="emailHelp" value={lastname} onChange={
                                        (event)=>setLastname(event.target.value)} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">E-mail</label>
                                <input type="email" className="form-control" id="email"
                                    aria-describedby="emailHelp" value={email} onChange={
                                        (event)=>setEmail(event.target.value)} />
                            </div>

                            <button type="submit" className="btn btn-primary" >
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

