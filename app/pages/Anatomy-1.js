import React, { Component } from 'react';
import { Container, Header, Title, Content } from 'native-base';
import { Text } from 'react-native';

export default class AnatomyExample1 extends Component {
	render() {
		return (
			<Container>
				<Header>
					<Title>Header</Title>
				</Header>

				<Content>
					<Text>This is body section</Text>
				</Content>
			</Container>
		);
	}
}
