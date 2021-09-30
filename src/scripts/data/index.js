import generateId from "../modules/generateId/index.js";
import storage from "../modules/storage/index.js";

const data = {
  set: (newData) => {
    storage.set('todoList', newData)
  },

  create: (task) => {
    const list = data.read()
    const id = generateId(40)

    data.set([...list, {_id: id, ...task}]);
  },

  read: () => {
    const todoList = storage.get('todoList')
    return todoList ? todoList : []
  },

  update: (id, newData) => {
    const list = data.read()

    const newList = list.map((item) => {
      const data = { ...item, ...newData }
      if (item._id === id) return data
      if (item._id !== id) return item
    })

    data.set(newList)
  },

  delete: (id) => {
    const list = data.read()
    const newTodoList = list.filter((item) => item._id !== id)

    data.set(newTodoList)
  }
};

export default data
