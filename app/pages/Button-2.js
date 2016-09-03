import React, { Component } from 'react';
import { Container, Content, Button, Header, Title } from 'native-base';

export default class ButtonExample2 extends Component {
  render() {
    return (
      <Container>
				<Header>
					<Title>Button</Title>
				</Header>
        <Content>
          <Button primary style={{margin:5}}> Primary </Button>
          <Button success style={{margin:5}}> Success </Button>
          <Button info style={{margin:5}}> Info </Button>
          <Button warning style={{margin:5}}> Warning </Button>
          <Button danger style={{margin:5}}> Danger </Button>
        </Content>
      </Container>
    );
  }
}
