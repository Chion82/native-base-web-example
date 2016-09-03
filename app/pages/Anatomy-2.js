import React, { Component } from 'react';
import { Container, Header, Title, Content, Button, Icon } from 'native-base';
import { Text } from 'react-native';

export default class AnatomyExample2 extends Component {
	render() {
		return (
			<Container>
				<Header>
					<Button transparent>
						<Icon name='ios-arrow-back' />
					</Button>

					<Title>Header</Title>

					<Button transparent>
						<Icon name='md-menu' />
					</Button>
				</Header>

				<Content>
					<Text>This is body section</Text>
				</Content>
			</Container>
		);
	}
}
