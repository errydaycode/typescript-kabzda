import React, {useState} from 'react';
import {ControlledOnoff} from "./ControlledOnoff";
import {action} from "@storybook/addon-actions";



export default {
    title: 'ControlledOnoff ',
    component: ControlledOnoff,
}

const callBack = () => {
    action('on or off clicked')
}

export const OnMode = () => <ControlledOnoff turned={true} setTurned={action('on or off clicked')} />
export const OffMode = () => <ControlledOnoff turned={false} setTurned={action('on or off clicked')} />

export const ChangeRating = () => {
    const [value,setValue] = useState<boolean>(true)
   return  <ControlledOnoff turned={value} setTurned={setValue}/>
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
