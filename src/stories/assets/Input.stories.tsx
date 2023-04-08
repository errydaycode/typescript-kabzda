import React, {ChangeEvent, useRef, useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {UncOnoff} from "../../components/UncOnOff/UncOnoff";
import {action} from "@storybook/addon-actions";


export default {
  title: 'input',
  // component: UncOnoff,
}


export const UncontrolledInput = () => <input/>


export const TrackValueOfUncontrolledInput = () => {
  const [value, setValue] = useState('')

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>)=> {
    const actualValue = event.currentTarget.value
    setValue(actualValue)
  }

  return <>
    <input onChange={onChangeHandler}/> -
    {value}
  </>
}
export const GetValueOfUncontrolledInputByButtonPress = () => {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const onSaveHandler = () => {
    const el = inputRef.current as HTMLInputElement

    (setValue(el.value))
  }

  return <>
    <input ref={inputRef} />
    <button onClick={onSaveHandler}>save</button>- actual value: {value} </>
}
export const ControlledInputWithFixedValue = () => <input value={'it-incubator.by'}/>



