import React, { Component } from 'react'

addItem() {
  const inputText = document.querySelector('#inputText');
  if (inputText.value) {
    const tempArr = [...this.state.items];
    tempArr.push('<li>{inputText.value}</li>');
    this.setState()
  }
}
export class ToDoList extends Component {
  render() {
    return (
      <ul>{this.props.items}</ul>
    )
  }
}

export default ToDoList