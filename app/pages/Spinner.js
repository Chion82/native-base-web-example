import React, { Component } from 'react';
import { Container, Content, Header, Title, Spinner } from 'native-base';

export default class SpinnerExample extends Component {
	render() {
		return (
			<Container>
				<Header>
					<Title>Spinner</Title>
				</Header>
        <Content>
          <Spinner />
          <Spinner color='red' />
          <Spinner color='green' />
          <Spinner color='blue' />
        </Content>
			</Container>
		);
	}
}
