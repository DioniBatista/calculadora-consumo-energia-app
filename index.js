import { AppRegistry } from 'react-native';
import App from './app/app';

import data from './app.json';

AppRegistry.registerComponent(data.displayName, () => App);