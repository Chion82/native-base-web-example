import React, { Component } from 'react';
import { Container, Content, Button, Header, Title } from 'native-base';

export default class ButtonExample3 extends Component {
  render() {
    return (
      <Container>
				<Header>
					<Title>Button</Title>
				</Header>
        <Content>
          <Button block style={{margin:5}}> Primary </Button>
          <Button block success style={{margin:5}}> Success </Button>
          <Button block info style={{margin:5}}> Info </Button>
          <Button block warning style={{margin:5}}> Warning </Button>
          <Button block danger style={{margin:5}}> Danger </Button>
        </Content>
      </Container>
    );
  }
}
