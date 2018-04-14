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
              source={{ uri: 'http://via.placeholder.com/100x100' }}
              style={{ width: 40, height: 40, borderRadius: 40 / 2 }}
            />
          </View>
          <View style={styles.col}>
            <Text style={styles.subText}>Sponsored By,</Text>
            <Text sytle={styles.name}>Chris Coyier</Text>
          </View>
        </View>
        <View>
          <Text style={styles.paragraph}>
            Whether it's fast paced roads or in the alpes, or sweaping turns in
            Sweeden - this car will get you're gears going.
          </Text>
        </View>
      </View>
    );
  }
}

export default Sponsered;
