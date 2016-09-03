import React, { Component } from 'react';
import { Container, Content, Button, Header, Title } from 'native-base';

export default class ButtonExample1 extends Component {
  render() {
    return (
      <Container>
				<Header>
					<Title>Button</Title>
				</Header>
        <Content>
          <Button> Click Me! </Button>
        </Content>
      </Container>
    );
  }
}
