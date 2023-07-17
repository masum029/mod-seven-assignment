import React,{useState} from "react";



function TodoS(){
    const [todo, setTodo]=useState('');
    const [warning, setWarning]=useState(null);


    const handelInput=(p)=>{
const inputValue=p.target.value;
const UpdatedWarning=inputValue.includes('.jsx')
? 'You need JS skill to complete this task. Do you have?'
:null

setTodo(inputValue);
setWarning(UpdatedWarning);

    }

    return(
        <div>
            <p>{todo}</p>
            <textarea name="todo" value={todo} onChange={handelInput}></textarea>
            <h2>{warning || "Best of Luck."}</h2>
        </div>
    )
}

const removeTodo=()=>{

}

function Task(){

    const [tasks, setTasks]=useState([]);
    const [newtask, setNewTask]=useState('');

    
    return(
        <div className="container mt-4">
        <h1 className="text-center">Todo List</h1>
        <div className="input-group mb-3">
            <input type="text" className="form-control" onChange={(e)=>e.target.value}/>
        </div>
        <ul className="list-group">
{
    tasks.map((task,index)=>{
<li key={index}  className="list-group-item d-flex justify-content-between align-items-center">
    {task}
    <button className="btn btn-danger" onClick={()=>removeTodo(index)}></button>
</li>
    })
}
        </ul>
        </div>
    )
}


export default TodoS;