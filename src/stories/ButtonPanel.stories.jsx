import React from 'react';

import ButtonPanel from '../component/ButtonPanel.js';

export default {
  title: 'ButtonPanel',
  component: ButtonPanel,
};

const Template = (args) => <ButtonPanel {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  clickHandler: null,
};