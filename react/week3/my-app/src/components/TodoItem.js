import React from "react"

function TodoItem(props) {
  const completedStyle = {
      fontStyle: 'italic',
      color: '#cdcdcd',
      textDecoration: 'line-through'
  }

    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            <p style={props.item.completed ? completedStyle: null}>{props.item.text}</p>

            <div className="editable-text-box">
              <input
                type="text"
                id={props.item.id}
                value={props.item.text}
                onChange={(e) => {
                  props.updateInput(e.target.value, props.item.id)
                }}
              />
            </div>


            <div className="delete-btn">
              <input type="button" value="Delete" onClick={() => {
                props.deleteItem(props.item.id)
              }}/>
            </div>
        </div>
    )
}

export default TodoItem
