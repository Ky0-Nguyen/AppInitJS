import React, { Component } from 'react'
import { View } from 'react-native'

export default class componentName extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {
    this.props.loadInitial()
  }

  render () {
    return (
      <View/>
    )
  }
}
