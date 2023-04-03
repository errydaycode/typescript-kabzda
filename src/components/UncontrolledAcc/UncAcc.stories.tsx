import React, {useState} from 'react';
import {UncAcc} from "./UncAcc";
import {action} from "@storybook/addon-actions";



export default {
    title: 'UncAcc ',
    component: UncAcc,
}



export const MenuCollapsedModeUncAcc = () => <UncAcc titleValue={'Drinks'}  />
export const UsersUncollapsedModeUncAcc = () => <UncAcc titleValue={'Users'}  />

export const ModeChanging= () => {
    const [value,setValue] = useState<boolean>(true)
   return  <UncAcc titleValue={'Drinks'} />
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
