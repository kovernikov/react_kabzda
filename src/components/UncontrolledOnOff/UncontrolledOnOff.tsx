import React, {useState} from 'react';

type PropsType = {
    onChange: (on: boolean) => void
    defaultOn?: boolean
}

export function UncontrolledOnOff(props: PropsType) {
    console.log('OnOff rendering')

    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)

    console.log('on: ' + on);

    const onStyle = {
        margin: '10px',
        padding: '2px',
        width: '30px',
        height: '20',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'white',
    }
    const offStyle = {
        margin: '10px',
        padding: '2px',
        width: '30px',
        height: '20',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: on ? 'white' : 'red',
    }
    const indicatorStyle = {
        borderRadius: '10px',
        marginLeft: '5px',
        width: '10px',
        height: '10px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'red',
    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)

    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClicked}>ON
            </div>
            <div style={offStyle} onClick={offClicked}>OFF
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}
