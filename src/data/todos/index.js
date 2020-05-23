import uuid from "uuid/v1";

const getTodos = () => [
    newTodo({ Text: "Tarea 1", done:false }), 
    newTodo({ Text: "Tarea 2", done:false }), 
    newTodo({ Text: "Tarea 3", done:false }),
    newTodo({ Text: "Tarea 4", done:true }),
    newTodo({ Text: "Tarea 5", done:false })
   ];

   const newTodo = todo =>({
       id: uuid(),
       Text: todo.Text,
       createdAt: new Date(),
       done: todo.done
   });

   const updateTodo = (list, todo) => {
    const updateIndex = list.findIndex(t => t.id === todo.Text);
    const newTodoList = [...list];
    newTodoList[updateIndex] = todo;
    return newTodoList;
  };
  

  const addTodo = (list, todo) => [...(list || []), newTodo(todo)];

  const deleteTodo = (list, todo) => list.filter(t => t.id !== todo.id);
    
   


  export { getTodos, addTodo, updateTodo, deleteTodo };