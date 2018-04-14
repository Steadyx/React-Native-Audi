import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  row: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 300,
    borderTopRightRadius: 300
  },
  col: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 300,
    borderTopRightRadius: 300,
    overflow: 'hidden'
  },
  button: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderTopLeftRadius: 300,
    borderTopRightRadius: 300
  },
  btnFont: {
    fontSize: 30,
    fontWeight: '800',
    color: '#FFFFFF',
    paddingBottom: 10
  },

  linear_gradient: {
    width,
    height: width / 6,
    position: 'absolute',
    borderTopLeftRadius: 300,
    borderTopRightRadius: 300,
    top: 0,
    left: 0
  }
});

export default styles;
