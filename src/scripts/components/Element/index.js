const Element = (props) => {
    const _element = document.createElement(props.type)

    props.classList?.forEach(className => className && _element.classList.add(className))
    props.src && (_element.src = props.src)
    props.textContent && (_element.textContent = props.textContent)
    props.children && props.children.forEach(children => _element.appendChild(children))
    props.onClick && _element.addEventListener('click', props.onClick)
    props.onKeyDown && _element.addEventListener('keydown', props.onKeyDown)
    props.onBlur && _element.addEventListener('blur', props.onBlur)

    return _element
}

export default Element