import Task from '../../components/Task/index.js'

const printList = (list, $parent, clear = true) => {
    if (clear) $parent.innerHTML = ''

    list.forEach((item) => {
        const task = Task(item)

        $parent.appendChild(task)
    })
}

export default printList