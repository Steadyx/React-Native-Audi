import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		width: width,
		paddingVertical: 20
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
	bulletFont: {
		color: 'white',
		fontSize: 22
	},
	colHeading: {
		width: '80%',
		alignItems: 'center'
	},
	colBullet: {
		marginTop: 40,
		padding: 30,
		borderBottomRightRadius: 100,
		borderTopRightRadius: 100
	}
});

export default styles;
