import React, { Component, Fragment } from 'react';
import { StatusBar, View, Text, ImageBackground } from 'react-native';
import { ratings } from '../utils/_DATA';
import styles from '../styles/Ratings';
export class Ratings extends Component {
  constructor(props) {
    super();

    this.state = {};
  }

  componentDidMount = () => {
    const { speed, rating, handling, text } = ratings;

    this.setState({
      speed: { ...text, ...rating },
      rating: { ...text, ...rating },
      handling: { ...text, ...rating }
    });
  };

  render() {
    const { speed, rating, handling } = ratings;

    return (
      <View style={styles.ratingsContainer}>
        <View style={styles.ratingsCol}>
          <View style={styles.ratings}>
            <Text style={styles.ratingText}>{speed.rating}</Text>
          </View>
          <Text style={styles.subTextOrange}>{speed.text}</Text>
        </View>
        <View style={styles.ratingsCol}>
          <View style={styles.ratingsMid}>
            <Text style={styles.ratingTextMid}>{rating.rating}</Text>
          </View>
          <Text style={styles.subTextYellow}>{rating.text}</Text>
        </View>
        <View style={styles.ratingsCol}>
          <View style={styles.ratings}>
            <Text style={styles.ratingText}>{handling.rating}</Text>
          </View>
          <Text style={styles.subTextOrange}>{handling.text}</Text>
        </View>
      </View>
    );
  }
}

export default Ratings;
