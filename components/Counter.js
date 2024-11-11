import { useState } from 'react';

function Counter({ increment }) {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Counter: {count}</p>
            <button onClick={() => setCount(count + increment)}>Increase by {increment}</button>
        </div>
    );
}

export default Counter;
