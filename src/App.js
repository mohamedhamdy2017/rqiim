/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';

import SplashScreen from 'react-native-splash-screen'

import { Provider } from 'react-redux'
import  {store} from './store'
import MainNav from './screens/MainNav'

export default class App extends Component {
    
    componentDidMount() {
        SplashScreen.hide()
      }
  render() {
    return (
        <Provider store={store}>
            <MainNav/>
        </Provider>
    );
  }
}
