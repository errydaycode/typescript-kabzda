import React, {useState} from 'react';
import {UncOnoff} from "./UncOnoff";
import {action} from "@storybook/addon-actions";



export default {
    title: 'UncOnoff ',
    component: UncOnoff,
}

const callBack = () => {
    action('on or off clicked')
}

export const OnMode = () => <UncOnoff  onChange={action('on or off clicked')} />
export const OffMode = () => <UncOnoff onChange={action('on or off clicked')} />

export const ChangeRating = () => {
    const [turned, setTurned] = useState(false)
   return  <UncOnoff  onChange={()=>setTurned(!turned)}/>
}




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
