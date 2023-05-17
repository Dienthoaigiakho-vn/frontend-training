import React from 'react'
import "./index.css"
import Information from '../Information'
import Description from '../Description'

const Content = ({pageData, parentPageData}) => {
  return (
    <section className='content-section'>
      <Information 
      pageData={pageData} 
      parentPageData={parentPageData}
      key={pageData.id}
      ></Information>
      <Description></Description>
    </section>
  )
}

export default Content
