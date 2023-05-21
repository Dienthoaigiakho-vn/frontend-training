import FooterButton from './FooterButton'
import './index.css'

const FooterSelection = () => {
  return (
  <div className="footer-selection-container">
    <FooterButton buttonTitle="Weather" imageSrc="src/assets/icons/Footer-WeatherIcon.png"/>
    <FooterButton buttonTitle="Weather" imageSrc="src/assets/icons/Footer-Menu.png"/>
    <FooterButton buttonTitle="Weather" imageSrc="src/assets/icons/Footer-Library.png"/>
    <FooterButton buttonTitle="Weather" imageSrc="src/assets/icons/Footer-Settings.png"/>

  </div>

  )
}

export default FooterSelection
