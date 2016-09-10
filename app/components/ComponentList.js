import React, { Component } from 'react';
import { Container, Header, Title, Content, List, ListItem, Text } from 'native-base';
import yayoiTheme from '../themes/yayoi';

export default class ComponentList extends Component {

  navigateTo(pageIndex) {
    this.props.navigator.push({index: pageIndex, title: 'Component Demo'});
  }

  render() {
    return (
      <Container theme={yayoiTheme}>
        <Header>
          <Title>Component Demo</Title>
        </Header>
        <Content>
          <List>
            <ListItem itemDivider>
              <Text>Anatomy</Text>
            </ListItem>
            <ListItem menuItem onPress={this.navigateTo.bind(this, 1)}>
              <Text>Basic</Text>
            </ListItem>
            <ListItem menuItem onPress={this.navigateTo.bind(this, 2)} hideBorder>
              <Text>Header with Icons</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>Badge</Text>
            </ListItem>
            <ListItem menuItem onPress={this.navigateTo.bind(this, 3)} hideBorder>
              <Text>Badge Demo</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>Button</Text>
            </ListItem>
            <ListItem menuItem onPress={this.navigateTo.bind(this, 4)}>
              <Text>Basic</Text>
            </ListItem>
            <ListItem menuItem onPress={this.navigateTo.bind(this, 5)}>
              <Text>Button Theme</Text>
            </ListItem>
            <ListItem menuItem onPress={this.navigateTo.bind(this, 6)}>
              <Text>Block Button</Text>
            </ListItem>
            <ListItem menuItem onPress={this.navigateTo.bind(this, 7)}>
              <Text>Icon Button</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
