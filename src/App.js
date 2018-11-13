import React from 'react'
import scenes from './Common/GlobalRoutes'
import { Router } from 'react-native-router-flux'
import { Provider, connect } from 'react-redux'
import storeRedux from './Controllers/Redux/Store/configureStore'

const RouterWithRedux = connect()(Router)

class IndexApp extends React.Component {
  componentWillMount(){
    
  }
  render(){
    return (
      <Provider store={storeRedux}>
        <RouterWithRedux scenes={scenes} />
      </Provider>
    )
  }
}
export default IndexApp
