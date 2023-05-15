import React from 'react'
import "./index.css"
function handleClick(){
}

const Information = () => {
  return (
    <div className='information-container'>
      <h2>Thông tin</h2>
      <ul>
        <li><a onClick={handleClick}>Title 1</a>
          <ul className='group a'>
            <li>DESC 1</li>
            <li>DESC 2</li>
            <li>DESC 3</li>
            <li>DESC 4</li>
          </ul>
        </li>
        <br></br>
        <li><a>Title 2</a>
          <ul className='group b'>
            <li>DESC 5</li>
            <li>DESC 6</li>
            <li>DESC 7</li>
            <li>DESC 8</li>
          </ul>
        </li>
        <br></br>
        <li><a>Title 3</a>
          <ul className='group c'>
            <li>DESC 9</li>
            <li>DESC 10</li>
            <li>DESC 11</li>
            <li>DESC 12</li>
          </ul>
        </li>

      </ul>
    </div>
  )
}

export default Information
