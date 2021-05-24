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

export const ControlledInput = () => {
  const [parentsValue, setParentsValue] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParentsValue(e.currentTarget.value);
  }

  return <input value={parentsValue} onChange={onChange}/>
}

export const ControlledCheckbox = () => {
  const [parentsValue, setParentsValue] = useState(true);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParentsValue(e.currentTarget.checked);
  }

  return <input type='checkbox' checked={parentsValue} onChange={onChange}/>
}

export const ControlledSelect = () => {
  const [parentsValue, setParentsValue] = useState<string | undefined>(undefined);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setParentsValue(e.currentTarget.value);
  }

  return <select value={parentsValue} onChange={onChange}>
    <option >none</option>
    <option value="1">Minsk</option>
    <option value="2">Moscov</option>
    <option value="3">Kiev</option>
    </select>
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
