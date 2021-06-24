import {AppRegistry} from 'react-native';

import App from './app/navigation';
import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () => App);
