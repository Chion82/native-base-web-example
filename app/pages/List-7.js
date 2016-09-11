import React, { Component } from 'react';
import { Container, Content, Header, Title, List, ListItem, Text } from 'native-base';

export default class ListExample7 extends Component {
  render() {
    return (
      <Container>
				<Header>
					<Title>List</Title>
				</Header>
        <Content>
          <List>
            <ListItem menuItem>
              <Text>Simon Mignolet</Text>
            </ListItem>
            <ListItem menuItem>
              <Text>Nathaniel Clyne</Text>
            </ListItem>
            <ListItem menuItem hideBorder>
              <Text>Dejan Lovren</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
