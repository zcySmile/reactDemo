import React, { Component, Fragment } from 'react'
import Item from './item'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
  }
  inputChange = e => {
    this.setState({
      inputValue: e.target.value
    })
  }
  addService = () => {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  deleteService = index => {
    const temp = this.state.list
    temp.splice(index, 1)
    this.setState({
      list: temp
    })
  }
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="input">加入服务</label>
          <input
            id="input"
            value={this.state.inputValue}
            onChange={this.inputChange}
          />
          <button onClick={this.addService}>增加服务</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <Item
                name={item}
                index={index}
                delete={this.deleteService}
                key={index + item}
              />
            )
          })}
        </ul>
      </Fragment>
    )
  }
}
export default App
