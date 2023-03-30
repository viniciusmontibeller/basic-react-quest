import './button.css'

const AlertButton = ({label, color}) => {
    return <button className='btn' style={{color: color}} onClick={() => alert(`A label desse botão é ${label}`)}>{label}</button>
    
}

Button.defaultProps = {
    color: 'blue'
}

export default AlertButton