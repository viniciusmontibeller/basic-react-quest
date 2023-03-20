import './button.css'

const showButtonLabel = (label) => {
    alert(`A label desse botão é ${label}`)
}

const Button = ({label, color}) => {
    return (
        <button className='btn' style={{color: color}} onClick={() => showButtonLabel(label)}>{label}</button>
    )
}

Button.defaultProps = {
    color: 'blue'
}

export default Button