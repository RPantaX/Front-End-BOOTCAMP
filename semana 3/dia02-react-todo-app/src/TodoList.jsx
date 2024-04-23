import React from 'react'

export const TodoList = ({todos, onCompleted, onDelete }) => {
  
  return (
    <ul className="flex flex-col gap-4">
        {todos?.map(todo=>{
          return (
              <li className="flex" key={todo.id}>
                <input 
                  type="checkbox"
                  className="mr-2" 
                  data-id = {todo.id}
                  onClick={onCompleted}
                  checked={todo.completed}
                />
                <div className="w-full flex justify-between items-center">
                  <span
                  className={todo.completed? 'line-through' : ''}
                  >
                    {todo.title}
                    </span>
                  <button
                  className="bg-red-300 rounded-lg px-2 py-2"
                  data-id={todo.id}
                  onClick={onDelete}
                  >
                    ✖️</button>
                </div>
                </li>
          )
        })}
      </ul>
  )
}
