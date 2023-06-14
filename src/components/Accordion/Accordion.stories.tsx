import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {Button} from "../../stories/Button";
import {Story} from "@storybook/react";

const GetCategoryObj=(categoryName: string)=>({
    table: {
        category: categoryName
    }
})


export default {
    title: 'components/Accordion ',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
           ...GetCategoryObj('Color')
        },
        setCollapse: {
            ...GetCategoryObj('Event')
        },
        onClick: {
            ...GetCategoryObj('Event')
        },
        items: {...GetCategoryObj('Main')},
        collapsed: {...GetCategoryObj('Main')},
        TitleValue: {...GetCategoryObj('Main')},
    }
}

const callback = action('accordion mode change event fired')
const onClickItem = action('some item was clicked ')

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />
const callBacksProps = {
    /**
     * setCollapse is a callback function which is defined in App component and called when we want to collapse|uncollapse Accordion
     */
    setCollapse: callback,
    onClick: onClickItem
}


export const MenuCollapsedMode = Template.bind({})

MenuCollapsedMode.args = {
    ...callBacksProps,
    titleValue: 'Menu',
    collapsed: true,
    items: [],

}


export const UsersUncollapsedMode = Template.bind({})

UsersUncollapsedMode.args = {
    ...callBacksProps,
    titleValue: 'Users',
    collapsed: false,
    items: [{title: 'Dimych', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Artem', value: 3},
        {title: 'Viktor', value: 4}],


}


export const AccordionModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion {...args} collapsed={value} setCollapse={() => setValue(!value)}
    />
}

AccordionModeChanging.args = {
    titleValue: 'Users',

    items:
        [{title: 'Dimych', value: 1},
            {title: 'Valera', value: 2},
            {title: 'Artem', value: 3},
            {title: 'Viktor', value: 4}],
    onClick: (value) => alert(`user with ID ${value} should be happy `)
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
