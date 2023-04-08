import React, {useState} from 'react';
import {UncOnoff} from "./UncOnoff";
import {action} from "@storybook/addon-actions";



export default {
    title: 'UncOnoff ',
    component: UncOnoff,
}


export const OnMode = () => <UncOnoff   defaultOn={true}  onChange={action('on or off clicked')} />
export const BugMode = () => <div>Unsync when change default value when already rendered</div>
export const OffMode = () => <UncOnoff  defaultOn={false} onChange={action('on or off clicked')} />






// const Template = (args: RatingPropsType) => <Rating {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//     primary: true,
//     label: 'Button',
// };
//
// export const Secondary = Template.bind({});
// Secondary.args = {
//     label: 'Button',
// };
//
// export const Large = Template.bind({});
// Large.args = {
//     size: 'large',
//     label: 'Button',
// };
//
// export const Small = Template.bind({});
// Small.args = {
//     size: 'small',
//     label: 'Button',
// };
