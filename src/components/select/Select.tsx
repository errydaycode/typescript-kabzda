import React from 'react';

type ItemType={
    title: string
    value: any
}

type SelectPropsType={
    value: any
    onChange: (value: any) => void
    items: ItemType[]


}

export const Select = (props: SelectPropsType) => {
    return (
        <div>
            <div className={'title of select(like in accordion)'}>
                {props.items.map((i) => i.value === props.value ? i.title : '')}
            </div>
        </div>
    );
};

