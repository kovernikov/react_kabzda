import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from './Accordion';
import {action} from '@storybook/addon-actions';
import {Story} from '@storybook/react';


export default {
    title: 'Accordion',
    component: Accordion,
};

const callback = action(' Accordion mode change event fired');
const onClickCallback = action(' some item was clicked');

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />
const callbacksProps = {
    onChange: callback
}

// export const MenuCollapsedMode = Template.bind({})
// MenuCollapsedMode.args = {
//     ...callbacksProps,
//     titleValue:'Menu',
//     collapsed: true,
// }
//
// export const UserCollapsedMode = Template.bind({})
// UserCollapsedMode.args = {
//     ...callbacksProps,
//     titleValue:'User',
//     collapsed: false,
// }

export const MenuUncollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} onChange={callback} items={[]} onClick={onClickCallback}/>;
export const UserUncollapsedMode = () => <Accordion titleValue={'Users'} collapsed={false} onChange={callback} onClick={onClickCallback} items={[
    {title: 'Dimych', value: 1},
    {title:'Valera', value: 2},
    {title:'Artem', value: 3},
    {title: 'Victor', value: 4}
]}/>;

// const Users = React.memo(UsersSecret);

export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion {...args} /*titleValue={"User"}*/ collapsed={value} onChange={() => setValue(!value)} onClick={onClickCallback}
                      items={[
                          {title: 'Dimych', value: 1},
                          {title:'Valera', value: 2},
                          {title:'Artem', value: 3},
                          {title: 'Victor', value: 4}
                      ]}/>
};

ModeChanging.args = {
    titleValue:'Users'
}
