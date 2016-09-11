import React, { Component } from 'react';
import { Container, Content, Header, Title, Radio, List, ListItem, Text } from 'native-base';

export default class RadioButtonExample extends Component {
	render() {
		return (
			<Container>
				<Header>
					<Title>Radio Button</Title>
				</Header>
				<Content>
					<List>
            <ListItem>
              <Radio selected={false} />
              <Text>Daily Stand Up</Text>
            </ListItem>
            <ListItem>
              <Radio selected={true} />
              <Text>Discussion with Client</Text>
            </ListItem>
          </List>
				</Content>
			</Container>
		);
	}
}
