import generateId from "../modules/generateId.js";

const data = {
  todoList: [],
  set: (newData) => {
    data.todoList = [...newData]
  },

  create: (task) => {
    const list = data.read()
    const id = generateId(40)

    data.set([...list, {_id: id, ...task}])
  },

  read: () => {
    return [...data.todoList]
  },

  update: (id, newData) => {
    const list = data.read()

    const newList = list.map((item) => {
      const data = {...item, ...newData}
      if (item._id === id) return data
      if (item._id !== id) return item
    })

    data.set(newList)
  },

  delete: (id) => {
    const list = data.read()
    const newTodoList = data.todoList.filter((item) => item._id !== id)

    data.set(newTodoList)
  }
};

export default data;
