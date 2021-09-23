import Element from '../Element/index.js'

const Task = (props) => {
    const _taskWrapper = Element({
        type: 'li',
        classList: ['task-wrapper']
    })

    const _checkbox = Element({
        type: 'div',
        classList: ['checkbox']
    })

    const _spanCheckbox = Element({
        type: 'span',
        classList: ['span-checkbox'],
        textContent: props.name
    })

    const _inputHide = Element({
        type: 'input',
        classList: ['hide']
    })

    const _deleteTrash = Element({
        type: 'img',
        classList: ['delete-trash'],
        src: './imagem/trash-can.png'
    })

    _taskWrapper.appendChild(_checkbox)
    _taskWrapper.appendChild(_spanCheckbox)
    _taskWrapper.appendChild(_inputHide)
    _taskWrapper.appendChild(_deleteTrash)

    return _taskWrapper
}

export default Task