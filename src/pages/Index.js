import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Loading from '../components/loading';
import MainIndex from '../components/MainIndex';

export default function Index() {
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);

    
    return (
        <>
            <Loading isLoading={isLoading} />
            <MainIndex />
        </>
    )
}