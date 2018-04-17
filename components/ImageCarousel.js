import React, { Component, Fragment } from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { carouselImages, organizeData } from '../utils/_DATA';
import styles from '../styles/imageCarousel';
const { width, height } = Dimensions.get('window');

class ImageCarousel extends Component {
  state = {};

  componentWillMount() {
    const data = organizeData();
    data.map(items => items);

    this.setState(() => ({
      data
    }));
  }

  _renderItem({ item, index }, parallaxProps) {
    return (
      <Fragment>
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
      </Fragment>
    );
  }

  render() {
    const { data } = this.state;
    console.log(this.state);
    return (
      <Carousel
        data={data}
        firstItem={2}
        renderItem={this._renderItem}
        hasParallaxImages={true}
        activeSlideAlignment="center"
        sliderWidth={width}
        itemWidth={width / 1.3}
        itemHeight={height / 1.2}
        containerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          flex: 1
        }}
        slideStyle={{ flex: 1 }}
      />
    );
  }
}

export default ImageCarousel;
