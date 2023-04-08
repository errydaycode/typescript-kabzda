import React, {useState} from 'react';
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Accordion ',
    component: Accordion,
}

const callback = action('accordion mode change event fired')
const onClickItem = action('some item was clicked ')


export const MenuCollapsedMode = () => <
    Accordion titleValue={'Users'}
              collapsed={true}
              setCollapse={callback}
              items={[]}
              onClick={onClickItem}

/>
export const UsersUncollapsedMode = () => <
    Accordion titleValue={'Users'}
              collapsed={false}
              setCollapse={callback}
              items={
                  [{title: 'Dimych', value: 1},
                      {title: 'Valera', value: 2},
                      {title: 'Artem', value: 3},
                      {title: 'Viktor', value: 4}]

              }
              onClick={onClickItem}
/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'Users'}
                      collapsed={value}
                      setCollapse={() => setValue(!value)}
                      items={
                          [{title: 'Dimych', value: 1},
                              {title: 'Valera', value: 2},
                              {title: 'Artem', value: 3},
                              {title: 'Viktor', value: 4}]}
                      onClick={(value)=> alert(`user with ID ${value} should be happy `)}
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
