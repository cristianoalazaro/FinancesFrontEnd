import React, { useEffect, useState } from 'react';

import Loading from '../components/loading';

export default function Index() {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(false);
    }, []);

    return (
        <>
            <Loading isLoading={isLoading} />
            <h1>Página Principal</h1>
        </>
    )
}