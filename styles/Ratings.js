import { StyleSheet, Dimensions } from 'react-native';

const colOrange = '#E16E35';
const colYellow = '#ECBE4D';
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  ratingsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 150,
    backgroundColor: 'transparent',
    width,
    overflow: 'hidden',
    zIndex: 100,
    position: 'absolute',
    top: height / 5
  },
  bgRadius: {
    position: 'absolute',
    width: width,
    height: width / 6,
    top: width / 7,
    left: 0,
    backgroundColor: '#FFFFFF',
    zIndex: 100,
    borderTopLeftRadius: 420,
    borderTopRightRadius: 420
  },
  row: {
    width: '80%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    zIndex: 100000
  },
  ratingsCol: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    zIndex: 9000,
    height: 160
  },
  ratings: {
    backgroundColor: colOrange,
    width: 70,
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 70,
    zIndex: 60000,
    borderRadius: 70 / 2,
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2
  },
  ratingsMid: {
    backgroundColor: colYellow,
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
    borderRadius: 90 / 2,
    zIndex: 900000,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3
  },
  ratingText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 30,
    fontFamily: 'poppinsBoldItallic',
    textAlign: 'center'
  },
  ratingTextMid: {
    color: '#FFFFFF',
    fontSize: 70,
    fontFamily: 'poppinsBoldItallic',

    fontWeight: '800',
    textAlign: 'center'
  },
  subTextOrange: {
    marginTop: 5,
    textAlign: 'center',
    color: colOrange,
    fontWeight: '900',
    fontFamily: 'poppinsBoldItallic',
    fontSize: 14
  },
  subTextYellow: {
    marginTop: 5,
    textAlign: 'center',
    color: colYellow,
    fontWeight: '900',
    fontFamily: 'poppinsBoldItallic',
    fontSize: 14
  }
});

export default styles;
