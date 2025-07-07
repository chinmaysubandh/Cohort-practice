import React, { useMemo, useState } from 'react'

export const CartTotalPrice = () => {
    const [items, setItems] = useState([
        { name: 'Chocolates', value: 20 },
        { name: 'Chips', value: 20 },
        { name: 'Onion', value: 20 },
        { name: 'Tomato', value: 20 }
    ]);

    let totalprice2 = useMemo(() => {
        let totalprice = 0;
        for (let i = 0; i < items.length; i++) {
            totalprice = totalprice + items[i].value
        }
        return totalprice;
    },[])
    



    return (
        <div>
            <ul>
                {items.map((items, index) => (
                    <li key={index}>{items.name} - Price: ${items.value}</li>
                ))}
            </ul>
            <h1>Totol price {totalprice2}</h1>
        </div>
    )
}
