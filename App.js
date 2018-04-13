import React, { Component, Fragment } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

import Navbar from './components/Navbar';
import Ratings from './components/Ratings';
import Sponsered from './components/Sponsered';
import ImageCarousel from './components/ImageCarousel';
import OrderedList from './components/OrderedList';

const { width } = Dimensions.get('window');

export default class App extends Component {
	render() {
		return (
			<View style={styles.mainContainer}>
				<ScrollView>
					<View style={{ zIndex: 1, position: 'relative' }}>
						<Navbar style={styles.nav} />
					</View>
					<Ratings
						style={{
							zIndex: 1,
							position: 'absolute',
							justifyContent: 'center'
						}}
					/>
					<View
						style={{ width, justifyContent: 'center', alignItems: 'center' }}
					>
						<Sponsered />
					</View>
					<ImageCarousel />
					<View>
						<OrderedList />
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
