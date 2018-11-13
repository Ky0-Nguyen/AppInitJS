import key from '../Lib/constants'
import {KEYSTORE} from '../../../Common/GlobalConstants'
import {checkStore} from '../Lib/reducerConfig'

export function setInternet (internet) {
  return {
    type: key.SET_INTERNET,
    payload: internet
  }
}

/** -------------------------------------
* @method - setListUser
* @param - value
* @author - Nguyen Anh Tuan / 2018-11-13 11:27:06
* @description description
* --------------------------------------- */
export function setListUser (value) {
  checkStore(value, KEYSTORE.LIST_USER)
  return {
    type: key.SET_LIST_USER,
    payload: value
  }
}
