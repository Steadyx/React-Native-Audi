import React, { Component, Fragment } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/orderedlist';

import { oraganizeListItems } from '../utils/_DATA';

class OrderedList extends Component {
	state = {};

	componentWillMount() {
		const data = oraganizeListItems();
		this.setState(() => ({
			title: data.map(items => items.title),
			content: data.map(items => items.content)
		}));
	}

	render() {
		const { title, content } = this.state;

		return title.map((title, index) => (
			<View style={styles.row} key={index}>
				<View style={[styles.bullet, styles.colBullet]}>
					<Text style={styles.bulletFont}>{index + 1}</Text>
				</View>
				<View style={styles.colHeading}>
					<Text style={styles.heading}>{title}</Text>
				</View>
				<View className={styles.borderBottom}>}{}</View>
			</View>
		));
	}
}

export default OrderedList;
