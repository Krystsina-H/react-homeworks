import './Button.css'

const Button = ({ children, type = 'button', className = '', ...props }) => (
  <button type={type} className={`button ${className}`.trim()} {...props}>
    {children}
  </button>
)

export default Button
