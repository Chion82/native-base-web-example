import React, { Component } from 'react';
import { Container, Content, Header, Title, List, ListItem, Text, Icon, InputGroup, Input } from 'native-base';

export default class FormExample extends Component {
	render() {
		return (
			<Container>
				<Header>
					<Title>Form</Title>
				</Header>
				<Content>
          <List>
            <ListItem>
              <InputGroup>
                <Icon name='ios-person' />
                <Input placeholder='EMAIL' />
              </InputGroup>
            </ListItem>

            <ListItem>
              <InputGroup>
                <Icon name='ios-unlocked' />
                <Input placeholder='PASSWORD' secureTextEntry={true}/>
              </InputGroup>
            </ListItem>

            <ListItem>
              <InputGroup >
                <Input inlineLabel label='NAME' placeholder='John Doe' />
              </InputGroup>
            </ListItem>

            <ListItem>
              <InputGroup >
                <Input stackedLabel label='Address Line 1' placeholder='Address' />
              </InputGroup>
            </ListItem>
          </List>
				</Content>
			</Container>
		);
	}
}
