import './index.css'
//children react node, children ~ innerHTML
// eslint-disable-next-line react/prop-types
const Button = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={className}>{children}</button>
  )
}

export default Button
