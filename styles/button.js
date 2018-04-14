import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
	row: {
		width,
		justifyContent: 'center',
		alignItems: 'center'
	},
	col: {
		width,
		justifyContent: 'center',
		alignItems: 'center'
	},
	button: {
		width,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'red',
		position: 'relative'
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
		borderTopLeftRadius: 60,
		borderTopRightRadius: 60,
		left: 0
	}
});

export default styles;
