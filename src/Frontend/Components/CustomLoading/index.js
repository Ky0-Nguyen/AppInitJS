// import liraries
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { width, height } from 'react-native-dimension'

import CustomModal from '../CustomModal'

import { Color } from '../../../Common/GlobalStyles'

import Spinner from 'react-native-spinkit'

const MyClass = ({ isProcess, style }) => {
  return (
    <CustomModal style={[styles.modalLoading, style]} isShowModal={isProcess}>
      <View style={styles.loadingPage}>
        <Spinner isVisible={isProcess} size={width(6)} type={'Circle'} color={Color.background}/>
        <Text style={styles.txtLoading}>{'Loading ...'}</Text>
      </View>
    </CustomModal>
  )
}
export default MyClass

const styles = StyleSheet.create({
  modalLoading: {
    top: height(25),
    backgroundColor: 'transparent'
  },
  txtLoading: {
    top: height(2),
    fontSize: width(6),
    color: '#111'
  },
  loadingPage: {
    paddingVertical: height(3),
    paddingHorizontal: width(10),
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    alignSelf: 'center'
  }
})
