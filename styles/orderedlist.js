import { StyleSheet, Dimensions, Platform } from 'react-native';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: width,
    paddingVertical: 40
  },
  rowParagraph: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: '600'
  },
  cardRow: {
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
    fontWeight: '600',
    ...Platform.select({
      ios: {
        fontSize: 26
      },
      android: {
        fontSize: width / 13
      }
    }),
    fontFamily: 'poppinsBold'
  },
  bullet: {
    backgroundColor: '#DF612A',
    alignItems: 'flex-start'
  },
  paragraph: {
    fontSize: 22,
    fontFamily: 'poppinsBold'
  },
  bulletFont: {
    color: 'white',
    fontSize: 60,
    fontWeight: '800',
    textAlign: 'left',
    fontFamily: 'poppinsBold'
  },
  card: {
    backgroundColor: '#E49835',
    width: width / 1.2,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 40,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0, 0.8)',
        shadowOffset: { height: 5, width: 5 },
        shadowOpacity: 0.7,
        shadowRadius: 1
      },
      android: {
        elevation: 3,
        shadowRadius: 2
      }
    }),
    borderRadius: 5
  },
  cardTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#A5661F',
    fontFamily: 'poppinsBold'
  },
  cardParagraph: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'left',
    fontFamily: 'poppinsBold'
  },
  col: {
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  colBullet: {
    width: 60,
    height: 120,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderTopRightRadius: 60,
    borderBottomRightRadius: 60
  },
  colParagraph: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontFamily: 'poppins'
  }
});

export default styles;
