import React from "react"
import ReactDOM from 'react-dom';

export default class extends React.Component {
  constructor(args) {
    super(args)
    this.state = {
      list: []
    }
  }
  addItem = () => {
    const list = [...this.state.list, {
      value: Math.random()
    }]
    this.setState({list})
  }
  render () {
    return <button onClick={this.addItem}>AddItem</button>
  }
}
