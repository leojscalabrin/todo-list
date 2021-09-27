import data from './data/index.js'
import printList from './modules/printList/index.js'

const $parent = document.querySelector('.box-task')
const $inputCreate = document.querySelector('.input-create')
const $buttonAdd = document.querySelector('.button-new-task')
const $form = document.querySelector('.form-box')

printList(data.read(), $parent)

$buttonAdd.addEventListener('click', () => {
    $inputCreate.classList.add('show')
})

$inputCreate.addEventListener('blur', () => {
    $inputCreate.classList.remove('show')
})

$form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (!$inputCreate.value) return
    data.create({name: $inputCreate.value})
    printList(data.read(), $parent)
    $inputCreate.value = ''
})