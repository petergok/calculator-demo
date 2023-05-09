import React from 'react';

import Display from '../component/Display.js';

export default {
  title: 'Display',
  component: Display,
};

const Template = (args) => <Display {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: "42",
};