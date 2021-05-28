import React, {useState} from 'react';
import './App.css';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';

import {Rating} from './components/Rating/Rating';
import {RatingValueType, UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {Accordion} from './components/Accordion/Accordion';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';
import {OnOff} from './components/OnOff/OnOff';


function App(props: any) {
    console.log('App rendering')

    let [retingValue, setRetingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className={'app'}>

            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledAccordion titleValue={'Users'}/>

            {/*<UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}*/}
            {/*<UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}*/}
            {/*<UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}*/}


            <UncontrolledRating/>
            <UncontrolledRating/>
            <UncontrolledRating/>

            <Accordion titleValue={'Users'} collapsed={accordionCollapsed} onChange={() => {
                setAccordionCollapsed(!accordionCollapsed)
            }}/>
            <Accordion titleValue={'Users'} collapsed={accordionCollapsed} onChange={() => {
                setAccordionCollapsed(!accordionCollapsed)
            }}/>

            <OnOff on={switchOn} onChange={setSwitchOn}/>
            <OnOff on={switchOn} onChange={setSwitchOn}/>
            <OnOff on={switchOn} onChange={setSwitchOn}/>


            <Rating value={retingValue} onClick={setRetingValue}/>
            <Rating value={retingValue} onClick={setRetingValue}/>
            <Rating value={retingValue} onClick={setRetingValue}/>

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    debugger
    console.log('PageTitle rendering')
    return <h1>{props.title}</h1>
}

export default App;
