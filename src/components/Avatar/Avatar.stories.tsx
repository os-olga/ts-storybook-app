import React from 'react';
import { Story } from "@storybook/react";
import { Avatar } from '.';
import { AvatarProps } from './Avatar.types';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg'],
    },
  },
};

const Template: Story<AvatarProps> = (args) => {

  return (
    <Avatar {...args} />
  );
};

export const smallAvatar = Template.bind({});
smallAvatar.args = {
  firstname: 'Tania',
  lastname: 'Prokopieva',
  size: 'sm',
};

export const mediumAvatar = Template.bind({});
mediumAvatar.args = {
  firstname: 'Andrii',
  lastname: 'Prokopiev',
  size: 'md',
};



