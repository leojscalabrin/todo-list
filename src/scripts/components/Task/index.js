import data from '../../data/index.js'
import printList from '../../modules/printList/index.js'
import Element from '../Element/index.js'

const Task = (props) => {
    const _checkbox = Element({
        type: 'div',
        classList: ['checkbox', props.done ? 'checked' : ''],
        onClick: () => {
            const $parent = document.querySelector('.box-task')
            _checkbox.classList.toggle('checked')
            data.update(props._id, { done: !props.done })

            printList(data.read(), $parent)
        }
    })

    const _spanCheckbox = Element({
        type: 'span',
        classList: ['span-checkbox'],
        textContent: props.name,
        onClick: () => {
            _spanCheckbox.classList.add['hide']
            _inputHide.classList.remove['hide']
            _inputHide.value = props.name
            _inputHide.focus()
        }
    })

    const _inputHide = Element({
        type: 'input',
        classList: ['hide'],
        onKeyDown: (event) => {
            const $parent = document.querySelector('.box-task')
            const key = event.key

            if (key === 'Enter') {
                data.update(props._id, {name: _inputHide.value})
                printList(data.read(), $parent)
            }
            },
            onBlur: () => {
                const $parent = document.querySelector('.box-task')

                data.update(props._id, {name: _inputHide.value})
                printList(data.read(), $parent)
            }
    })

    const _deleteTrash = Element({
        type: 'img',
        classList: ['delete-trash'],
        src: '../imagem/trash-can.png',
        onClick: () => {
            const $parent = document.querySelector('.box-task')
            data.delete(props._id)
            printList(data.read(), $parent)
        }
    })

    const _taskWrapper = Element({
        type: 'li',
        classList: ['task-wrapper'],
        children: [_checkbox, _spanCheckbox, _inputHide, _deleteTrash]
    })

    return _taskWrapper
}

export default Task