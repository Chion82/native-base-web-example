import React, { Component } from 'react';
import { Container, Content, Header, Title, List, ListItem, Text, Icon, Badge } from 'native-base';

export default class ListExample3 extends Component {
  render() {
    return (
      <Container>
				<Header>
					<Title>List</Title>
				</Header>
        <Content>
          <List>
            <ListItem iconLeft>
              <Icon name='ios-chatboxes' />
              <Text>Simon Mignolet</Text>
            </ListItem>
            <ListItem iconLeft>
              <Icon name='ios-alarm' />
              <Text>Nathaniel Clyne</Text>
              <Badge>2</Badge>
            </ListItem>
            <ListItem iconLeft>
              <Icon name='md-notifications' />
              <Text>Dejan Lovren</Text>
              <Text note>Note here</Text>
            </ListItem>
            <ListItem iconLeft iconRight>
              <Icon name='ios-mic' />
              <Text>Mama Sakho</Text>
              <Icon name='ios-mic-outline' />
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
