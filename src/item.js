import React, { Component } from 'react'
class ServiceItem extends Component {
  render() {
    console.log('child-render')
    return <li onClick={this.handleClick}>{this.props.name}</li>
  }
  handleClick = () => {
    this.props.delete(this.props.index)
  }
  shouldComponentUpdate(nextProps) {
    return nextProps.name !== this.props.name
  }
}
export default ServiceItem
