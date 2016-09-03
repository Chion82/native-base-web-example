/**
 * React Native for Web Starter App
 * https://github.com/grabcode/react-native-web-starter
 * Follow me https://twitter.com/grabthecode
 */

import { AppRegistry, Platform } from 'react-native';
import App from './app/components/App';
import { OSTheme } from 'native-base';

if (Platform.OS === 'web') {
  OSTheme.setOSTheme('ios');
}

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', {
  rootTag: document.getElementById('react-root')
})
