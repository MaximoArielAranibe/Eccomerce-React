import './counter.css';
import React from 'react';

export const Counter = () => {
    return(
        <div className="counter">
            <button className='counter-button'>+</button>
            <span>2</span>
            <button className='counter-button'>-</button>
            <div>
                <button className='counter-button-cart'>Agregar al carrito</button>
            </div>
        </div>
    );
};

export default Counter;