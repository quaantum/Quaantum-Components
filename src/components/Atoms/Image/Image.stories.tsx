import React from 'react';
import { Meta, Story } from '@storybook/react';
import Image, { ImageProps } from './Image';
import QuaantumProvider from '../../Providers/QuaantumProvider/QuaantumProvider';
import { theme } from '../../../defaults/theme';

export default {
  title: 'Atoms/Image',
  component: Image,
} as Meta;

const Template: Story<ImageProps> = (args) => (
  <QuaantumProvider theme={theme}>
    <Image {...args} />
  </QuaantumProvider>
);

export const Default = Template.bind({});
Default.args = {
  src:
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/wandavision-modern-family-1613760666.png?crop=0.84375xw:1xh;center,top&resize=640:*',
  width: '300px',
  height: '300px',
  objectFit: 'cover',
};
