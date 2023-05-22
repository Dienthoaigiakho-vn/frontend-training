import './index.css'

const FooterButton = ({ buttonTitle, imageSrc, children }) => {

  return (
    <button className='footer-button' onClick={()=>{}}>
      {children}
      <span className='btn-title'>{buttonTitle}</span>
    </button>
  )
}

export default FooterButton
