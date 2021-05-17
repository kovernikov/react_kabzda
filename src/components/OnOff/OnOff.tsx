import React, {useState} from 'react';

type OnOffPropsType = {
    value: boolean
    onClick: (value: boolean) => void
}

function OnOff(props: OnOffPropsType) {
    console.log('OnOff rendering')


    console.log('on: ' + props.value);

    const onStyle = {
        margin: '10px',
        padding: '2px',
        width: '30px',
        height: '20',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: props.value ? 'green' : 'white',
    }
    const offStyle = {
        margin: '10px',
        padding: '2px',
        width: '30px',
        height: '20',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: props.value ? 'white' : 'red',
    }
    const indicatorStyle = {
        borderRadius: '10px',
        marginLeft: '5px',
        width: '10px',
        height: '10px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: props.value ? 'green' : 'red',
    }

    return (
        <div>
            <div style={onStyle} onClick={() => {
                props.onClick(true)
            }}>ON
            </div>
            <div style={offStyle} onClick={() => {
                props.onClick(false)
            }}>OFF
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default OnOff;
