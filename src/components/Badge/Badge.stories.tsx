import React from 'react';
import { Story } from "@storybook/react";
import { Badge } from '.';
import { BadgeProps, BadgeTypeEnum } from './Badge.types';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg'],
    },
    type: {
      control: {
        type: 'select',
      },
      options: [
        'notAvailable',
        'new',
        'popular',
        'inactive',
        'active',
        'deactivated',
        'process',
        'onApproval',
        'completed',
        'unpublished',
        'recomended',
        'competitorPosition',
      ],
    },
  },
};

const Template: Story<BadgeProps> = (args) => {
  return (
    <Badge {...args} />
  );
};

export const badge = Template.bind({});
badge.args = {
  text: 'Active',
  size: 'sm',
  type: BadgeTypeEnum.active
};

// export const deactivatedMediumBadge = Template.bind({});
// deactivatedMediumBadge.args = {
//   text: 'Deactivated',
//   size: 'md',
//   type: BadgeTypeEnum.deactivated
// };

// export const newLargeBadge = Template.bind({});
// newLargeBadge.args = {
//   text: 'New',
//   size: 'lg',
//   type: BadgeTypeEnum.new
// };

