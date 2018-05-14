import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import {View} from 'react-native';
import Navigation from './shared/navigation';
import {styles} from "./styles/styles";

//cria state da aplicação
const store = createStore(reducers);


export default class App extends React.Component {
  render() {
    return (
        <Navigation />
    );
  }
}
