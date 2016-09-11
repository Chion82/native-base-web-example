import React, { Component } from 'react';
import { Container, Content, Header, Title, Tabs, Text } from 'native-base';

export default class TabsExample extends Component {
	render() {
		return (
			<Container>
				<Header>
					<Title>Tabs</Title>
				</Header>
        <Content>
          <Tabs>
            <Text tabLabel='One'>Tab1</Text>
            <Text tabLabel='Two'>Tab2</Text>
						<Text tabLabel='Three'>Tab3</Text>
          </Tabs>
        </Content>
			</Container>
		);
	}
}
