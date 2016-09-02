import React, { Component } from 'react';
import {
  Navigator,
  Text
} from 'react-native';

function renderScene(route, navigator) {
  switch (route.index) {
    case 0:

    default:
      return (<Text>Here is route {route.index}</Text>);
  }
}

class App extends Component {
  render() {
    return (
      <Navigator
        renderScene={renderScene}
        initialRoute={{index:0, title:'Index Page'}}
       />
    )
  }
}

export default App;
