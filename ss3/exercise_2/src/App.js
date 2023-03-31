import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state ={
      list: [],
      item: ""
    }
  }
  
  handleChange = (event) => {
    this.setState({
      item : event
    })
  }
  
  handleAdd = () => {
    let newArr = [...this.state.list, this.state.item]
    this.setState({
      item : "",
      list: newArr
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <div className="d-flex">
            <input onChange={(event) => this.handleChange(event.target.value)} type="text"></input>
            <input onClick={() => this.handleAdd()} type="button" value="Add"></input>
        </div>
  
        <ul>
          {
            this.state.list.map((item,index) => (
              <li key={index}>
                {item}
              </li>
            ))
          }
        </ul>
  
      </div>
    );
  }
}

export default App;
