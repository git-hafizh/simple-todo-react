import React from 'react';
import "./ListTasks.css";

const ListTasks = (props) =>{
    const task = props.task;
    const listTasks = task.map(item => {
        return <div className="list" key={item.key}>
            <p id="task-item">{item.text}</p>
        </div>
    })

    return(
        <div className="task">{listTasks}</div>
    )
}

export default ListTasks;