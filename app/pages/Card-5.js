import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Header, Title, Icon, Thumbnail, Text, Button } from 'native-base';

export default class CardExample5 extends Component {
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
              <Text note>Sepember 10, 2016</Text>
            </CardItem>

            <CardItem cardBody>
              <Image style={{ resizeMode: 'cover', height: 150 }} source={require('../assets/react-native-web.png')} />
              <Text>
                Card is a pure NativeBase component. Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.
              </Text>
              <Button transparent textStyle={{color: '#87838B'}}>
                389 Stars
              </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
