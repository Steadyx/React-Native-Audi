const ratings = {
  speed: {
    rating: '9/10',
    text: 'Speed'
  },
  rating: {
    rating: '5',
    text: 'Rating'
  },
  handling: {
    rating: '6/10',
    text: 'Handling'
  }
};

const carouselImages = {
  img1: {
    img: require('../assets/images/audi-slider-1.jpg'),
    dynamicText: 'S1'
  },
  img2: {
    img: require('../assets/images/audi-slider-2.jpeg'),
    dynamicText: 'S2'
  },
  img3: {
    img: require('../assets/images/audi-slider-3.jpg'),
    dynamicText: 'S3'
  },
  img4: {
    img: require('../assets/images/audi-slider-4.jpeg'),
    dynamicText: 'S4'
  }
};

const listItems = {
  list1: {
    title: 'Strong Cornering',
    content: 'Lorem sit amet consectetur elit.'
  },
  list2: {
    title: 'Weak Steering',
    content: 'Lorem sit amet consectetur elit.'
  },
  list3: {
    title: 'Presitge',
    content: 'Lorem sit amet consectetur elit.'
  }
};

export function organizeRatings() {
  return Object.keys(ratings).map(rating => {
    return ratings[rating];
  });
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
