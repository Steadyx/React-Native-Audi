import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  imageContainer: {
    flexGrow: 1,
    width: '95%',
    height: width / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40
  },
  image: {
    width: width,
    resizeMode: 'contain'
  },
  textContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  caption: {
    fontSize: 40,
    color: '#FFFFFF',
    paddingHorizontal: 40,
    paddingVertical: 20,
    fontWeight: '800',
    elevation: 3,
    fontFamily: 'poppins',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5
  }
});

export default styles;
