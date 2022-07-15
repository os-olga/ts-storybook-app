import React, { useState } from 'react';
import { Story } from "@storybook/react";
import { Checkbox } from '.';
import { CheckboxProps } from './Checkbox.types';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
};

const Template: Story<CheckboxProps> = (args) => {
  const [value, setValue] = useState(false);
  console.log('checkbox in a so=tory')

  const handleInputChange = () => {
    console.log('123')
    setValue(!value)
  }

  return (
    <Checkbox
      {...args}
      checked={value}
      onClick={handleInputChange}
    />
  );
};

export const checkboxActive = Template.bind({});
checkboxActive.args = {
  id: 'qwe',
  isDisabled: false,
  name: 'checkbox',
};

export const checkboxDisabled = Template.bind({});
checkboxDisabled.args = {
  isDisabled: true,
  checked: false,
  name: 'checkbox',
};