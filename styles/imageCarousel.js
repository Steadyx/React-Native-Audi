import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
	imageContainer: {
		flexGrow: 0,
		width: width / 1.2,
		height: width / 2,
		borderRadius: 30
	},
	image: {
		marginTop: 20,
		width: width / 10,
		resizeMode: 'contain',
		height: width / 10,
		borderRadius: 30
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
		paddingHorizontal: 30,
		paddingVertical: 20,
		fontWeight: '800',
		elevation: 3,
		textShadowColor: 'rgba(0, 0, 0, 0.4)',
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 5
	}
});

export default styles;
