import React, { Component } from 'react';
import { Container, Content, Header, Title, List, ListItem, Text } from 'native-base';

export default class ListExample6 extends Component {
  render() {

    const items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];

    return (
      <Container>
				<Header>
					<Title>List</Title>
				</Header>
        <Content>
          <List dataArray={items}
            renderRow={(item) =>
              <ListItem>
                <Text>{item}</Text>
              </ListItem>
            }>
          </List>
        </Content>
      </Container>
    );
  }
}
