import React from "react"
import TodoItem from "./components/TodoItem"
import todosData from "./components/todosData"
import Timer from "./components/Timer"


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: todosData,
            //setTodos: todosData,
            newItem: "",
            deadline: ""
        }

        // const [todos, setTodos] = useState(todosDatas);
        // this.setTodos = setTodos;
        // this.todos = todos;

        this.handleChange = this.handleChange.bind(this)
        this.addTodo = this.addTodo.bind(this)
        this.updateInput = this.updateInput.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }

    handleChange(id) {
      this.setState((prevState) => {
        const updatedTodos = prevState.todos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
          } else {
            return todo;
          }
        });
        return { todos: updatedTodos };
      });
    }

    addTodo(e) {
      e.preventDefault();
      const newTodo = {
        id: this.state.todos.length + 1,
        text: this.state.newItem,  // text should match with the input box
        completed: false,
        date: this.state.deadline
      }
      //const newTodo = this.state.todos;
      const newTodos = this.state.todos.concat([newTodo]);
      this.setState({
        todos: newTodos
      })
    }

    updateInput(value, id) { //original key, value
    //  const items = this.state.todos;
      // items.map(item => {
      //   if(item.id === id) {
      //     item.text=text;
      //   }
      // })

      this.setState((prevState) => {
        const updatedTodos = prevState.todos.map((todo) => {
          if(todo.id === id) {
            return {...todo, text: value}
          }else {
            return todo;
          }
        })
        return {todos: updatedTodos}
      })

      // this.setState({
      //   newItem: value
      // })
      // console.log(value);
    }

    deleteItem(id){
      //debugger
    const filteredItems= this.state.todos.filter(item =>
      item.id!==id); //true: keep it, false means discard(delete)
      this.setState({
      todos: filteredItems
    })
    // if(todoItems === 0){
    //   this.setState({
    //     tpdps: "No items"
    //   })
    // }
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
          updateInput={this.updateInput}
        />)

        return (
          <div className="todo-list">
          <Timer />

            <div className="add-todo">
              <label>Add an item...</label>
              <input
                type="text"
                placeholder="Type item here..."
                value={this.state.newItem}
                onChange={e => this.updateInput(e.target.value)}
              />
            </div>

            <div className="date">
              <label for="deadline">Deadline</label>
              <input
                type="date" id="start" name="deadline"
                // value="2020-01-01"
                min="2020-01-01"
                max="2020-12-31"
                value={this.state.deadline}
                onChange={e => this.updateInput(e.target.value)}
              />
            </div>

            <button onClick={this.addTodo}>Add to the list</button>

              {todoItems}

          </div>
        )
    }
}

export default App

// <input
//   type="text"
//   id={item.id}
//   value={todoItems}
// />
