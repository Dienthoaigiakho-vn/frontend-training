import './index.css'

const FooterButton = ({buttonTitle, imageSrc}) => {
  
  return (
    <button className='footer-button' onClick={()=>{}}>
      <img src={imageSrc} alt=""/>
      <span className='btn-title'>{buttonTitle}</span>
    </button>
  )
}

export default FooterButton
