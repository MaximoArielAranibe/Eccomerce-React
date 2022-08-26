import './counter.css';
import React,{useState} from 'react';

export const Counter = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial);

    const increase = () => {
        setCount(count + 1);
    }
    const decrease = () => {
        setCount(count - 1);
        }
        

    return(
        <div className="counter">
            <button onClick={increase} className='counter-button'>+</button>
            <span>{count}</span>
            <button disabled={count >= stock}  onClick={decrease} className='counter-button'>-</button>
            <div>
                <button className='counter-button-cart'>Agregar al carrito</button>
            </div>
        </div>
    );
};

export default Counter;