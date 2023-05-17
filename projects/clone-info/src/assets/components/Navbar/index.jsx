import React from 'react'
import "./index.css"
import ListingButton from '../Common/MenuButton'
import BenefitList from '../BenefitList'

const Navbar = (pageData) => {
  return (
    <section className='navbar-section'>
        <ListingButton></ListingButton>
        <BenefitList></BenefitList>
    </section>
  )
}

export default Navbar
