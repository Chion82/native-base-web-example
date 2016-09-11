import React, { Component } from 'react';
import { Container, Content, Header, Title, Col, Row, Grid } from 'native-base';

export default class LayoutExample extends Component {
  render() {
    return (
      <Container>
				<Header>
					<Title>Layout</Title>
				</Header>
        <Content>
          <Grid>
            <Col style={{ backgroundColor: '#D954D7', height: 200 }}></Col>
            <Col style={{ backgroundColor: '#D93735', height: 200  }}></Col>
          </Grid>
        </Content>
      </Container>
    );
  }
}
