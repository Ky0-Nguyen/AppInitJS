import { setListUser } from '../../../Controllers/Redux/Actions'

/** -------------------------------------
* @method - method
* @param - param
* @author - Nguyen Tuan / 2018-11-14 08:14:46
* @description description
* --------------------------------------- */
let _this
export const funcDefaultThis = (THIS) => {
  return () => {
    _this = THIS
  }
}

/** -------------------------------------
* @method - method
* @param - param
* @author - Nguyen Tuan / 2018-11-14 08:08:47
* @description description
* --------------------------------------- */
export const onAdd = () => {
  return (dispatch, getState) => {
    const { listUserData } = _this.props
    const { txtName, txtAge, txtLiense, txtPhone } = _this.state

    let arrListUser = listUserData
    let itemTemp = {
      id: Number(listUserData[listUserData.length - 1].id) + 1,
      name: txtName,
      age: txtAge,
      liense: txtLiense,
      phone: txtPhone,
      img: ''
    }
    arrListUser.push(itemTemp)
    dispatch(setListUser(arrListUser))
    _this._loadInitialData()
    _this.setState({ isShowModalAdd: false })
  }
}

export const onEdit = () => {
  return (dispatch) => {
    const { listUserData } = _this.props
    const { txtName, txtAge, txtLiense, txtPhone, driveSelected } = _this.state
    let arrListUser = listUserData
    objIndex = arrListUser.findIndex(obj => obj.id === driveSelected.id)

    arrListUser[objIndex].id = driveSelected.id
    arrListUser[objIndex].name = txtName
    arrListUser[objIndex].age = txtAge
    arrListUser[objIndex].liense = txtLiense
    arrListUser[objIndex].phone = txtPhone

    dispatch(setListUser(arrListUser))
    _this._loadInitialData()
    _this.setState({ isShowModalEdit: false })
  }
}
/** -------------------------------------
* @method - method
* @param - param
* @author - Nguyen Tuan / 2018-11-14 08:40:07
* @description description
* --------------------------------------- */
export const onDelete = (item, index) => {
  return (dispatch) => {
    const { listUserData } = _this.props
    let arrListUser = listUserData
    arrListUser.remove(_this.state.driveSelected)
    dispatch(setListUser(arrListUser))

    _this._loadInitialData()
    _this.modalDelete._hideModal()
  }
}

/** -------------------------------------
* @method - method
* @param - param
* @author - Nguyen Tuan / 2018-11-14 08:14:51
* @description description
* --------------------------------------- */
const INPUT_NAME = 'inpName'
const INPUT_AGE = 'inpAge'
const INPUT_LIENSE = 'inpLiense'
const INPUT_PHONE = 'inpPhone'

export const onChangeText = (text, refs) => {
  return () => {
    switch (refs) {
    case INPUT_NAME:
      _this.setState({ txtName: text })
      break
    case INPUT_AGE:
      _this.setState({ txtAge: text })
      break

    case INPUT_LIENSE:
      _this.setState({ txtLiense: text })
      break

    case INPUT_PHONE:
      _this.setState({ txtPhone: text })
      break

    default:
      _this.setState({ txtName: text })
      break
    }
  }
}
