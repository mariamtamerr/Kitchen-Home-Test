// // import en from '../locales/en.json';
// // import ar from '../locales/ar.json';

// // const locales = {
// //   en,
// //   ar,
// // };

// // export const state = () => ({
// //   locale: 'en', // Default language
// //   messages: locales.en, // Default messages
// // });

// // export const mutations = {
// //   SET_LOCALE(state, locale) {
// //     state.locale = locale;
// //     state.messages = locales[locale] || locales.en; // Set messages based on locale
// //   },
// // };

// // export const actions = {
// //   changeLocale({ commit }, locale) {
// //     commit('SET_LOCALE', locale);
// //   },
// // };

// // export const getters = {
// //   currentLocale: (state) => state.locale,
// //   messages: (state) => state.messages,
// // };


// export const state = () => ({
//     products: [
//         {
//             id: 1,
//             title: 'Beige and Wood Finish',
//             snippet: 'This classic kitchen blends warm beige tones with natural wood accents.',
//             image: 'classic_kitchen_1.jpg',
//           },
//           {
//             id: 2,
//             title: 'Marble Countertops',
//             snippet: 'Featuring elegant marble countertops, this kitchen exudes luxury and comfort.',
//             image: 'classic_kitchen_2.jpg',
//           },
//           {
//             id: 3,
//             title: 'Traditional Cabinetry',
//             snippet: 'Classic wooden cabinetry with detailed finishes gives this kitchen a timeless look.',
//             image: 'classic_kitchen_3.jpeg',
//           },
//           {
//             id: 4,
//             title: 'High-Gloss Cabinets',
//             snippet: 'Ultra-modern, high-gloss cabinets give this kitchen a sophisticated look.',
//             image: 'modern_kitchen_1.jpeg',
//           },
//           {
//             id: 5,
//             title: 'Stainless Steel Appliances',
//             snippet: 'This kitchen features the latest in stainless steel appliances for a modern touch.',
//             image: 'modern_kitchen_2.jpg',
//           },
//           {
//             id: 6,
//             title: 'Open-Concept Design',
//             snippet: 'An open-concept layout with sleek surfaces and minimal decor.',
//             image: 'modern_kitchen_3.jpg',
//           },
//           {
//             id: 7,
//             title: 'Bold Color Accents',
//             snippet: 'This kitchen features a mix of modern elements with bold color accents for a vibrant look.',
//             image: 'contemporary_kitchen_1.avif',
//           },
//           {
//             id: 8,
//             title: 'Mixed Materials',
//             snippet: 'A combination of wood, metal, and stone gives this kitchen an eclectic, contemporary feel.',
//             image: 'contemporary_kitchen_2.jpg',
//           },
//           {
//             id: 9,
//             title: 'Geometric Lighting',
//             snippet: 'Unique geometric lighting fixtures add a bold statement to this kitchen design.',
//             image: 'contemporary_kitchen_3.webp',
//           },
//     ]
// })


// export const getters = {
//     getProductById: (state) => (id) => {
//         return state.products.find(product => product.id == id)
//     }
// }