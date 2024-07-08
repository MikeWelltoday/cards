import { useId } from 'react'

import s from './TextField.module.css'

type TextFieldProps = {
  placeholder: string
  type: 'password' | 'text'
}

export const TextField = ({ placeholder, type }: TextFieldProps) => {
  const uniqueId = useId() + 'TextField'

  /* на уроке по верстке делали пример кастомного инпута */

  return (
    <div className={s.testField}>
      <input id={uniqueId} placeholder={placeholder} type={type} />
      <label htmlFor={uniqueId}>{placeholder}</label>
    </div>
  )
}
