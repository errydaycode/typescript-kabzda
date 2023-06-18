import React, {useState} from 'react';
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Select',
    component: Select,
}


export const WithValue = () => {

    const [value, setValue] = useState('2')

    return <Select value={value}
                   onChange={setValue}
                   items={[{id: '1', title: 'Minsk'},
                       {id: '2', title: 'Moscow'},
                       {id: '3', title: 'Kiev'},]}/>
}


export const WithoutValue = () => {

    const [value, setValue] = useState('')

  return  <Select
        value={value}
        onChange={setValue}
        items={[
            {id: '1', title: 'Minsk'},
            {id: '2', title: 'Moscow'},
            {id: '3', title: 'Kiev'},

        ]}
    />
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
