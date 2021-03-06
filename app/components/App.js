import React, { Component } from 'react';
import {
  Navigator,
  Text
} from 'react-native';
import IndexPage from '../pages/index';
import AnatomyExample1 from '../pages/Anatomy-1';
import AnatomyExample2 from '../pages/Anatomy-2';
import BadgeExample from '../pages/Badge';
import ButtonExample1 from '../pages/Button-1';
import ButtonExample2 from '../pages/Button-2';
import ButtonExample3 from '../pages/Button-3';
import ButtonExample4 from '../pages/Button-4';
import CardExample1 from '../pages/Card-1';
import CardExample2 from '../pages/Card-2';
import CardExample3 from '../pages/Card-3';
import CardExample4 from '../pages/Card-4';
import CardExample5 from '../pages/Card-5';
import CheckBoxExample from '../pages/CheckBox';
import FormExample from '../pages/Form';
import InputGroupExample from '../pages/InputGroup';
import LayoutExample from '../pages/Layout';
import ListExample1 from '../pages/List-1';
import ListExample2 from '../pages/List-2';
import ListExample3 from '../pages/List-3';
import ListExample4 from '../pages/List-4';
import ListExample5 from '../pages/List-5';
import ListExample6 from '../pages/List-6';
import ListExample7 from '../pages/List-7';
import RadioButtonExample from '../pages/RadioButton';
import SearchBarExample from '../pages/SearchBar';
import SpinnerExample from '../pages/Spinner';
import TabsExample from '../pages/Tabs';
import ThumbnailExample from '../pages/Thumbnail';

function renderScene(route, navigator) {
  switch (route.index) {
    case 0:
      return (<IndexPage navigator={navigator} />);
    case 1:
      return (<AnatomyExample1 />);
    case 2:
      return (<AnatomyExample2 />);
    case 3:
      return (<BadgeExample />);
    case 4:
      return (<ButtonExample1 />);
    case 5:
      return (<ButtonExample2 />);
    case 6:
      return (<ButtonExample3 />);
    case 7:
      return (<ButtonExample4 />);
    case 8:
      return (<CardExample1 />);
    case 9:
      return (<CardExample2 />);
    case 10:
      return (<CardExample3 />);
    case 11:
      return (<CardExample4 />);
    case 12:
      return (<CardExample5 />);
    case 13:
      return (<CheckBoxExample />);
    case 14:
      return (<FormExample />);
    case 15:
      return (<InputGroupExample />);
    case 16:
      return (<LayoutExample />);
    case 17:
      return (<ListExample1 />);
    case 18:
      return (<ListExample2 />);
    case 19:
      return (<ListExample3 />);
    case 20:
      return (<ListExample4 />);
    case 21:
      return (<ListExample5 />);
    case 22:
      return (<ListExample6 />);
    case 23:
      return (<ListExample7 />);
    case 24:
      return (<RadioButtonExample />);
    case 25:
      return (<SearchBarExample />);
    case 26:
      return (<SpinnerExample />);
    case 27:
      return (<TabsExample />);
    case 28:
      return (<ThumbnailExample />);
    default:
      return (<Text onPress={() => navigator.pop()}>Here is route {route.index}, title is {route.title}</Text>);
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
