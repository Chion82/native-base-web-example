import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Content, Card, CardItem, Header, Title, Icon } from 'native-base';

export default class CardExample1 extends Component {
  render() {
    return (
      <Container>
				<Header>
					<Title>Card</Title>
				</Header>
        <Content>
          <Card style={{margin:10}}>
            <CardItem>
              <Text>Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.</Text>
            </CardItem>
            <CardItem>
              <Text>NativeBase Cards support a wide variety of content, including images, text, list groups, links, and more. Mix and match multiple content types to create the card you need.</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
