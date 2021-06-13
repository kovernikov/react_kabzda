import React, {useState} from 'react';

type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    collapsed : boolean
    onChange: () => void
    color?: string
    items : ItemType[]
    onClick: (value: any) => void
}


export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    return  (
        <div>
            <AccordionTitle title={props.titleValue} color={props.color} onChange={props.onChange} />
            {!props.collapsed && <AccordionBody items={[
                {title: 'Dimych', value: 1},
                {title:'Valera', value: 2},
                {title:'Artem', value: 3},
                {title: 'Victor', value: 4}
            ]} onClick={props.onClick}/>}
        </div>
    );

}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
    color?: string
   }

function AccordionTitleSecret(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3
        style={{color: props.color ? props.color : "black"}}
        onClick={ (e) => props.onChange()}> ---{props.title}---</h3>
}
const AccordionTitle = React.memo(AccordionTitleSecret);

export type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBodySecret(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering')
    return <ul>
            { props.items.map( (i, index) => <li onClick={() => {props.onClick(i.value) } } key={index}>{i.title}</li>) }
        </ul>

}
const AccordionBody = React.memo(AccordionBodySecret);
