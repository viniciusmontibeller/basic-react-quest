import './text.css'

const HighlightedText = (props) => {
    return <p className='highlighted-text' style={{color: props.textColor, textTransform: "uppercase"}}>{props.text}</p>
}

export default HighlightedText