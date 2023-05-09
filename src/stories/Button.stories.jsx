import React from 'react';

import Button from '../component/Button.js';

export default {
  title: 'Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: "AC",
  clickHandler:null,
};

export const Wide = Template.bind({});
Wide.args = {
    name: "AC",
    wide:true,
    clickHandler:null,
};

export const Orange = Template.bind({});
Orange.args = {
    name: "AC",
    orange:true,
    clickHandler:null,
};

export const WideOrange = Template.bind({});
WideOrange.args = {
    name: "AC",
    orange:true,
    wide: true,
    clickHandler:null,
};