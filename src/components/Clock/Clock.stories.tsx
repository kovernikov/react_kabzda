import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import { Clock } from './Clock';


export default {
	title: 'Clock',
	component: Clock,
};


export const BaseAnalogExamlpe = () => {
	return <Clock mode={'analog'}/>
};
export const BaseDigitalExamlpe = () => {
	return <Clock mode={'digital'}/>
};