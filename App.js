import React, { Component, Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Navbar from './components/Navbar';
import Ratings from './components/Ratings';
export default class App extends Component {
	render() {
		return (
			<Fragment>
				<Navbar />
			</Fragment>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'space-around'
	}
});
