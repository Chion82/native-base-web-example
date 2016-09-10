import React, { Component } from 'react';
import { Container, Content, Header, Title, CheckBox, List, ListItem, Text } from 'native-base';

export default class CheckBoxExample extends Component {
	render() {
		return (
			<Container>
				<Header>
					<Title>Check Box</Title>
				</Header>
				<Content>
          <List>
            <ListItem>
              <CheckBox checked={true} />
              <Text>Daily Stand Up</Text>
            </ListItem>
            <ListItem>
              <CheckBox checked={false} />
              <Text>Discussion with Client</Text>
            </ListItem>
          </List>
				</Content>
			</Container>
		);
	}
}
