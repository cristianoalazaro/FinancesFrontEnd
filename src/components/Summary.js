import React from 'react';

import '../styles/summary.css';

export default function Summary() {
    return (
        <div className='containerSummary'>
            <span>
                <strong>
                    Receitas:{' '}
                    <span className='earningStyle'>R$ 0,00</span>
                </strong>
            </span>

            <span>
                <strong>
                    Despesas:{' '}
                    <span className='expenseStyle'>R$ 0,00</span>
                </strong>
            </span>

            <span>
                <strong>
                    Saldo:{' '}
                    <span className='balanceStyle'>R$ 0,00</span>
                </strong>
            </span>
        </div>
    )
}