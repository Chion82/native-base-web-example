import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Header, Title, List, ListItem, Text, InputGroup, Input, Icon } from 'native-base';

export default class CheckBoxExample extends Component {
	render() {
		return (
			<Container>
				<Header>
					<Title>Input Group</Title>
				</Header>
				<Content style={{padding: 10}}>

          <InputGroup borderType='regular' >
            <Input placeholder='Type your text here'/>
          </InputGroup>

          <View style={{height: 10}} />

          <InputGroup borderType='underline' >
            <Icon name='ios-home' style={{color:'#384850'}}/>
            <Input placeholder='Type your text here' />
          </InputGroup>

          <View style={{height: 10}} />

          <InputGroup borderType='rounded' >
            <Icon name='ios-home' style={{color:'#384850'}}/>
            <Input placeholder='Type your text here'/>
          </InputGroup>

          <View style={{height: 10}} />

          <InputGroup>
            <Icon name='ios-home' style={{color:'#00C497'}}/>
            <Input placeholder='Icon Textbox'/>
          </InputGroup>

          <View style={{height: 10}} />

          <InputGroup iconRight>
            <Icon name='arrow-swap' style={{color:'#00C497'}}/>
            <Input placeholder='Icon Alignment in Textbox'/>
          </InputGroup>

          <View style={{height: 10}} />

          <InputGroup iconRight success>
            <Icon name='ios-checkmark' style={{color:'#00C497'}}/>
            <Input placeholder='Textbox with Success Input'/>
          </InputGroup>

          <View style={{height: 10}} />

          <InputGroup iconRight error>
            <Icon name='ios-close' style={{color:'red'}}/>
            <Input placeholder='Textbox with Error Input'/>
          </InputGroup>

				</Content>
			</Container>
		);
	}
}
