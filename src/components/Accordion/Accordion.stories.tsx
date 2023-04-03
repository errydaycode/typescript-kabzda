import React, {useState} from 'react';
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";



export default {
    title: 'Accordion ',
    component: Accordion,
}



export const MenuCollapsedMode = () => <Accordion titleValue={'Drinks'} collapsed={true} setCollapse={action('acc fired')} />
export const UsersUncollapsedMode = () => <Accordion titleValue={'Users'} collapsed={false} setCollapse={action('acc fired')} />

export const ModeChanging= () => {
    const [value,setValue] = useState<boolean>(true)
   return  <Accordion titleValue={'Drinks'} collapsed={value} setCollapse={()=> setValue(!value)}/>
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
