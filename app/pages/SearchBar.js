import React, { Component } from 'react';
import { Container, Content, Header, Button, InputGroup, Input, Icon } from 'native-base';

export default class SearchBarExample extends Component {
  render() {
    return (
			<Container>
        <Header searchBar rounded>
          <InputGroup>
            <Icon name='ios-search' />
            <Input placeholder='Search' />
            <Icon name='ios-people' />
          </InputGroup>
          <Button transparent>
            Search
          </Button>
        </Header>
				<Content>

				</Content>
			</Container>
		);
  }
}
