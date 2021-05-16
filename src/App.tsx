import React, {useState} from 'react';
import './App.css';
import {UncontrolledAccordion} from './components/Accordion/UncontrolledAccordion';
import OnOff from './components/OnOff/OnOff';
import { Rating } from './components/Rating/Rating';
import {RatingValueType, UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';

function App(props: any) {
    console.log('App rendering')

    let [retingValue, setRetingValue] = useState<RatingValueType>(0)

    return (
        <div className={'app'}>

            <Rating value={retingValue} onClick={setRetingValue}/>
            <Rating value={retingValue} onClick={setRetingValue}/>
            <Rating value={retingValue} onClick={setRetingValue}/>

            <UncontrolledAccordion titleValue={'Menu'} />
            <UncontrolledAccordion titleValue={'Users'} />


            <UncontrolledRating value={retingValue}/>
            <UncontrolledRating value={retingValue}/>
            <UncontrolledRating value={retingValue}/>

            <OnOff />
            <OnOff />
            <OnOff />
            <OnOff />
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
