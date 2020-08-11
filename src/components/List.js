import React from "react"
import ListItem from "./ListItem"
export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      title: ''
    }
  }

  addItem = () => {
    const list = [...this.state.list, {
      value: this.state.title
    }]
    this.setState({list, title: ''})
  }
  changeTitle (title) {
    this.setState({title})
  }
  handleKeyUp = (key) => {
    if (key === 'Enter') {
      this.addItem()
    }
  }
  removeItem(index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({list})
  }
  render() {
    const list = this.state.list.map((el, i) => {
      return <p key={i} onDoubleClick={() => this.removeItem(i)}>{el.value}</p>
    })
    return <div>
      {list}
      <input type="text" value={this.state.title} onKeyUp={e => this.handleKeyUp(e.key)} onChange={event => this.changeTitle(event.target.value)}/>
      <button onClick={this.addItem}>add</button>
    </div>
  }
}
