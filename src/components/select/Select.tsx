import React, {useState} from 'react';

export type SelectItemType={
    title: string
    id: any
}

type SelectPropsType={
    value: any
    onChange: (value: any) => void
    items: SelectItemType[]


}

export const Select = (props: SelectPropsType) => {

    const [collapsed, setCollapsed] = useState(true)

    const onClickHandler = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <div onClick={onClickHandler}>
                {props.items.map((i) => i.id === props.value ? i.title : '')}
                <div>
                    {!collapsed && <SelectOptions items={props.items} onChange={props.onChange} /> }
                </div>
            </div>
        </div>
    );
};


export type SelectOptionsPropsType ={
    items: SelectItemType[]
    onChange: (value: any) => void
}


export const SelectOptions = (props: SelectOptionsPropsType) => {
    return (
        <div>
            {props.items.map((i, index) => <p key={index} onClick={()=> {props.onChange(i.id)}}> {i.title}</p>)}
        </div>
    )
}
