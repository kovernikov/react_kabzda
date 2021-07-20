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
export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState<number>(1);
    const [fake, setFake] = useState<number>(1);

    console.log("SetTimeoutExample");

   useEffect(() => {
       setInterval(() => {
           setCounter(state => state + 1)
       }, 1000)

   }, [])

    return <>
        {/*<button onClick={() => setCounter(counter + 1)}>counter+</button>*/}
        {/*<button onClick={() => setFake(fake + 1)}>fake+</button>*/}
        Hello, counter:{counter} - fake:{fake}
    </>
}
export const TimerExample = () => {
    const [counter, setCounter] = useState<number>(1);
    const [fake, setFake] = useState<number>(1);

    const today = new Date()
    const hour = today.setHours(0, 0, 0, 0);
    const minutes = today.getMinutes()
    const seconds = today.getSeconds()

   useEffect(() => {
       setInterval(() => {
           setCounter(state => state + 1)
       }, 1000)

   }, [])

    return <>
        {/*<button onClick={() => setCounter(counter + 1)}>counter+</button>*/}
        {/*<button onClick={() => setFake(fake + 1)}>fake+</button>*/}
        Hello, counter:{hour}:0{minutes}:0{seconds}
    </>
}
