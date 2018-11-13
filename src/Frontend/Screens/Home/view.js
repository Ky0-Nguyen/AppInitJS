import React, { Component } from 'react'
import { View, FlatList, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native'
import { width, height } from 'react-native-dimension'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { filter, includes } from 'lodash/collection'

import CoreLayout from '../../Containers/CoreHeader'
import { CustomModal, CustomLoading } from '../../Components'

import ModalInfo from './components/modalInfo'

const iconUser = <FontAwesome name="user-o" size={width(20.5)} color={'#C3C3C3'} />
const iconSearch = <FontAwesome name="search" size={width(10)} color={'#C3C3C3'} />

const NumberRowOfPage = 21

export default class componentName extends Component {
  constructor (props) {
    super(props)
    this.state = {
      listData: [],
      listDataSearch: [],
      isLoading: false,
      pageLoad: 1,
      driveSelected: {}
    }
  }

  /** -------------------------------------
  * @method - method
  * @param - param
  * @author - Nguyen Tuan / 2018-11-13 19:55:04
  * @description description
  * --------------------------------------- */
  componentDidMount () {
    this._loadInitialData()
  }

  /** -------------------------------------
  * @method - method
  * @param - param
  * @author - Nguyen Tuan / 2018-11-13 19:55:00
  * @description description
  * --------------------------------------- */
  _loadInitialData = () => {
    const { listUserData } = this.props
    const { pageLoad } = this.state
    let listData = []
    listUserData.map((item, index) => {
      if (index < (NumberRowOfPage * pageLoad)) {
        listData.push(item)
      }
    })
    this.setState({ listData })
  }
  /** -------------------------------------
  * @method - method
  * @param - param
  * @author - Nguyen Tuan / 2018-11-13 17:15:35
  * @description description
  * --------------------------------------- */
  handleEnd=() => {
    this.setState({ pageLoad: this.state.pageLoad + 1 }, () => {
      this._loadInitialData()
    })
  }

  _onSelect =(item) => () => {
    this.setState({ driveSelected: item }, () => this.modalInfo._showModal())
  }
  /** -------------------------------------
  * @method - method
  * @param - param
  * @author - Nguyen Tuan / 2018-11-13 15:10:25
  * @description description
  * --------------------------------------- */
  _renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={this._onSelect(item)}>
        <View style={styles.contItem}>
          <View style={styles.contImage}>
            {iconUser}
          </View>
          <Text style={styles.txtContent}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  /** -------------------------------------
  * @method - method
  * @param - param
  * @author - Nguyen Tuan / 2018-11-13 15:10:17
  * @description description
  * --------------------------------------- */
  _internalSearch = (input) => {
    const { listUserData } = this.props
    return filter(listUserData, (item) => {
      return this._depthFirstSearch(item, input)
    })
  }

  /** -------------------------------------
  * @method - method
  * @param - param
  * @author - Nguyen Tuan / 2018-11-13 16:33:17
  * @description description
  * --------------------------------------- */
  _depthFirstSearch = (collection, input) => {
    let type = typeof collection.name
    if (type === 'string' || type === 'number' || type === 'boolean') {
      return includes(collection.name.toString().toLowerCase(), input.toString().toLowerCase())
    }
    return []
  }

  /** -------------------------------------
  * @method - method
  * @param - param
  * @author - Nguyen Tuan / 2018-11-13 16:33:11
  * @description description
  * --------------------------------------- */
  _onChangeSearch =(text) => {
    this.setState({ listDataSearch: this._internalSearch(text) })
  }

  /** -------------------------------------
  * @method - method
  * @param - param
  * @author - Nguyen Tuan / 2018-11-13 19:57:09
  * @description description
  * --------------------------------------- */
  render () {
    const { listDataSearch, listData, driveSelected } = this.state
    return (
      <CoreLayout title={'Home'} rightAction={() => console.log('tuan')}>
        <View style={styles.container}>
          <View style={styles.contSearch}>
            <TextInput style={styles.inp} onChangeText={this._onChangeSearch}/>
            {iconSearch}
          </View>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={listDataSearch.length === 0 ? listData : listDataSearch}
            onEndThreshold={0}
            numColumns={3}
            onEndReached={this.handleEnd}
            columnWrapperStyle={styles.columnWrapperStyle}
            renderItem={this._renderItem}
            extraData={this.state}
          />
        </View>
        <CustomModal style={styles.modalInfo} ref={refs => (this.modalInfo = refs)}>
          <ModalInfo data={driveSelected} closeModal={() => this.modalInfo._hideModal()}/>
        </CustomModal>
        <CustomLoading style={styles.modalLoading} isProcess={this.state.isLoading}/>
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
  modalInfo: {
    top: height(15)
  },
  modalLoading: {
    top: height(25)
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
