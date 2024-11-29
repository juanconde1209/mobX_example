import React from 'react';
import { observer } from 'mobx-react-lite'; 
import counterStore from './CounterStore'; 

const Counter = observer(() => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Contador: {counterStore.count}</h1>
            <button onClick={() => counterStore.increment()}>Incrementar</button>
            <button onClick={() => counterStore.decrement()}>Decrementar</button>
        </div>
    );
});

export default Counter;
