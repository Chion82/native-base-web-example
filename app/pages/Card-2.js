import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Content, Card, CardItem, Header, Title, Icon } from 'native-base';

export default class CardExample2 extends Component {
  render() {
    return (
      <Container>
				<Header>
					<Title>Card</Title>
				</Header>
        <Content>
          <Card style={{margin:10}}>
            <CardItem header>
              <Text>Card Header</Text>
            </CardItem>

            <CardItem>
              <Text>
                To add an optional header and/or footer within a card, include header prop with the CardItem.
              </Text>
            </CardItem>

            <CardItem header>
              <Text>Card Footer</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
