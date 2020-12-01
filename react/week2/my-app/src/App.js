import React, {useState, useEffect} from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: todosData,
            setTodos: todosData
        }

        // const [todos, setTodos] = useState(todosDatas);
        // this.setTodos = setTodos;
        // this.todos = todos;

        this.handleChange = this.handleChange.bind(this)
        this.addTodo = this.addTodo.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    addTodo() {
      const newTodo = {
        id: this.state.todos.length + 1,
        text: "make lunch box",
        completed: false,
      }
      const newTodos = this.state.todos.concat([newTodo]);
      this.setState({
        todos: newTodos
      })
    }


    deleteItem(id){
      //debugger
    const filteredItems= this.state.todos.filter(item =>
      item.id!==id);
      this.setState({
      todos: filteredItems
    })
  }


    render() {
        const todoItems = this.state.todos.map
        (item =>
          <TodoItem
          key={item.id}
          item={item}
          handleChange={this.handleChange}
          addTodo={this.addTodo}
          deleteItem={this.deleteItem}
        />)

        return (
            <div className="todo-list">
              {todoItems}
              <Timer />
            <button onClick={this.addTodo}>Add todo</button>
            </div>
        )
    }
}





const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1)
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div>
      <p>You have used {count} seconds on this website.</p>
    </div>
  )
}
export default App
