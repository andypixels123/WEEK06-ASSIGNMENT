
function Button({ handler, text, ariaText }) {
    return <button onClick={handler} aria-label={ariaText} >{text}</button>;
}

export default Button;
