import React, { Component } from 'react'
import { View, FlatList, StyleSheet, TextInput, Text } from 'react-native'
import { width, height } from 'react-native-dimension'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import CoreLayout from '../../Containers/CoreHeader'

const iconUser = <FontAwesome name="user-o" size={width(20.5)} color={'#C3C3C3'} />
const iconSearch = <FontAwesome name="search" size={width(10)} color={'#C3C3C3'} />
export default class componentName extends Component {
  constructor (props) {
    super(props)
    this.state = {
      listData: [],
      listDataSearch: []
    }
  }

  _renderItem = ({ item }) => {
    return (
      <View style={styles.contItem}>
        <View style={styles.contImage}>
          {iconUser}
        </View>
        <Text style={styles.txtContent}>{item.name}</Text>
      </View>
    )
  }

  _onChangeSearch =() => {

  }

  render () {
    const { listUserData } = this.props
    const { listDataSearch } = this.state
    return (
      <CoreLayout title={'Home'}>
        <View style={styles.container}>
          <View style={styles.contSearch}>
            <TextInput style={styles.inp}/>
            {iconSearch}
          </View>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={listDataSearch.length === 0 ? listUserData : listDataSearch}
            onEndThreshold={10}
            numColumns={3}
            columnWrapperStyle={styles.columnWrapperStyle}
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
    borderRadius: 8,
    paddingVertical: height(1),
    paddingHorizontal: width(3),
    backgroundColor: 'white',
    marginTop: height(1),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // style shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },
  contImage: {
    width: width(20),
    height: width(20),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F0F0F0',
    backgroundColor: 'white'
    // shadow

  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
    paddingHorizontal: width(3)
  },
  contSearch: {
    height: height(7),
    width: width(100),
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: width(3)
  },
  inp: {
    width: width(84),
    paddingVertical: height(1)
  },
  txtContent: {
    fontSize: width(5),
    fontWeight: 'bold'
  }
})
