import React, { useState } from 'react'
import "./index.css"


const Information = ({ pageData, parentPageData }) => {
  const [pageIdActive, setIdPageActive] = useState("")
  function renderPage(page) {
    if (page.parentId === null) {
      return (<>
        <li>
          <a onClick={() => setIdPageActive(page.id)} className={`group-title ${pageIdActive === page.id ? "is-active" : ""}`} >{page.name}</a>
          <ul className={`title-list ${pageIdActive === page.id ? "is-active" : ""}`}>
            {pageData.map(renderChildPage)}
          </ul>
        </li>
      </>)
    }
  }
  function renderChildPage(page) {
    if (page.parentId === pageIdActive) {
      return (<>
        <li><a>{page.name}</a></li>
      </>)
    }
  }

  return (
    <div className='information__container'>
      <h2>Thông tin</h2>
      <ul className='information__list'>
        {pageData.map(renderPage)}
      </ul>
    </div>
  )
}

export default Information
