import React from 'react';

import { formatMoney } from '../helpers/formatHelpers';
import '../styles/transaction.css'

const EARNINGS_COLOR = '#A1F0DC';
const EXPENSE_COLOR = '#F0A1A8';

export default function Transaction({ transaction }) {
    const { date, description, type, user, value, _id } = transaction;
    return (
        <div className='containerTransactionStyle'>
            <span className='typeTransactionStyle'>{type}</span>
            <span className='dateTransactionStyle'>{date}</span>
            <span className='descriptionTransactionStyle'>{description}</span>
            <span className='valueTransactionStyle'>{formatMoney(value)}</span>
        </div>
    )
}