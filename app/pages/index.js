import React, { Component } from 'react';
import {
	Icon
} from 'native-base';
import {
	TabBarIOS,
	Text,
	View
} from 'react-native';
import yayoiTheme from '../themes/yayoi';
import ComponentList from '../components/ComponentList';

class IndexPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			tabIndex : 0
		}
	}

	render() {
		return (
			<TabBarIOS
				tintColor={yayoiTheme.brandPrimary}
				unselectedTintColor={yayoiTheme.grey}>

				<Icon.TabBarItem
					title="Home"
					iconName="ios-home-outline"
					selectedIconName="ios-home"
					selected={this.state.tabIndex===0}
					onPress={() => this.setState({tabIndex:0})}
					iconColor={yayoiTheme.grey}
					selectedIconColor={yayoiTheme.brandPrimary}>

          <ComponentList navigator={this.props.navigator} />

				</Icon.TabBarItem>

				<Icon.TabBarItem
					title="Calendar"
					iconName="ios-calendar-outline"
					selectedIconName="ios-calendar"
					selected={this.state.tabIndex===2}
					onPress={() => this.setState({tabIndex:2})}
					iconColor={yayoiTheme.grey}
					selectedIconColor={yayoiTheme.brandPrimary}>
					<Text>Calendar Page</Text>
				</Icon.TabBarItem>

				<Icon.TabBarItem
					title="Me"
					iconName="ios-person-outline"
					selectedIconName="ios-person"
					selected={this.state.tabIndex===3}
					onPress={() => this.setState({tabIndex:3})}
					iconColor={yayoiTheme.grey}
					selectedIconColor={yayoiTheme.brandPrimary}>
					<Text>My Page</Text>
				</Icon.TabBarItem>

			</TabBarIOS>
		);
	}

}

export default IndexPage;
