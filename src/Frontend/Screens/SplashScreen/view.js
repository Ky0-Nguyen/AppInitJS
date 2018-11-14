import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Spinner from 'react-native-spinkit'
import { Color } from '../../../Common/GlobalStyles'
import { width } from 'react-native-dimension'

export default class componentName extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isProcess: true
    }
    props.funcDefaultThis(this)
  }

  componentDidMount () {
    this.props.loadInitial()
  }

  render () {
    return (
      <View style={styles.container}>
        <Spinner isVisible={this.state.isProcess} size={width(6)} type={'Circle'} color={Color.background}/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
