export const ratings = {
	speed: {
		id: 1,
		rating: '9/10',
		text: 'Speed'
	},
	rating: {
		id: 2,
		rating: '5',
		text: 'Rating'
	},
	handling: {
		id: 3,
		rating: '6/10',
		text: 'Handling'
	}
};

export const carouselImages = {
	img1: {
		img: require('../assets/images/audi-slider-1.jpg'),
		dynamicText: 'dynamic text'
	},
	img2: {
		img: require('../assets/images/audi-slider-2.jpeg'),
		dynamicText: 'dynamic text'
	},
	img3: {
		img: require('../assets/images/audi-slider-3.jpg'),
		dynamicText: 'dynamic text'
	},
	img4: {
		img: require('../assets/images/audi-slider-4.jpeg'),
		dynamicText: 'dynamic text'
	}
};

export const posts = [
	{
		id: 1,
		title: 'Strong Cornering',
		paragraph:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fugit itaque rerum magni earum, ipsa quam, autem atque doloremque rem molestias maxime! Iure harum, quasi fuga neque voluptates iusto aspernatur!'
	},
	{
		id: 2,
		title: 'Strong Cornering',
		paragraph:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fugit itaque rerum magni earum, ipsa quam, autem atque doloremque rem molestias maxime! Iure harum, quasi fuga neque voluptates iusto aspernatur!'
	},
	{
		id: 3,
		title: 'Strong Cornering',
		paragraph:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fugit itaque rerum magni earum, ipsa quam, autem atque doloremque rem molestias maxime! Iure harum, quasi fuga neque voluptates iusto aspernatur!'
	},
	{
		id: 4,
		title: 'Strong Cornering',
		paragraph:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fugit itaque rerum magni earum, ipsa quam, autem atque doloremque rem molestias maxime! Iure harum, quasi fuga neque voluptates iusto aspernatur!'
	}
];

const listItems = {
	list1: {
		title: 'Strong Cornering',
		content:
			'dolor sit amet consectetur adipisicing elit. Quae fugit itaque rerum magni earum'
	},
	list2: {
		title: 'Strong Cornering',
		content:
			'dolor sit amet consectetur adipisicing elit. Quae fugit itaque rerum magni earum'
	},
	list3: {
		title: 'Strong Cornering',
		content:
			'dolor sit amet consectetur adipisicing elit. Quae fugit itaque rerum magni earum'
	},
	list4: {
		title: 'Strong Cornering',
		content:
			'dolor sit amet consectetur adipisicing elit. Quae fugit itaque rerum magni earum'
	}
};

export function _getRatings() {
	return { ...ratings };
}

export function organizeData() {
	return Object.keys(carouselImages).map(items => {
		return carouselImages[items];
	});
}

export function oraganizeListItems() {
	return Object.keys(listItems).map(items => {
		return listItems[items];
	});
}

// export function formattedRatings(ratings) {
// 	return Object.keys(ratings).reduce((formattedRatings, id) => {
// 		const rating = ratings[id];

// 		formattedRatings[id] = {
// 			...rating,
// 			rating: Object.keys(rating.rating),
// 			text: Object.keys(rating.text)
// 		};

// 		return formattedRatings;
// 	}, {});
// }

// export function getInitialData() {
// 	return Promise.all([_getRatings()]).then(([ratings]) => ({
// 		ratings: formattedRatings(ratings)
// 	}));
// }
