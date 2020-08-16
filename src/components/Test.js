import React, {Component} from "react"
export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      first: 'first',
      second: '',
      third: ''
    }
  }
  handleInput(event) {
    event.persist()
    console.log(event.target.name)
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return <div>
      <label>
        <input name='first' value={this.state.first} onChange={(e) => this.handleInput(e)} />
        <input name='second' value={this.state.second} onChange={(e) => this.handleInput(e)} />
        <input name='third' value={this.state.third} onChange={(e) => this.handleInput(e)} />
      </label>
    </div>
  }
}
