import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo';

import styles from '../styles/button';
class Button extends Component {
	state = {};
	render() {
		return (
			<View style={styles.row}>
				<View style={styles.col}>
					<LinearGradient
						colors={['#E4842F', '#DF612A']}
						style={styles.linear_gradient}
						start={{ x: 0, y: 1 }}
						end={{ x: 1, y: 1 }}
					/>
					<Text style={styles.btnFont}>Continue</Text>
				</View>
			</View>
		);
	}
}

export default Button;
