import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, IButton } from '../src/index';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    style: {
      options: ['primary', 'secondary', 'danger'],
      control: {
        type: 'radio'
      }
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'radio'
      }
    },
    type: {
      options: ['solid', 'outline', 'soft', 'ghost'],
      control: {
        type: 'radio'
      },
    },
    iconType: {
      options: ['none', 'leading', 'trailing', 'leadingTrailing', 'standalone'],
      control: {
        type: 'radio'
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    }
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<IButton> = args => <Button {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  onClick: () => alert('Action button'),
  children: 'Button',
  type: 'solid',
  style: 'primary',
  iconType: 'none',
  disabled: false,
  size: 'large',
};
