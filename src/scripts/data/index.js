import generateId from "../modules/generateId.js";

const data = {
  todoList: [
    {
        _id: '0',
        name: "Tirar o lixo",
        done: false,
    },
    {
        _id: '1',
        name: "Lavar a louça",
        done: true,
    },
  ],

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

  update: () => {

  },

  delete: (id) => {
    const list = data.read()
    const newTodoList = data.todoList.filter((item) => item._id !== id)

    data.set(newTodoList)
  }
};

export default data;
