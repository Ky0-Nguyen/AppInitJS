import React from 'react'
import { Router } from 'react-native-router-flux'
import { Provider, connect } from 'react-redux'

import { KEYSTORE } from './Common/GlobalConstants'
import scenes from './Common/GlobalRoutes'

import { checkLocalStoreToRedux } from './Controllers/Redux/Lib/reducerConfig'
import * as actions from './Controllers/Redux/Actions'
import init from './Controllers/Redux/Lib/initState'
import storeRedux from './Controllers/Redux/Store/configureStore'

const RouterWithRedux = connect()(Router)

class IndexApp extends React.Component {
  componentDidMount () {
    checkLocalStoreToRedux(storeRedux, KEYSTORE.LIST_USER, actions.setListUser, init.listUserInit)
  }
  render () {
    return (
      <Provider store={storeRedux}>
        <RouterWithRedux scenes={scenes} />
      </Provider>
    )
  }
}
export default IndexApp
