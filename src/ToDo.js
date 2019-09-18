import React, { Component } from 'react';
import './ToDo.css';
import TodoItem from './components/ToDoItem';
import Logo from './logo.svg';

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          'todo': 'clean the house'
        },
        {
          'todo': 'buy milk'
        }
      ],
      todo: ''
    };
  };

  createNewToDoitem = () => {
    this.setState(({ list, todo }) => ({
      list: [
        ...list,
        {
          todo
        }
      ],
      todo: ''
    }));
  };

  handleKeyPress = e => {
    if (e.target.value !== '') {
      if (e.key === 'Enter') {
        this.createNewToDoitem();
      }
    }
  };

  handleInput = e => {
    this.setState({
      todo: e.target.value
    });
  };

  deleteItem = indexToDelete => {
    this.setState(({ list }) => ({
      list: list.filter((toDo, index) => index !== indexToDelete)
    }));
  };

  render() {
    return (
      <div className="ToDo">
        <img className="Logo" src={Logo} alt="React Logo"/>
        <h1 className="ToDo-Header">React To Do</h1>
        <div className="ToDo-Container">
          {this.state.list.map((item, key) => {
            return <TodoItem
              key={key}
              item={item.todo}
              deleteItem={this.deleteItem.bind(this, key)} />
          })}
        </div>
        <div>
          <input type="text" value={this.state.todo} onChange={this.handleInput} onKeyPress={this.handleKeyPress}/>
          <button className="ToDo-Add" onClick={this.createNewToDoitem}>+</button>
        </div>
      </div>
    )
  }
};

export default ToDo;