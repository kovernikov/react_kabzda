import React, {useState} from 'react';

type OnOffPropsType = {
    on: boolean
    onChange: (on: boolean) => void
}

function OnOffComponent(props: OnOffPropsType) {
    console.log('OnOff rendering')
    console.log('on: ' + props.on);

    const onStyle = {
        margin: '10px',
        padding: '2px',
        width: '30px',
        height: '20',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: props.on ? 'green' : 'white',
    }
    const offStyle = {
        margin: '10px',
        padding: '2px',
        width: '30px',
        height: '20',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: props.on ? 'white' : 'red',
    }
    const indicatorStyle = {
        borderRadius: '10px',
        marginLeft: '5px',
        width: '10px',
        height: '10px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: props.on ? 'green' : 'red',
    }

    return (
        <div>
            <div style={onStyle} onClick={() => {
                props.onChange(true)
            }}>ON
            </div>
            <div style={offStyle} onClick={() => {
                props.onChange(false)
            }}>OFF
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export const OnOff = React.memo(OnOffComponent)
