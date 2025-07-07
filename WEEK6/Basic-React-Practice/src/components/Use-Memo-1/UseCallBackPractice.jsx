import React, { useEffect, useMemo, useState } from 'react'

export const UseCallBackPractice = () => {
    const [exchange1data, setExchange1Data] = useState({});
    const [exchange2data, setExchange2Data] = useState({});
    const [incomedata, setIncomeData] = useState({});

    useEffect(() => {

        setExchange1Data({
            returns: 100
        })

    }, [])

    useEffect(() => {

        setExchange2Data({
            returns: 200
        })

    }, [])

    useEffect(() => {
        setTimeout(() => {
            setIncomeData({
                income: 100
            })
        }, 5000);
    }, [])

    const Exchange = useMemo(() => {
        return exchange1data.returns + exchange2data.returns;
    }, [exchange1data, exchange2data]);

    const Incometax = useMemo(() => {
        return (Exchange + incomedata.income) * 0.3;
    }, [incomedata]);
    
    return (
        <div>

            <h1>Your income report :{Incometax}</h1>
            <h1>Exchange Returns :{Exchange}</h1>
        </div>
    )
}
