import React, { Component } from 'react';
import { Container, Content, Header, Title, List, ListItem, Text, Thumbnail } from 'native-base';

export default class ListExample5 extends Component {
  render() {
    return (
      <Container>
				<Header>
					<Title>List</Title>
				</Header>
        <Content>
          <List>
            <ListItem>
              <Thumbnail square size={80} source={require('../assets/react-native-web.png')} />
              <Text>Hyundai</Text>
              <Text note>1967</Text>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={require('../assets/react-native-web.png')} />
              <Text>Fiat</Text>
              <Text note>2007</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
