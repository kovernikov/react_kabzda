import React from 'react';
import {UncontrolledAccordion} from './UncontrolledAccordion';
import { Story, Meta } from '@storybook/react';

export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
};

export const MenuCollapsedMode = () => <UncontrolledAccordion titleValue={'Menu'}/>;
export const UserUncollapsedMode = () => <UncontrolledAccordion titleValue={'Users'}/>;
