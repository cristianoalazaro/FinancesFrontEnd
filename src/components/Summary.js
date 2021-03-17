import React from 'react';

import '../styles/summary.css';
import {formatMoney} from '../helpers/formatHelpers';

export default function Summary({summary}) {
    return (
        <div className='containerSummary'>
            <span>
                <strong>
                    Receitas:{' '}
                    <span className='earningStyle'>{formatMoney(summary.totalEarnings) || 
                    formatMoney(0)}</span>
                </strong>
            </span>

            <span>
                <strong>
                    Despesas:{' '}
                    <span className='expenseStyle'>{formatMoney(summary.totalExpenses) || 
                    formatMoney(0)}</span>
                </strong>
            </span>

            <span>
                <strong>
                    Saldo:{' '}
                    <span className='balanceStyle'>{formatMoney(summary.balance) || 
                    formatMoney(0)}</span>
                </strong>
            </span>
        </div>
    )
}