import React, { Component } from 'react';
import { Container, Content, Header, Title, List, ListItem, Text } from 'native-base';

export default class ListExample1 extends Component {
  render() {
    return (
      <Container>
				<Header>
					<Title>List</Title>
				</Header>
        <Content>
          <List>
            <ListItem >
              <Text>Simon Mignolet</Text>
            </ListItem>
            <ListItem>
              <Text>Nathaniel Clyne</Text>
            </ListItem>
            <ListItem>
              <Text>Dejan Lovren</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
