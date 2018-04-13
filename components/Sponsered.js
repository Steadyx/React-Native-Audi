import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/sponsered';

class Sponsered extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.row}>
					<View style={styles.col}>
						<Image
							source={{ uri: 'http://via.placeholder.com/350x150' }}
							style={{ width: 30, height: 30, borderRadius: 30 / 2 }}
						/>
					</View>
					<View style={styles.col}>
						<Text>Sponsored By,</Text>
						<Text>Chris Coyier</Text>
					</View>
				</View>
				<View>
					<Text>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. A quis,
						error praesentium enim officia, rerum, voluptatum cumque dolores
						porro expedita quae ducimus odit. Laudantium, unde culpa dolores
						maiores libero laborum?
					</Text>
				</View>
			</View>
		);
	}
}

export default Sponsered;
