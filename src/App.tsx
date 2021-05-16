import React, {useState} from 'react';
import './App.css';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import OnOff from './components/OnOff/OnOff';
import { Rating } from './components/Rating/Rating';
import {RatingValueType, UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import Accordion from './components/Accordion/Accordion';
import UncontrolledOnOff from './components/UncontrolledOnOff/UncontrolledOnOff';


function App(props: any) {
    console.log('App rendering')

    let [retingValue, setRetingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState(false)

    return (
        <div className={'app'}>

            <UncontrolledAccordion titleValue={'Menu'} />
            <UncontrolledAccordion titleValue={'Users'} />

            <UncontrolledOnOff value={on} onClick={setOn}/>
            <UncontrolledOnOff value={on} onClick={setOn}/>
            <UncontrolledOnOff value={on} onClick={setOn}/>

            <UncontrolledRating value={retingValue}/>
            <UncontrolledRating value={retingValue}/>
            <UncontrolledRating value={retingValue}/>

            <Accordion titleValue={'Menu'} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
            <Accordion titleValue={'Users'} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>

            <OnOff />
            <OnOff />
            <OnOff />

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
