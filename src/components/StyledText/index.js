import './text.css'

const StyledText = (props) => {
    return <p className='highlighted-text' style={{color: props.textColor, textTransform: "uppercase"}}>{props.text}</p>
}

export default StyledText