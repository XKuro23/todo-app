import {useState} from 'react'
import {AiFillDelete,AiFillEdit,AiFillCheckCircle} from 'react-icons/ai'
import TodoForm from './TodoForm'

function Todo({todos, completeTodo,removeTodo, updateTodo}) {
    const [edit, setEdit] = useState({
        id:null,
        value:'',
    })

    const submitUpdate=value=>{
        value.id=edit.id;
        updateTodo(edit.id, value)
        setEdit({
            id:null,
            value:''
        })
    }

    if(edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate} buttonname="update todo list"/>
    }
  return todos.map((todo, index ) => (
      
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
        key={index}>
        
        <div key={todo.id}>
            {todo.text}
        </div>
        <div className='icons'>
            <AiFillCheckCircle
                onClick={()=>completeTodo(todo.id)}
                className='complete-icon'
            />
            <AiFillDelete 
                onClick={()=>removeTodo(todo.id)}
                className='delete-icon'
            />
            <AiFillEdit
                onClick={()=>setEdit({id:todo.id, value: todo.text})}
                className='update-icon'
            />
        </div>
    </div>
  ));
}

export default Todo