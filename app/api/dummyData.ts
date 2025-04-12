const menuItems = [
  {
    label: 'restaurants',
    icon: require('~/assets/icons/restaurant.png'),
    path: '/restuarant',
    params: '',
    size: 40,
  },
  {
    label: 'Perfume',
    icon: require('~/assets/icons/perfume.png'),
    path: '',
    params: '',
    size: 40,
  },
  {
    label: 'Barbering',
    icon: require('~/assets/icons/barber.png'),
    path: '',
    params: '',
    size: 40,
  },
  {
    label: 'cleaning',
    icon: require('~/assets/icons/cleaning.png'),
    path: '',
    params: '',
    size: 40,
  },
  {
    label: 'hotels',
    icon: require('~/assets/icons/hotels.png'),
    path: '',
    params: '',
    size: 40,
  },
  {
    label: 'plumbering',
    icon: require('~/assets/icons/plumbing.png'),
    path: '',
    params: '',
    size: 40,
  },
  {
    label: 'health',
    icon: require('~/assets/icons/health.png'),
    path: '',
    params: '',
    size: 40,
  },
  {
    label: 'more',
    icon: require('~/assets/icons/more.png'),
    path: '',
    params: '',
    size: 40,
  },
];

const dishes = [
  {
    label: 'Slice & Spice',
    icon: require('~/assets/images/dish1.jpg'),
    path: '',
    params: '',
    size: 80,
  },
  {
    label: 'Go Cleaners',
    icon: require('~/assets/images/dish2.jpg'),
    path: '',
    params: '',
    size: 80,
  },
  {
    label: 'Cutters',
    icon: require('~/assets/images/dish3.png'),
    path: '',
    params: '',
    size: 80,
  },
  {
    label: 'Slice & Spice',
    icon: require('~/assets/images/dish1.jpg'),
    path: '',
    params: '',
    size: 80,
  },
  {
    label: 'Go Cleaners',
    icon: require('~/assets/images/dish2.jpg'),
    path: '',
    params: '',
    size: 80,
  },
  {
    label: 'Cutters',
    icon: require('~/assets/images/dish3.png'),
    path: '',
    params: '',
    size: 80,
  },
  {
    label: 'Slice & Spice',
    icon: require('~/assets/images/dish1.jpg'),
    path: '',
    params: '',
    size: 80,
  },
  {
    label: 'Go Cleaners',
    icon: require('~/assets/images/dish2.jpg'),
    path: '',
    params: '',
    size: 80,
  },
  {
    label: 'Cutters',
    icon: require('~/assets/images/dish3.png'),
    path: '',
    params: '',
    size: 80,
  },
];

const snacks = [
  {
    label: 'Sneaker Knakers',
    image: require('~/assets/images/snack1.jpg'),
    rating: '4.3',
    distance: '1.7km',
  },
  {
    label: 'Ice-cream Palace',
    image: require('~/assets/images/snack2.jpg'),
    rating: '4.3',
    distance: '1.7km',
  },
  {
    label: 'Sneaker Knakers',
    image: require('~/assets/images/snack1.jpg'),
    rating: '4.3',
    distance: '1.7km',
  },
  {
    label: 'Ice-cream Palace',
    image: require('~/assets/images/snack2.jpg'),
    rating: '4.3',
    distance: '1.7km',
  },
  {
    label: 'Sneaker Knakers',
    image: require('~/assets/images/snack1.jpg'),
    rating: '4.3',
    distance: '1.7km',
  },
  {
    label: 'Ice-cream Palace',
    image: require('~/assets/images/snack2.jpg'),
    rating: '4.3',
    distance: '1.7km',
  },
  {
    label: 'Sneaker Knakers',
    image: require('~/assets/images/snack1.jpg'),
    rating: '4.3',
    distance: '1.7km',
  },
  {
    label: 'Ice-cream Palace',
    image: require('~/assets/images/snack2.jpg'),
    rating: '4.3',
    distance: '1.7km',
  },
];

const deliveries = [
  {
    label: 'Clay Oven',
    image: require('~/assets/images/delivery1.jpg'),
    rating: '4.3',
    time: '1hour',
  },
  {
    label: 'Lusin’s Bar',
    image: require('~/assets/images/delivery2.jpg'),
    rating: '4.3',
    time: '30mins',
  },
  {
    label: 'Clay Oven',
    image: require('~/assets/images/delivery1.jpg'),
    rating: '4.3',
    time: '1hour',
  },
  {
    label: 'Lusin’s Bar',
    image: require('~/assets/images/delivery2.jpg'),
    rating: '4.3',
    time: '30mins',
  },
  {
    label: 'Clay Oven',
    image: require('~/assets/images/delivery1.jpg'),
    rating: '4.3',
    time: '1hour',
  },
  {
    label: 'Lusin’s Bar',
    image: require('~/assets/images/delivery2.jpg'),
    rating: '4.3',
    time: '30mins',
  },
  {
    label: 'Clay Oven',
    image: require('~/assets/images/delivery1.jpg'),
    rating: '4.3',
    time: '1hour',
  },
  {
    label: 'Ice-cream Palace',
    image: require('~/assets/images/delivery2.jpg'),
    rating: '4.3',
    time: '30mins',
  },
];

const sampleSearchresults = [
  {
    discount: "$5.00 off with S$....",
    name: "Bay Area Pizza-Cole Valley ",
    distance: "1.7km - ",
    time: "24 mins",
    rating: "4.4(2k+)",
    price: "From s$5.70",
    vendor: "Italian Pizza",
    image: require('~/assets/images/search1.jpg'),
    topService: false
  },
  {
    discount: "",
    name: "Bay Cleaning Services ",
    distance: "1.7km - ",
    time: "24 mins",
    rating: "4.4(2k+)",
    price: "From s$5.70",
    vendor: "Cleaning Services",
    image: require('~/assets/images/search2.jpg'),
    topService: true,
    recommended: true,
    popular: false
  },
  {
    discount: "$5.00 off with S$....",
    name: "Bay Area Pizza-Cole Valley ",
    distance: "1.7km - ",
    time: "24 mins",
    rating: "4.4(2k+)",
    price: "From s$5.70",
    vendor: "Italian Pizza",
    image: require('~/assets/images/search1.jpg'),
    topService: false
  },
  {
    discount: "",
    name: "Bay Cleaning Services ",
    distance: "1.7km - ",
    time: "24 mins",
    rating: "4.4(2k+)",
    price: "From s$5.70",
    vendor: "Cleaning Services",
    image: require('~/assets/images/search2.jpg'),
    topService: true,
    recommended: true,
    popular: false
  },
  {
    discount: "$5.00 off with S$....",
    name: "Bay Area Pizza-Cole Valley ",
    distance: "1.7km - ",
    time: "24 mins",
    rating: "4.4(2k+)",
    price: "From s$5.70",
    vendor: "Italian Pizza",
    image: require('~/assets/images/search1.jpg'),
    topService: false
  },
  {
    discount: "",
    name: "Bay Cleaning Services ",
    distance: "1.7km - ",
    time: "24 mins",
    rating: "4.4(2k+)",
    price: "From s$5.70",
    vendor: "Cleaning Services",
    image: require('~/assets/images/search2.jpg'),
    topService: true,
    recommended: true,
    popular: false
  },
]

const forYou = [
  {
    image: require('~/assets/images/foru1.jpg'),
    name: "Gelato ",
    reviews: "2,000 reviews",
    parent: "Ice-cream",
    rating: 4,
  },
  {
    image: require('~/assets/images/foru2.jpg'),
    name: "Frozen Yogurt ",
    reviews: "50 reviews",
    parent: "Ice-cream",
    rating: 4,
  },
  {
    image: require('~/assets/images/foru3.jpg'),
    name: "Sorbet ",
    reviews: "2,000 reviews",
    parent: "Ice-cream",
    rating: 4,
  },
  {
    image: require('~/assets/images/foru1.jpg'),
    name: "Gelato ",
    reviews: "2,000 reviews",
    parent: "Ice-cream",
    rating: 4,
  },
  {
    image: require('~/assets/images/foru2.jpg'),
    name: "Frozen Yogurt ",
    reviews: "50 reviews",
    parent: "Ice-cream",
    rating: 4,
  },
  {
    image: require('~/assets/images/foru3.jpg'),
    name: "Sorbet ",
    reviews: "2,000 reviews",
    parent: "Ice-cream",
    rating: 4,
  },
]

export { menuItems, dishes, snacks, deliveries, sampleSearchresults, forYou };
