import React from 'react'
import { ButtonProps } from '@/types/types'

const Button = ({children, version, type, isDisabled}:ButtonProps) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
        {children}
    </button>
  )
}

export default Button