import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

type PageTitlePropsType = {
    title: string
}

function App() {
    console.log("App rendering")
    return (
        <div>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My frinds"}/>
            Article 1
            <Rating value={3}/>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

function PageTitle(props: PageTitlePropsType) {
    debugger
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}


export default App;
