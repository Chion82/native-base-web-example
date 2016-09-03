import React, { Component } from 'react';
import { Container, Content, Badge, Header, Title } from 'native-base';

export default class BadgeExample extends Component {
	render() {
		return (
			<Container>
				<Header>
					<Title>Badge Example</Title>
				</Header>
				<Content>
					<Badge>2</Badge>
					<Badge primary>2</Badge>
					<Badge success>2</Badge>
					<Badge info>2</Badge>
					<Badge warning>2</Badge>
					<Badge danger>2</Badge>
				</Content>
			</Container>
		);
	}
}
