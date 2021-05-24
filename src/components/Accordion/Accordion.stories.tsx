import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from './Accordion';
import {action} from '@storybook/addon-actions';
import {Story} from '@storybook/react';


export default {
    title: 'Accordion',
    component: Accordion,
};

const callback = action(' Accordion mode change event fired');

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />
const collbacksProps = {
    onChange: callback
}

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    ...collbacksProps,
    titleValue:'Menu',
    collapsed: true,
}

export const UserCollapsedMode = Template.bind({})
UserCollapsedMode.args = {
    ...collbacksProps,
    titleValue:'User',
    collapsed: false,
}

// export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} onChange={callback}/>;
// export const UserUncollapsedMode = () => <Accordion titleValue={'Users'} collapsed={false} onChange={callback}/>;



export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion {...args}  collapsed={value} onChange={() => setValue(!value)}/>
};

ModeChanging.args = {
    titleValue:'Users'
}
