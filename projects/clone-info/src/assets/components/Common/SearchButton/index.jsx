import React, { Children } from 'react'
import "./index.css"
const Button = ({children}) => {
  return (
    <button className='btn-search'>{children}</button>
  )
}

export default Button
