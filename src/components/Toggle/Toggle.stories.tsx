import React, { useState } from 'react';
import { Story } from "@storybook/react";
import { Toggle } from ".";
import { ToggleProps } from "./Toggle.types";

export default {
    title: 'components/Toggle',
    component: Toggle,
    argTypes: {
        variant: {
            control: {
                type: 'select',
            },
            options: ['h1', 'h2', 'h3', 'h4']
        },
    },

};

const Template: Story<ToggleProps> = (args) => {
    const [check, setCheck] = useState(true);
    return (

        <Toggle {...args} />
    )
};

export const typography = Template.bind({});
typography.args = {
    isChecked: true
};