import React from 'react';
import './App.css';
import { UncontrolledAccordion } from './components/Accordion/UncontrolledAccordion';
import OnOff from './components/OnOff/OnOff';
import { UncontrolledRating } from './components/Rating/UncontrolledRating';

function App() {
    console.log('App rendering')
    return (
        <div>
            <UncontrolledAccordion titleValue={'Menu'} />
            <UncontrolledAccordion titleValue={'Users'} />

            <UncontrolledRating />
            <UncontrolledRating />
            <UncontrolledRating />

            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}

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
