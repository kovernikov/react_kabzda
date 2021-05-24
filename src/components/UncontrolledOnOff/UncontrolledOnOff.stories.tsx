import React from 'react';
import {UncontrolledOnOff} from './UncontrolledOnOff';
import {action} from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
};

const callback = action(' on or off clicked');

export const UncontrolledOnMode = () => <UncontrolledOnOff defaultOn={true} onChange={callback}/>;
export const UncontrolledOffMode = () => <UncontrolledOnOff defaultOn={false} onChange={callback}/>;
