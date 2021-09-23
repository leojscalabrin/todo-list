import data from './data/index.js'
import printList from './modules/printList/index.js'

const parent = document.querySelector('.box-task')

printList(data.todoList, parent)