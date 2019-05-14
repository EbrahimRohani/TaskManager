/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import MainStackNavigation from './StackNavigator'
import {store, persistor} from '../store/index';
import {Provider} from 'react-redux';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store} >
        <MainStackNavigation /> 
      </Provider>
    );
  }
}
