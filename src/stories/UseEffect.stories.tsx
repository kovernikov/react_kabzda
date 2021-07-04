import React, {memo, useEffect, useMemo, useState} from 'react';

export default {
    title: 'useEffect demo'
}


export const SimpleExample = () => {
    const [counter, setCounter] = useState<number>(1);
    const [fake, setFake] = useState<number>(1);

    console.log("SimpleExample");

    useEffect(() => {
        console.log('useEffect every render');
        document.title = counter.toString();
    })
    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)');
        document.title = counter.toString();
    }, [])
    useEffect(() => {
        console.log('useEffect first render and every counter change');
        document.title = counter.toString();
    }, [counter])

    return <>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        Hello, {counter} {fake}
    </>
}
