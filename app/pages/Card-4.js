import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Header, Title, Icon, Thumbnail, Text } from 'native-base';

export default class CardExample4 extends Component {
  render() {
    return (
      <Container>
				<Header>
					<Title>Card</Title>
				</Header>
        <Content>
          <Card style={{margin:10}}>
            <CardItem>
              <Thumbnail source={require('../assets/react-native-web.png')} />
              <Text>React Native Web</Text>
              <Text note>Awesome</Text>
            </CardItem>

            <CardItem>
              <Image style={{ resizeMode: 'cover', height: 150 }} source={require('../assets/react-native-web.png')} />
            </CardItem>

            <CardItem>
              <Icon name='ios-browsers' style={{color : '#ED4A6A'}} />
              <Text>Try now</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
