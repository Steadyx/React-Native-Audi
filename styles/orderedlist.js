import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: width,
    paddingVertical: 30
  },
  rowParagraph: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  borderBottom: {
    width: '95%',
    borderBottomWidth: 2,
    borderBottomColor: '#DF612A'
  },
  heading: {
    color: '#DF612A',
    fontSize: 30
  },
  bullet: {
    backgroundColor: '#DF612A',
    alignItems: 'center'
  },
  paragraph: {
    fontSize: 22
  },
  bulletFont: {
    color: 'white',
    fontSize: 30,
    fontWeight: '600'
  },
  card: {
    backgroundColor: '#ECBE4D',
    width: width / 1.2,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#ECBE4D',
    borderColor: '#ECBE4D',
    shadowOffset: { width: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 2,
    borderRadius: 5
  },
  cardTitle: {
    fontSize: 26,
    fontWeight: '600'
  },
  colHeading: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  colBullet: {
    marginTop: 40,
    width: 40,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40
  },
  colParagraph: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;
