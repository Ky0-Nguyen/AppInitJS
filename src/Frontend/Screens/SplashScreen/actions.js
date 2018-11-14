import store from 'react-native-simple-store'
import { Actions } from 'react-native-router-flux'

import { driver } from '../../../fakeData'
import { setListUser } from '../../../Controllers/Redux/Actions'
import { KEYSTORE } from '../../../Common/GlobalConstants'

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
* @method - loadInitial
* @param - param
* @author - Nguyen Tuan / 2018-11-13 12:57:01
* @description description
* --------------------------------------- */
export const loadInitial = () => {
  return async (dispatch) => {
    let listUser = await store.get(KEYSTORE.LIST_USER)
    if (!listUser || listUser.length === 0) {
      dispatch(setListUser(driver))
    }
    setTimeout(() => {
      _this.setState({ isProcess: false }, () => Actions.home())
    }, 2500)
  }
}
