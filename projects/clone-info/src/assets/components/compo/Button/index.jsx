import React, { Children } from 'react'
import "./index.css"
const Button = ({children}) => {
  return (
    <button>{children}</button>
  )
}

export default Button
