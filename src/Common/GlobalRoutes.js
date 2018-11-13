import React from 'react'
import { Actions, Scene } from 'react-native-router-flux'

import SplashScreen from '../Frontend/Screens/SplashScreen'
import Home from '../Frontend/Screens/Home'

const scenes = Actions.create(
  <Scene key='root' hideNavBar hideTabBar>
    <Scene key='splashScreen' component={SplashScreen} initial={true}/>
    <Scene key='home' component={Home}/>
  </Scene>
)
export default scenes
