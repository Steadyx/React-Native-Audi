import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { carouselImages, organizeData } from '../utils/_DATA';
const { width, height } = Dimensions.get('window');

class ImageCarousel extends Component {
  state = {};

  componentWillMount() {
    const data = organizeData();
    const images = data.map(items => items.img);
    const dynamicText = data.map(items => items.dynamicText);

    this.setState(() => ({
      images,
      dynamicText
    }));
  }

  _renderItem({ item, index }, parallaxProps) {
    return (
      <View style={styles.imageContainer}>
        <ParallaxImage
          source={item}
          containerStyle={styles.imageContainer}
          style={styles.image}
          fadeDuration={600}
          parallaxFactor={0.8}
          {...parallaxProps}
        />
        <Text>{item.text}</Text>
      </View>
    );
  }

  render() {
    const { images } = this.state;
    console.log(images);
    return (
      <Carousel
        data={images}
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

const styles = StyleSheet.create({
  imageContainer: {
    flexGrow: 0,
    width: width / 1.2,
    height: width / 2,
    borderRadius: 30
  },
  image: {
    marginTop: 20,
    width: width / 10,
    resizeMode: 'contain',
    height: width / 10,
    borderRadius: 30
  }
});

export default ImageCarousel;
