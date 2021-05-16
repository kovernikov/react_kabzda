import React, {useState} from 'react';

type OnOffPropsType = {
    // switched: boolean
}

function OnOff(props: OnOffPropsType) {
    console.log('OnOff rendering')

    let [on, setOn] = useState(false)

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

    return (
        <div>
            <div style={onStyle} onClick={() => {
                setOn(true)
            }}>ON
            </div>
            <div style={offStyle} onClick={() => {
                setOn(false)
            }}>OFF
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default OnOff;
