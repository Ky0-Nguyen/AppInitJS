import key from '../Lib/constants'

export function setInternet (internet) {
  return {
    type: key.SET_INTERNET,
    payload: internet
  }
}

/** -------------------------------------
* @method - setListUser
* @param - value
* @author - Van Chau / 2018-11-13 11:27:06
* @description description
* --------------------------------------- */
export function setListUser (value) {
  return {
    type: key.SET_LIST_USER,
    payload: value
  }
}
