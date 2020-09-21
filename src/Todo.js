import React from 'react';

const Todo = (props) => {
    return(
        <div>
            <div key={props.id}>{props.text}</div>
            <button onClick={() => props.handleDelete(props.id)}>X</button>
        </div>
    )
}

export default Todo;