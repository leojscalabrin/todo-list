import Task from '../../components/Task/index.js'

const printList = (list, parent) => {
    list.forEach((item) => {
        const task = Task()

        parent.appendChild(task)
    })
}

export default printList