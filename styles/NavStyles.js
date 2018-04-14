import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
	nav: {
		width,
		height: height / 3.2,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 5,
		elevation: 3
	},
	menu: {
		paddingVertical: 40,
		paddingHorizontal: 20,
		flex: 1
	},
	img: {
		flex: 1,
		width,
		height: '100%',
		position: 'absolute'
	},
	linear_gradient: {
		width: '100%',
		height: '100%',
		alignItems: 'center',
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0
	},
	heading: {
		height: height / 4,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	text: {
		alignSelf: 'center',
		color: '#FFFFFF',
		fontSize: 70
	}
});

export default styles;
