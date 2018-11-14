import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { width, height } from 'react-native-dimension'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const iconUser = <FontAwesome name="user-o" size={width(20)} color={'#C3C3C3'} />
const iconEdit = <FontAwesome name="edit" size={width(10)} color={'#111111'} />
const iconPhone = <FontAwesome name="phone" size={width(10)} color={'#111111'} />
const iconDelete = <MaterialCommunityIcons name="delete" size={width(10)} color={'#111111'} />
const iconCar = <FontAwesome name="car" size={width(10)} color={'#111111'}/>
const iconClose = <FontAwesome name="close" size={width(10)} color={'#111111'}/>

const componentName = ({ data, closeModal, openModalDelete, openModalEdit }) => (
  <View style={styles.container}>
    <View style={styles.contInfo}>
      <View style={styles.contLeft}>

        {/* Name  */}
        <View>
          <Text style={styles.txtTitle}>{'Age driver'}</Text>
          <Text style={styles.txtContent}>{data.age}</Text>
        </View>

        {/* Liense */}
        <View>
          <Text style={styles.txtTitle}>{'Liense driver'}</Text>
          <Text style={styles.txtContent}>{data.liense}</Text>
        </View>

        {/*  Phone number */}
        <View>
          <Text style={styles.txtTitle}>{'Cell phone driver'}</Text>
          <Text style={styles.txtContent}>{data.phone}</Text>
        </View>
      </View>
      <View style={styles.contRight}>
        <View style={styles.contImage}>
          {iconUser}
        </View>
        <Text style={styles.txtContent}>{data.name}</Text>
      </View>
    </View>
    <View style={styles.contFunction}>
      <TouchableOpacity>
        {iconPhone}
      </TouchableOpacity>
      <TouchableOpacity>
        {iconCar}
      </TouchableOpacity>
      <TouchableOpacity onPress={openModalEdit}>
        {iconEdit}
      </TouchableOpacity>
      <TouchableOpacity onPress={openModalDelete}>
        {iconDelete}
      </TouchableOpacity>
      <TouchableOpacity onPress={closeModal}>
        {iconClose}
      </TouchableOpacity>
    </View>
  </View>
)

export default componentName
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: width(90),
    borderRadius: 8,
    paddingTop: height(2),
    paddingHorizontal: width(3)
  },
  contInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  contImage: {
    width: width(30),
    height: width(30),
    borderWidth: 1,
    borderColor: '#C3C3C3',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contLeft: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: height(2)
  },
  contRight: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  contFunction: {
    borderTopWidth: 1,
    borderColor: '#F0F0F0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: height(2)
  },
  txtTitle: {
    fontSize: width(5)
  },
  txtContent: {
    fontSize: width(4),
    fontWeight: 'bold'
  }
})
