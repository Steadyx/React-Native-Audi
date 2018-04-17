import React, { Component, Fragment } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { AppLoading, Font } from 'expo';

import Navbar from './components/Navbar';
import Ratings from './components/Ratings';
import Sponsered from './components/Sponsered';
import ImageCarousel from './components/ImageCarousel';
import OrderedList from './components/OrderedList';
import Button from './components/Button';

console.disableYellowBox = true;
const { width, height } = Dimensions.get('window');

export default class App extends Component {
  state = {
    loaded: false,
    fontFamily: null
  };

  componentWillMount() {
    this._loadAssetsAsync();
  }

  _loadAssetsAsync = async () => {
    const poppinsFont = await Font.loadAsync({
      poppins: require('./assets/fonts/Poppins-Regular.ttf'),
      poppinsBold: require('./assets/fonts/Poppins-Bold.ttf'),
      poppinsExtraBold: require('./assets/fonts/Poppins-ExtraBold.ttf'),
      poppinsBoldItallic: require('./assets/fonts/Poppins-BoldItalic.ttf'),
      poppinsLight: require('./assets/fonts/Poppins-Light.ttf')
    });

    this.setState({ loaded: true, fontFamily: poppinsFont });
  };

  render() {
    if (!this.state.loaded) {
      return <AppLoading />;
    }

    const { fontFamily } = this.state;
    console.log(fontFamily);
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={height}>
          <View style={{ zIndex: 1, position: 'relative' }}>
            <Navbar style={styles.nav} font={fontFamily} />
          </View>
          <Ratings />
          <View
            style={{
              width,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Sponsered font={fontFamily} />
          </View>
          <ImageCarousel />
          <View style={{ marginBottom: 20 }}>
            <OrderedList font={fontFamily} />
          </View>
          <View>
            <Button font={fontFamily} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  nav: {
    position: 'relative',
    zIndex: 1
  },
  ratingsContainer: {
    position: 'absolute',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 60,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: '100%',
    zIndex: 10000,
    top: 150,
    height: 400,
    left: 0
  }
});
