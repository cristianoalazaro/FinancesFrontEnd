import React from 'react';

import Transaction from './Transaction';

export default function Transactions({ transactions }) {
    if (transactions.length > 0) {
        return (
            <div>
                {transactions[0].map(transaction => {
                    const { _id } = transaction;
                    return (
                        <Transaction key={_id} transaction={transaction} />
                    )
                })}
            </div>
        )
    }
    return (
        <p></p>
    )
}