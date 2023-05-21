import FooterSelection from '../FooterSelection'
import './index.css'

const Footer = () => {
  return (
    <div className='footer-container' >
      <button className='footer-profile'><img src="src/assets/icons/Footer-ProfileIcon.png" alt="" /></button>
      <FooterSelection />
    </div>
  )
}

export default Footer
