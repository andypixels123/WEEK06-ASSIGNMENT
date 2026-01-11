
function Button({ handler, btnclass, text, ariaText, tabText }) {
    return <button className={btnclass} onClick={handler} aria-label={ariaText} title={ariaText} tabIndex={tabText}>{text}</button>;
}

export default Button;
