import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Content, Card, CardItem, Header, Title, Icon } from 'native-base';

export default class CardExample3 extends Component {
  render() {
    return (
      <Container>
				<Header>
					<Title>Card</Title>
				</Header>
        <Content>
          <Card style={{margin:10}}>
            <CardItem>
              <Icon name='social-google' />
              <Text>Google</Text>
            </CardItem>
            <CardItem>
              <Icon name='social-facebook' />
              <Text>Facebook</Text>
            </CardItem>
            <CardItem>
              <Icon name='social-instagram' />
              <Text>Instagram</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
