import React, { useEffect, useState } from 'react';
import axios from '../services/axios';

export default function Index() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get('/users');
            setUsers(response.data);
        }
        getData();
    }, []);

    return (
        <>
            <h1>Página Principal</h1>
            <ul>
                {users.map(user =><li key={user._id}>{user.name}</li>)}
            </ul>
        </>
    )
}