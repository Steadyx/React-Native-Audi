import { StyleSheet } from 'react-native';

const colOrange = '#E16E35';
const colYellow = '#ECBE4D';

const styles = StyleSheet.create({
  ratingsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 100,
    overflow: 'hidden'
  },
  ratingsCol: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    top: 10,
    zIndex: 60000,
    height: 190
  },
  ratings: {
    backgroundColor: colOrange,
    width: 80,
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 80,
    zIndex: 60000,
    borderRadius: 80 / 2,
    shadowColor: '#000000',
    shadowOffset: { width: 20 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3
  },
  ratingsMid: {
    backgroundColor: colYellow,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    borderRadius: 80 / 2,
    zIndex: 1000,
    shadowColor: '#000000',
    shadowOffset: { width: 20 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3
  },
  ratingText: {
    color: '#FFFFFF',
    fontSize: 30,
    textAlign: 'center'
  },
  ratingTextMid: {
    color: '#FFFFFF',
    fontSize: 60,
    fontWeight: '800',
    textAlign: 'center'
  },
  subTextOrange: {
    textAlign: 'center',
    color: colOrange,
    fontWeight: '600',
    fontSize: 18
  },
  subTextYellow: {
    textAlign: 'center',
    color: colYellow,
    fontWeight: '600',
    fontSize: 18
  }
});

export default styles;
