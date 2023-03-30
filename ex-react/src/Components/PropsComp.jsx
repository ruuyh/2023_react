import React, { Component } from 'react'

export class PropsComp extends Component {
  render() {
    const {color, children} = this.props
    return (
      <div style={{color:color}}>PropsComp</div>
    )
  }
}

export default PropsComp