
function Button({ handler, text, ariaText, tabText }) {
    return <button onClick={handler} aria-label={ariaText} title={ariaText} tabIndex={tabText}>{text}</button>;
}

export default Button;
