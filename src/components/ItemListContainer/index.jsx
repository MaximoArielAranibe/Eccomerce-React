import Counter from '../Counter'
import React from 'react'

export const ItemListContainer = () => {

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }

    return(
        <>
        <h1>React</h1>
        <Counter initial={1} stock={5} onAdd={onAdd} />
        </>
        
    )
}