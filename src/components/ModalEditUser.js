import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import isEmail from 'validator/lib/isEmail';
import { toast } from 'react-toastify';

import '../styles/modal.css';
import Loading from '../components/loading'
import axios from '../services/axios';

Modal.setAppElement('#root');

export default function ModalEditUser({ onClose }) {
    const getName = useSelector(state => state.auth.user.name);
    const getLastname = useSelector(state => state.auth.user.lastname);
    const getEmail = useSelector(state => state.auth.user.email);

    const [name, setName] = useState(getName);
    const [lastname, setLastname] = useState(getLastname);
    const [email, setEmail] = useState(getEmail);

    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
    })

    const handleClose = () => {
        onClose(null);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            onClose(null);
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        let formErrors = false;

        if (name.trim().length < 3 || name.trim().length > 50) {
            formErrors = true;
            toast.error('Nome deve ter entre 3 e 50 caracteres');
        }

        if (lastname.trim().length < 3 || lastname.trim().length > 100) {
            formErrors = true;
            toast.error('Sobrenome deve ter entre 3 e 100 caracteres');
        }

        if (!isEmail(email.trim())) {
            formErrors = true;
            toast.error('E-mail inválido');
        }

        if (formErrors) return;
        setIsloading(true);
        try {
            await axios.put('/users', { name, lastname, email });
            toast.success('Usuário alterado com sucesso!');
            setIsloading(false);
        } catch (error) {
            const errors = error.response.data.errors;
            errors.map(error => toast.error(error));
            setIsloading(false);
        }
    }

    return (
        <div className='modalUser'>
            <div className='container'>
                <div className='modal-main'>
                    <Loading isLoading={isLoading} />
                    <div className='modal-title1'>
                        <h2>EDITE SEUS DADOS</h2>
                        <hr />
                    </div>
                    <div className='modal-body1'>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nome</label>
                                <input type="text" className="form-control" id="name"
                                    aria-describedby="emailHelp" value={name} onChange={
                                        (event) => setName(event.target.value)} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="lastname" className="form-label">Sobrenome</label>
                                <input type="text" className="form-control" id="lastname"
                                    aria-describedby="emailHelp" value={lastname} onChange={
                                        (event) => setLastname(event.target.value)} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">E-mail</label>
                                <input type="email" className="form-control" id="email"
                                    aria-describedby="emailHelp" value={email} onChange={
                                        (event) => setEmail(event.target.value)} />
                            </div>

                            <button type="submit" className="btn btn-primary" onClick={handleSubmit} >
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

