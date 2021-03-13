import React from 'react';

import '../styles/summary.css';

export default function Summary({summary}) {
    return (
        <div className='containerSummary'>
            <span>
                <strong>
                    Receitas:{' '}
                    <span className='earningStyle'>{summary.totalEarnings || 0}</span>
                </strong>
            </span>

            <span>
                <strong>
                    Despesas:{' '}
                    <span className='expenseStyle'>{summary.totalExpenses}</span>
                </strong>
            </span>

            <span>
                <strong>
                    Saldo:{' '}
                    <span className='balanceStyle'>{summary.balance}</span>
                </strong>
            </span>
        </div>
    )
}