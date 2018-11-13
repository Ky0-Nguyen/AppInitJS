import React from 'react'
import {
  View,
  TouchableOpacity,
  Platform,
  StyleSheet, Text
} from 'react-native'
import { connect } from 'react-redux'
// Styles components
import { width, height } from 'react-native-dimension'
import { iconBack, iconAdd } from '../../../Common/GlobalIcons'


// |------------------------------|
// |--- RENDER MAIN VIEW START ---|
// |------------------------------|
const leftActionHeader = (action: any) => action
const rightActionHeader = (action: any) => action

interface Props {
  customRightIcon?: any
  customRightStyle?: any
  title?: string
  headerStyle?: any
  leftAction?: any
  rightAction?: any
  customView?: any
  _this?: any
  rightView?: any
  disabledCustomRightIcon?: boolean,
  userInfoData?: any
}

interface State {

}

class  CoreHeader extends React.PureComponent<Props, State> {
  render() {
    const {
        customRightIcon = iconAdd,
        customRightStyle,
        title,
        headerStyle,
        leftAction,
        rightAction,
        customView,
        _this,
        rightView,
        disabledCustomRightIcon = false,
        userInfoData
      } = this.props
      
      return (
        <View style={[styles.container, headerStyle]}>
          <View style={styles.coreStyle}>
            {
              leftAction
                ? <TouchableOpacity
                  hitSlop={{ top: 0, bottom: 0, left: 30, right: 30 }}
                  onPress={leftActionHeader(leftAction)}
                  style={styles.iconHeaderLeft}
                  >
                  {
                    iconBack
                  }
                  </TouchableOpacity>
                : <View style={styles.iconHeaderLeft}/>
            }
            {
              customView
            }
            <View style={ styles.txtTitleContainer}>
              <Text numberOfLines={1} style={styles.txtTitle} >{title}</Text>
            </View>
            {rightView}
            {
              rightAction ?
              <TouchableOpacity
                onPress={rightActionHeader(rightAction)}
                disabled={disabledCustomRightIcon}
                style={[styles.iconHeaderRight, customRightStyle] }>
                {
                  customRightIcon
                }</TouchableOpacity >
              : !rightView ? <View style={styles.iconHeaderRight}/> : <View/>
            }
          </View>
        </View >
      )
  }
}

const ISIOS = Platform.OS === 'ios'
const heightNavBar = height(11.5)
const topNavBarIOS = height(ISIOS ? 3 : 0)

const styles = StyleSheet.create({
  container: {
    height: heightNavBar + height(1),
    width: width(100),
    justifyContent: 'center',
    backgroundColor: '#FFCD02',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    position: 'absolute',
    zIndex: 99
  },
  coreStyle: {
    paddingTop: topNavBarIOS,
    height: heightNavBar,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    alignSelf: 'center',
  },
  txtTitleContainer: {
    width: width(70),
    height: heightNavBar,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 0,
    top: height(0.5),
    backgroundColor: 'transparent',
  },
  txtTitle: {
    color: '#111111',
    textAlign: 'center',
    fontSize: width(4.5)
  },
  txtTitleSub: {
    color: '#111111',
    textAlign: 'center',
    marginVertical: height(1)
  },
  iconHeaderLeft: {
    width: width(15),
    height: heightNavBar - topNavBarIOS ,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    alignItems: 'flex-start',
    alignSelf: 'center',
    paddingLeft: width(3)
  },
  iconHeaderRight: {
    width: width(15),
    height: heightNavBar - topNavBarIOS ,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'transparent',
    alignSelf: 'center',
    paddingRight: width(3)
  }
})
const mapStateToProps = (state: any) => {
  return {
    listUserData: state.listUserData
  }
}
export default connect (mapStateToProps, null)(CoreHeader)
