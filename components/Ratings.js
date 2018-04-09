import React, { Component } from 'react';
import { StatusBar, View, Text, ImageBackground } from 'react-native';
import { ratings } from '../utils/_DATA';

export class Ratings extends Component {
	constructor() {
		super();

		this.state = {
			id: null,
			rating: '',
			text: ''
		};
	}

	renderComponents = () => {
		return ratings.map(rates => {
			return this.setState(() => ({}));
		});
	};

	componentDidMount = () => {
		const items = this.renderComponents();
		console.log(this.state);
	};

	render() {
		const { state } = this.state;
		return <View />;
	}
}

export default Ratings;
