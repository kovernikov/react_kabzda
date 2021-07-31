import React, {useState} from 'react';
import './App.css';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {Rating} from './components/Rating/Rating';
import {RatingValueType, UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {Accordion} from './components/Accordion/Accordion';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';
import {OnOff} from './components/OnOff/OnOff';
import {Select} from './components/Select/Select';
import {Clock} from './components/Clock/Clock';


function AppComponent(props: any) {
	console.log('App rendering')

	let [retingValue, setRetingValue] = useState<RatingValueType>(0)
	let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
	let [switchOn, setSwitchOn] = useState<boolean>(false)
	const [value, setValue] = useState('2')

	return (
		<div className={'app'}>
			<Clock mode={'digital'}/>
			<Clock mode={'analog'}/>
			<UncontrolledAccordion titleValue={'Menu'}/>
			<UncontrolledAccordion titleValue={'Users'}/>

			<Select value={value}
					onChange={setValue}
					items={[
						{value: '1', title: 'Minsk'},
						{value: '2', title: 'Kiev'},
						{value: '3', title: 'Praha'},
					]}/>

			<UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
			<UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}


			<UncontrolledRating/>
			<UncontrolledRating/>
			<UncontrolledRating/>

			<Accordion titleValue={'Menu'} collapsed={accordionCollapsed} onChange={() => {
				setAccordionCollapsed(!accordionCollapsed)
			}} items={props.items} onClick={props.onClick}/>
			<Accordion titleValue={'Users'} collapsed={accordionCollapsed} onChange={() => {
				setAccordionCollapsed(!accordionCollapsed)
			}} items={props.items} onClick={props.onClick}/>

			<OnOff on={switchOn} onChange={setSwitchOn}/>

			<Rating value={retingValue} onClick={setRetingValue}/>

		</div>
	);
}

type PageTitlePropsType = {
	title: string
}

function PageTitle(props: PageTitlePropsType) {
	console.log('PageTitle rendering')
	return <h1>{props.title}</h1>
}

export const App = React.memo(AppComponent)
