import React from 'react';
import s from './OnOff.module.css'

type OnOffProps = {
    switched: boolean
}

const OnOff = (props: OnOffProps) => {
    return (
        <div className={s.container}>
            <div className={(props.switched && s.active) + ' ' + s.btn}>ON</div>
            <div className={(!props.switched && s.inert) + ' ' + s.btn}>OFF</div>
            <div
                className={(props.switched && s.active) + ' ' + s.item + ' ' + s.btn + ' ' + (!props.switched && s.inert)}>X
            </div>
        </div>
    )
}

export default OnOff;
