import React, { Component, Fragment } from 'react';
import { LinearGradient } from 'expo';
import { Link } from 'react-router-native';
import { StatusBar, View, Text, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from '../styles/NavStyles';

export default class Navbar extends Component {
	constructor() {
		super();

		this.state = {
			data: []
		};
	}

	render() {
		const audi = '../assets/images/audi.jpg';

		return (
			<View style={styles.nav}>
				<ImageBackground source={require(audi)} style={styles.img}>
					<LinearGradient
						colors={['rgba(0,0,0,0.6)', 'transparent']}
						style={styles.linear_gradient}
						locations={[0.4, 10]}
					/>
				</ImageBackground>
				<View>
					<Feather name="menu" size={30} style={styles.menu} color="#FFFFFF" />
				</View>
				<View style={styles.heading}>
					<View>
						<Text style={styles.text}>Audi</Text>
					</View>
				</View>
				<View>
					<Feather
						name="search"
						size={30}
						style={styles.menu}
						color="#FFFFFF"
					/>
				</View>
			</View>
		);
	}
}
