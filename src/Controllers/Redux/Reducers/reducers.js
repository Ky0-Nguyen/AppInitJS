import createReducer from '../Lib/reducerConfig'
import key from '../Lib/constants'
import init from '../Lib/initState'

export const internetData = createReducer(init.internetInit, {
  [key.SET_INTERNET] (state, action) {
    return action.payload
  }
})

/** -------------------------------------
* @method - method
* @param - param
* @author - Nguyen Tuan / 2018-11-13 12:07:48
* @description description
* --------------------------------------- */
export const listUserData = createReducer(init.listUserInit, {
  [key.SET_LIST_USER] (state, action) {
    return action.payload
  }
})
