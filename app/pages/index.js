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
					title="Demo"
					iconName="ios-home-outline"
					selectedIconName="ios-home"
					selected={this.state.tabIndex===0}
					onPress={() => this.setState({tabIndex:0})}
					iconColor={yayoiTheme.grey}
					selectedIconColor={yayoiTheme.brandPrimary}>

          <ComponentList navigator={this.props.navigator} />

				</Icon.TabBarItem>

				<Icon.TabBarItem
					title="Updates"
					iconName="social-rss-outline"
					selectedIconName="social-rss"
					selected={this.state.tabIndex===2}
					onPress={() => this.setState({tabIndex:2})}
					iconColor={yayoiTheme.grey}
					selectedIconColor={yayoiTheme.brandPrimary}>
					<Text>Updates Page</Text>
				</Icon.TabBarItem>

				<Icon.TabBarItem
					title="About"
					iconName="ios-informatoutline"
					selectedIconName="ios-information"
					selected={this.state.tabIndex===3}
					onPress={() => this.setState({tabIndex:3})}
					iconColor={yayoiTheme.grey}
					selectedIconColor={yayoiTheme.brandPrimary}>
					<Text>About Page</Text>
				</Icon.TabBarItem>

			</TabBarIOS>
		);
	}

}

export default IndexPage;
