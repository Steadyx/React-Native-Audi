import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { carouselImages, organizeData } from '../utils/_DATA';
import styles from '../styles/imageCarousel';
const { width, height } = Dimensions.get('window');

class ImageCarousel extends Component {
	state = {};

	componentWillMount() {
		const data = organizeData();
		// const images = data.map(items => items.img);
		// const dynamicText = data.map(items => items.dynamicText);

		data.map(items => items);

		this.setState(() => ({
			data
		}));
	}

	_renderItem({ item, index }, parallaxProps) {
		return (
			<View style={styles.imageContainer}>
				<ParallaxImage
					source={item.img}
					containerStyle={styles.imageContainer}
					style={styles.image}
					fadeDuration={600}
					parallaxFactor={0.8}
					{...parallaxProps}
				/>
				<View style={styles.textContainer}>
					<Text style={styles.caption}>{item.dynamicText}</Text>
				</View>
			</View>
		);
	}

	render() {
		const { data } = this.state;
		console.log(data);

		return (
			<Carousel
				data={data}
				firstItem={2}
				renderItem={this._renderItem}
				hasParallaxImages={true}
				sliderWidth={width}
				itemWidth={width / 1.2}
				itemHeight={height / 1.2}
			/>
		);
	}
}

export default ImageCarousel;
