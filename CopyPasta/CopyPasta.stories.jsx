import React from 'react';

import { CopyPasta } from './CopyPasta';

export default {
  title: 'Atoms/CopyPasta',
  component: CopyPasta,
  argTypes: {},
};

const Template = (args) => <CopyPasta {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
