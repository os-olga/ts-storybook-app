import React, { useState } from 'react';
import { Story } from "@storybook/react";
import { RadioButton } from '.';
import { RadioButtonProps } from './RadioButton.types';

export default {
    title: 'Components/RadioButton',
    component: RadioButton,
};

const Template: Story<RadioButtonProps> = (args) => {
    const [value, setValue] = useState(false);

    const handleInputChange = () => {
        setValue(!value)
    }

    return (
        <RadioButton
            {...args}
        />
    );
};

export const radioButton = Template.bind({});
radioButton.args = {
    label: '12',
    name: 'name',
    value: 'value',
    disabled: false,
};
