import React, {useState} from 'react';

export type AccordionPropsType = {
    titleValue: string
    collapsed : boolean
    /**
     * Callback that are showed when is opened.
     */
    onChange: () => void
    color?: string
}


export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')


    return (
        <div>
            <AccordionTitle title={props.titleValue} color={props.color} onChange={props.onChange} />
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
    color?: string
   }

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3
        style={{color: props.color ? props.color : "black"}}
        onClick={ (e) => props.onChange()}> ---{props.title}---</h3>
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}
