import React, { Component } from 'react';
import { Container, Content, Header, Title, Thumbnail } from 'native-base';

export default class ThumbnailExample extends Component {
	render() {
		return (
			<Container>
				<Header>
					<Title>Thumbnail</Title>
				</Header>
				<Content>
					<Thumbnail source={require('../assets/react-native-web.png')} />
          <Thumbnail size={80} source={require('../assets/react-native-web.png')} />
          <Thumbnail square source={require('../assets/react-native-web.png')} />
          <Thumbnail square size={80} source={require('../assets/react-native-web.png')} />
				</Content>
			</Container>
		);
	}
}
