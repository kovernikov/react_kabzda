import React, {memo, useMemo, useState} from 'react';

export default {
    title: 'useState demo'
}

function generateData() {
    console.log('generateData')
    return 1;
}

export const Example1 = () => {
    console.log("Example")

    // const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState<number>(generateData);

    return <>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}
