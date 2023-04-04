import React, {useState} from 'react';
import {UncontrolledRating} from "./UncontrolledRating";
import {action} from "@storybook/addon-actions";



export default {
    title: 'UncontrolledRating stories',
    component: UncontrolledRating,
}

const callback = action('rating changed inside component')


export const EmptyRating = () => <UncontrolledRating defaultValue={0} onChange={callback}/>
export const Rating1 = () =>    <UncontrolledRating defaultValue={1} onChange={callback}/>
export const Rating2 = () =>    <UncontrolledRating defaultValue={2} onChange={callback}/>
export const Rating3 = () =>    <UncontrolledRating defaultValue={3} onChange={callback}/>
export const Rating4 = () =>    <UncontrolledRating defaultValue={4} onChange={callback}/>
export const Rating5 = () =>    <UncontrolledRating defaultValue={5} onChange={callback}/>





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
