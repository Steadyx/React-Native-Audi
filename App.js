import React, { Component, Fragment } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

import Navbar from './components/Navbar';
import Ratings from './components/Ratings';
import Sponsered from './components/Sponsered';
import ImageCarousel from './components/ImageCarousel';
import OrderedList from './components/OrderedList';
import Button from './components/Button';

console.disableYellowBox = true;
const { width, height } = Dimensions.get('window');

export default class App extends Component {
	render() {
		return (
			<View style={styles.mainContainer}>
				<ScrollView style={height}>
					<View style={{ zIndex: 1, position: 'relative' }}>
						<Navbar style={styles.nav} />
					</View>

					<Ratings />

					<View
						style={{
							width,
							justifyContent: 'center',
							alignItems: 'center'
						}}
					>
						<Sponsered />
					</View>
					<ImageCarousel />
					<View style={{ marginBottom: 20 }}>
						<OrderedList />
					</View>
					<View>
						<Button />
					</View>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	mainContainer: {
		width: width,
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative'
	},
	nav: {
		position: 'relative',
		zIndex: 1
	},
	ratingsContainer: {
		position: 'absolute',
		flexDirection: 'row',
		backgroundColor: '#ffffff',
		borderRadius: 60,
		justifyContent: 'space-around',
		alignItems: 'flex-start',
		width: '100%',
		zIndex: 10000,
		top: 150,
		height: 400,
		left: 0
	}
});
