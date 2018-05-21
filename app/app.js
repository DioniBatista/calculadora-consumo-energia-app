import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import Navigation from './shared/navigation';

//cria state da aplicação
const store = createStore(reducers);

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
              <Navigation />
        </Provider>
    );
  }
}
