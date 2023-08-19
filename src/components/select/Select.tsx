import React, {useState, KeyboardEvent, useEffect} from 'react';
import s from './Select.module.css'

export type SelectItemType = {
    title: string
    id: string
    countryID?: string
    population: number
}

type SelectPropsType = {
    value?: string
    onChange: (value: any) => void
    items: SelectItemType[]


}

 export const Select = React.memo((props: SelectPropsType) => {

     console.log('Select rendering')

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.id === props.value)
    const hoveredItem = props.items.find(i => i.id === hoveredElementValue)


    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItems = () => {
        setActive(!active)
    }

    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }


    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].id === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.id)
                        return;
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].id)
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }

    }

    return (
        <>


            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>

                {
                    active &&
                    <div className={s.items}>
                        {props.items.map(i => <div
                            onMouseEnter={() => {
                                setHoveredElementValue(i.id)
                            }}
                            className={s.item + ' ' + (hoveredItem === i ? s.selected : '')}
                            key={i.id}
                            onClick={() => onItemClick(i.id)}>
                            {i.title}</div>)}
                    </div>
                }

            </div>

        </>

        // <div >
        //     <div onClick={onClickHandler}>
        //         {props.items.map((i) => i.id === props.value ? i.title : '')}
        //         <div>
        //             {!collapsed && <SelectOptions items={props.items} onChange={props.onChange} /> }
        //         </div>
        //     </div>
        // </div>
    );
});


export type SelectOptionsPropsType = {
    items: SelectItemType[]
    onChange: (value: any) => void
}


export const SelectOptions = (props: SelectOptionsPropsType) => {
    return (
        <div>
            {props.items.map((i, index) => <p key={index} onClick={() => {
                props.onChange(i.id)
            }}> {i.title}</p>)}
        </div>
    )
}


