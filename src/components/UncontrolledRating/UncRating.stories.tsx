import React, {useState} from 'react';
import {UncontrolledRating} from "./UncontrolledRating";



export default {
    title: 'UncontrolledRating stories',
    component: UncontrolledRating,
}



export const EmptyRating = () => <UncontrolledRating />
export const Rating1 = () => <UncontrolledRating/>
export const Rating2 = () => <UncontrolledRating/>
export const Rating3 = () => <UncontrolledRating/>
export const Rating4 = () => <UncontrolledRating/>
export const Rating5 = () => <UncontrolledRating/>





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
