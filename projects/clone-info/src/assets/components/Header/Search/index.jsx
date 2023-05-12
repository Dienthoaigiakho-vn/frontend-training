import React from 'react'
import "./index.css"
import Input from '../../compo/Input'
import Button from '../../compo/Button'
import { BsSearch } from "react-icons/bs"
const Search = () => {
  return (

    <div className="search-container">
      <form className='form-search'>
        <Input></Input>
        <Button><BsSearch /></Button>
      </form>
    </div>
  )
}

export default Search
