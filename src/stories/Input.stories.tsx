import React, {ChangeEvent, useRef, useState} from 'react';
import { action} from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';
import {UncontrolledOnOff} from '../components/UncontrolledOnOff/UncontrolledOnOff';

export default {
  title: 'Input',
  // component: Input
};

export const UncontrolledInput = () => <input/>;

export const TrackValueOfUncontrolledInput = () => {
  const [value, setValue] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {

    const actualValue = e.currentTarget.value;
    setValue(actualValue);
  }

  return <><input onChange={ onChange }/> - {value}</>;
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const seve = () => {
    const el = inputRef.current as HTMLInputElement;
    setValue(el.value);
  }

  return <><input ref={inputRef}/> <button onClick={seve} >save</button> - actual value: {value}</>;
}


export const ControlledInputWithFixedValue = () => <input value={'it-incubator.by'}/>;



//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// } as Meta;

// const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };
//
// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };
//
// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
