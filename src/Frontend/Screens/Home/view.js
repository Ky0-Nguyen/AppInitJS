import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { width, height } from 'react-native-dimension'

import CoreLayout from '../../Containers/CoreHeader'

export default class componentName extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  _renderItem = ({ item }) => {
    return (
      <View style={styles.contItem}>
        <Text style={styles.txtName}>{item.name}</Text>
        <Text style={styles.txtAge}>{item.age}</Text>
        <Text style={styles.txtLiense}>{item.liense}</Text>
      </View>
    )
  }

  render () {
    const { listUserData } = this.props
    return (
      <CoreLayout title={'Home'}>
        <View style={styles.container}>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={listUserData}
            onEndThreshold={10}
            renderItem={this._renderItem}/>
        </View>
      </CoreLayout>
    )
  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contItem: {
    width: width(90),
    borderRadius: 8,
    paddingVertical: height(3),
    backgroundColor: 'white',
    marginTop: height(2),
    alignSelf: 'center',
    // style shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },
  txtName: {

  }
})
