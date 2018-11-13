import React from 'react'
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  Text
} from 'react-native'
import * as Animatable from 'react-native-animatable'
import { height, width } from 'react-native-dimension'

class MyClass extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isShowState: null
    }
  }
  _hideModal = () => {
    Keyboard.dismiss()
    this.setState({
      isShowState: false
    })
  }
  _showModal = () => {
    Keyboard.dismiss()
    this.setState({
      isShowState: true
    })
  }
  render () {
    const {
      isShowModal,
      style,
      iError = 2,
      message = '',
      onPress
    } = this.props
    const { isShowState } = this.state
    return (
      (isShowModal || isShowState)
        ? <View {...this.props} style={styles.contModal}>
          <TouchableWithoutFeedback onPress={() => {
            onPress && onPress()
            this._hideModal()
          }}>
            <View style={styles.contBackground}/>
          </TouchableWithoutFeedback>
          <Animatable.View duration={500} animation='zoomIn' style={[ styles.contComponent, style ]}>
            {
              this.props.children ||
                <View style={styles.container}>
                  <TouchableOpacity hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }} style={styles.btn} onPress={() => {
                    onPress && onPress()
                    this._hideModal()
                  }}>
                    <Text style={styles.txtButton}>{'X'}</Text>
                  </TouchableOpacity>
                  <View style={styles.contHeader}>
                    {
                      iError === 0
                        ? <Text>{'Error'}</Text>
                        : iError === 1
                          ? <Text>{'Warning'}</Text>
                          : <Text>{'Success'}</Text>
                    }
                  </View>
                  <View style={styles.contContent}>
                    <Text style={styles.txtMessage}>{message || 'Successfully!!'}</Text>
                  </View>
                </View>
            }
          </Animatable.View>
        </View>
        : <View/>
    )
  }
}

export default MyClass

const styles = StyleSheet.create({
  contModal: {
    height: height(100),
    width: width(100),
    position: 'absolute',
    zIndex: 999
  },
  contBackground: {
    height: height(100),
    width: width(100),
    position: 'absolute',
    zIndex: 1000,
    backgroundColor: 'black',
    opacity: 0.2
  },
  contComponent: {
    width: width(90),
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    position: 'absolute',
    top: height(35),
    zIndex: 1001,
    alignSelf: 'center'
  },
  container: {
    flex: 1
  },
  contHeader: {
    height: height(15),
    width: width(90),
    justifyContent: 'center',
    alignItems: 'center'
  },
  contContent: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: width(5),
    paddingVertical: height(2)
  },
  txtMessage: {
    color: '#111111',
    textAlign: 'center',
    fontSize: width(4)
  },
  txtButton: {
    color: '#111111',
    fontSize: width(6)
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    marginLeft: width(80),
    marginTop: height(2),
    zIndex: 1000
  }
})
