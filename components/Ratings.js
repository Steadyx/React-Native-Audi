import React, { Component, Fragment } from 'react';
import { StatusBar, View, Text, ImageBackground } from 'react-native';
import { organizeRatings } from '../utils/_DATA';
import styles from '../styles/Ratings';
export class Ratings extends Component {
  constructor(props) {
    super();

    this.state = {};
  }

  componentWillMount() {
    const ratings = organizeRatings();
    ratings.map(items => items);

    this.setState({
      ratings
    });
  }

  render() {
    const { ratings } = this.state;

    return (
      <View style={styles.ratingsContainer}>
        <View style={styles.bgRadius} />
        <View style={styles.row}>
          {ratings.map((item, index) => (
            <View
              style={
                index === 1
                  ? {
                      height: 135,
                      justifyContent: 'flex-start',
                      zIndex: 6000
                    }
                  : styles.ratingsCol
              }
              key={index}
            >
              <View style={index === 1 ? styles.ratingsMid : styles.ratings}>
                <Text
                  style={index === 1 ? styles.ratingTextMid : styles.ratingText}
                >
                  {item.rating}
                </Text>
              </View>
              <Text
                style={
                  index === 1 ? styles.subTextYellow : styles.subTextOrange
                }
              >
                {item.text.toUpperCase()}
              </Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

export default Ratings;
