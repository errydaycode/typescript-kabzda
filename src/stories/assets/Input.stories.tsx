import React, {ChangeEvent, useRef, useState} from 'react';



export default {
  title: 'input',
  // component: UncOnoff,
}


export const UncontrolledInput = () => <input/>
export const ControlledInputWithFixedValue = () => <input value={'it-incubator.by'}/>


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


export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>)=> { (setParentValue(e.currentTarget.value) ) }

  return <input value={parentValue} onChange={onChange }/>


}

export const ControlledCheckbox = () => {
  const [parentValue, setParentValue] = useState<boolean>(true)

  const onChange = (e: ChangeEvent<HTMLInputElement>)=> { (setParentValue(e.currentTarget.checked) ) }

  return <input type={'checkbox'} checked={parentValue} onChange={onChange }/>


}

export const ControlledSelect = () => {

  const [parentValue, setParentValue] = useState<string | undefined>('2')

  const onChange = (e: ChangeEvent<HTMLSelectElement>)=> { (setParentValue(e.currentTarget.value) ) }

  return <select value={parentValue} onChange={onChange}>
    <option>none</option>
    <option value="1">Minsk</option>
    <option value="2">Moscow</option>
    <option value="3">Yerevan</option>
  </select>


}





