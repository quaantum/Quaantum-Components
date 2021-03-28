import React from 'react';
import { Meta, Story } from '@storybook/react';
import Flex from './Flex';
import BuitProvider from '../../Providers/BuitProvider/BuitProvider';
import { theme } from '../../../defaults/theme';
import { ButtonProps } from '../..';

export default {
  title: 'Atoms/Flex',
  component: Flex,
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <BuitProvider theme={theme}>
    <Flex {...args} width='100%'>
      <Flex width='100px' height='100px' bgColor='blue' />
      <Flex width='100px' height='100px' bgColor='blue' />
    </Flex>
  </BuitProvider>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'solid',
  justifyContent: 'space-between',
};
