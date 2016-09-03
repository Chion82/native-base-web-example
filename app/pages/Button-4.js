import React, { Component } from 'react';
import { Container, Content, Button, Header, Title, Icon } from 'native-base';

export default class ButtonExample4 extends Component {
  render() {
    return (
      <Container>
				<Header>
					<Title>Button</Title>
				</Header>
        <Content>
          <Button primary style={{margin:5}}>
            <Icon name='ios-home' />
            Home
          </Button>

          <Button success iconRight style={{margin:5}}>
            Next
            <Icon name='ios-arrow-forward' />
          </Button>

          <Button info style={{margin:5}}>
            Previous
            <Icon name='ios-arrow-back' />
          </Button>

          <Button warning style={{margin:5}}>
            <Icon name='ios-star' />
          </Button>

          <Button danger style={{margin:5}}>
            <Icon name='ios-close' />
          </Button>

          <Button style={{backgroundColor: '#384850', margin:5}} >
            <Icon name='ios-search' style={{color: '#00c497'}}/>
          </Button>
        </Content>
      </Container>
    );
  }
}
