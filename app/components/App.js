import React, { Component } from 'react';
import {
  Navigator,
  Text
} from 'react-native';
import IndexPage from '../pages/index';
import AnatomyExample1 from '../pages/Anatomy-1';
import AnatomyExample2 from '../pages/Anatomy-2';

function renderScene(route, navigator) {
  switch (route.index) {
    case 0:
      return (<IndexPage />);
    case 1:
      return (<AnatomyExample1 />);
    case 2:
      return (<AnatomyExample2 />);
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
