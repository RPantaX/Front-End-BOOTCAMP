import { useState } from "react";
import { TodoList } from "./TodoList";
import { Header } from "./components/Header";

const App = () => {
  const INITIAL_TODOS=[
    { id:'1',
      title:'Aprende JS',
      completed: false
    },
    {
      id: '2',
      title: 'Aprender CSS',
      completed: true
    },
    {
      id: '3',
      title:'Aprender React.js',
      completed: false
    }
];

  const [todos, setTodos] = useState(INITIAL_TODOS);
  const [input, setInput] = useState('hola')

  const handleChange = (event)=>{
      const value= event.target.value;
      setInput(value)
      }
  const handleSubmit =(event)=>{
    const newTodo = {
      id:crypto.randomUUID(),
      title:input,
      completed: false
    }
    event.preventDefault();
    const all = [...todos, newTodo];
    setTodos(all);
  }
  const handleDelete = (event)=>{
    const {id} = event.target.dataset;
    const todosNow= todos.filter((todo)=>todo.id!==id);
    setTodos(todosNow);
  }
  const handleCompleted = (event)=>{
    const isChecked = event.target.checked;
    const idSelected = event.target.dataset.id;
    console.log(idSelected, isChecked);
    const newTodos = todos.map(todo=>{
      if(todo.id===idSelected){
        return {...todo, completed:isChecked}
      }
      return todo;
    });
    console.log(newTodos);
    setTodos(newTodos);
  }
  const HandleClearAll =()=>{  
    setTodos([])
  }
  const totalTodos = todos.length;
  const completedTodos= todos.filter(todo=>todo.completed ).length;
  return (
    <main className="bg-yellow-100 w-full max-w-sm mx-auto mt-10 border border-yellow-600 rounded-lg shadow-lg p-4">
    <Header />
    <form 
    className="flex items-center gap-2"
    onSubmit={handleSubmit}
    >
      <input
        className="w-full border my-3 p-3"
        type="text"
        placeholder="¿Qué deseas hacer hoy?"
        required
        onChange={handleChange}
        value={input}
      />
      <input
      className="bg-blue-300  font-bold rounded-lg px-2 py-2 cursor-pointer"
        type="submit" 
        value="Añadir" 
      />
    </form>
    {
      totalTodos > 0 
      && 
      (
      <div className="flex justify-between items-center">
        <span className="font-bold">{completedTodos} de {todos.length}</span>
        <button onClick={HandleClearAll} className="bg-blue-500 rounded-lg px-2 py-1 text-white
        hover:bg-blue-600 duration-300">Limpiar tareas completadas</button>
      </div>
      )
    }
    <section className="mt-8">
      <TodoList todos={todos} onCompleted={handleCompleted} onDelete = {handleDelete}/>
    </section>
    </main>
    
  )
}
export default App