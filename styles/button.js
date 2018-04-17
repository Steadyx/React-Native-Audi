import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  row: {
    width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  col: {
    width,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
      },
      android: {
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
      }
    }),

    overflow: 'hidden'
  },
  button: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  btnFont: {
    fontSize: 40,
    fontWeight: '800',
    color: '#FFFFFF',
    paddingBottom: 10,
    fontFamily: 'poppinsExtraBold'
  },

  linear_gradient: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0
  }
});

export default styles;
