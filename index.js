import { AppRegistry } from 'react-native';
import App from './app/app';

import data from './app.json';
console.disableYellowBox = true;

AppRegistry.registerComponent(data.displayName, () => App);