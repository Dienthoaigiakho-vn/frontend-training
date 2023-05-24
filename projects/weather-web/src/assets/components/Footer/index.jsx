import FooterSelection from '../FooterSelection'
import './index.css'

const Footer = () => {
  return (
    <section className='footer-container' >
      <button className='footer-btnProfile'><img src="src/assets/icons/Footer-ProfileIcon.png" alt="" /></button>
      <FooterSelection />
    </section>
  )
}

export default Footer
