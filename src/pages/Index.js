import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loading from '../components/loading';
import Summary from '../components/Summary';
import Transactions from '../components/Transactions';
import axios from '../services/axios';
import * as actions from '../store/modules/auth/actions';

export default function Index() {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const user = useSelector(state => state.auth.user.id);
    //const getTransactions = useSelector(state=>state.auth.transactions);

    const [transactions, setTransactions] = useState([]);
    const [filteredTransactions, setFilteredTransactions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [summary, setSummary] = useState(0);

    useEffect(() => {
        if (isLoggedIn) {
            const getTransaction = async () => {
                const fetchData = await axios.post('/transaction/', { user });
                setTransactions([fetchData.data]);
            }
            getTransaction();
        }
    }, []);

    useEffect(() => {
        const getSummary = () => {
            if (transactions.length > 0) {

                const totalEarnings = transactions[0].filter(transaction =>
                    transaction.type === "+")
                    .reduce((totalEarnings, transaction) => {
                        return totalEarnings + transaction.value;
                    }, 0);

                const totalExpenses = transactions[0].filter(transaction =>
                    transaction.type === '-')
                    .reduce((totalExpenses, transaction) => {
                        return totalExpenses + transaction.value;
                    }, 0);

                    const balance = totalEarnings - totalExpenses;

                setSummary({ totalEarnings, totalExpenses, balance });
            }
        }
        getSummary();
    }, [transactions]);

    return (
        <>
            <Loading isLoading={isLoading} />
            <Summary summary={summary} />
            <Transactions transactions={transactions} />
        </>
    )
}