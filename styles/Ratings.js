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
		width: '100%',
		height: 200,
		top: 55,
		left: 0,
		backgroundColor: '#FFFFFF',
		zIndex: 100,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30
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
		width: 80,
		alignItems: 'center',
		justifyContent: 'space-around',
		height: 80,
		zIndex: 60000,
		borderRadius: 80 / 2,
		shadowColor: '#000000',
		shadowOpacity: 0.3,
		shadowRadius: 2,
		elevation: 2
	},
	ratingsMid: {
		backgroundColor: colYellow,
		width: 100,
		alignItems: 'center',
		justifyContent: 'center',
		height: 100,
		borderRadius: 100 / 2,
		zIndex: 900000,
		shadowColor: '#000000',
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
