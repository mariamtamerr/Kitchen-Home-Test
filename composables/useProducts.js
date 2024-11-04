// composables/useProducts.js


// useProducts is a composables function that has state within it , useState is a reactive state
// 'products' is the key ,, the second arg is a function that returns initial value of the state

// In Summary:
// useProducts is a reusable function that you can call in your components to get access to the reactive state of products.
// useState is a function with 2 ARGUMENTS ( 1. key , 2. func that returns initial state ) that manages a piece of state, making it reactive and ensuring that it can be shared across components.
export const useProducts = () => useState('products', () => [
  {
    id: 1,
    title: 'Beige and Wood Finish',
    snippet: 'This classic kitchen blends warm beige tones with natural wood accents. It is perfect for creating a warm and inviting atmosphere.',
    snippet2: [
      'Warm beige tones',
      'Natural wood accents',
      'Classic design',
    ],
    image: 'classic_kitchen_1.jpg',
  },
  {
    id: 2,
    title: 'Marble Countertops',
    snippet: 'Featuring elegant marble countertops, this kitchen exudes luxury and comfort. It’s a stylish choice for any cooking enthusiast.',
    snippet2: [
      'Elegant marble surfaces',
      'Luxury design',
      'Easy to clean',
    ],
    image: 'classic_kitchen_2.jpg',
  },
  {
    id: 3,
    title: 'Traditional Cabinetry',
    snippet: 'Classic wooden cabinetry with detailed finishes gives this kitchen a timeless look. Ideal for those who appreciate traditional aesthetics.',
    snippet2: [
      'Classic wooden materials',
      'Detailed craftsmanship',
      'Timeless aesthetics',
    ],
    image: 'classic_kitchen_3.jpeg',
  },
  {
    id: 4,
    title: 'High-Gloss Cabinets',
    snippet: 'Ultra-modern, high-gloss cabinets give this kitchen a sophisticated look. Perfect for minimalistic design lovers.',
    snippet2: [
      'Ultra-modern design',
      'High-gloss finishes',
      'Sophisticated appearance',
    ],
    image: 'modern_kitchen_1.jpeg',
  },
  {
    id: 5,
    title: 'Stainless Steel Appliances',
    snippet: 'This kitchen features the latest in stainless steel appliances for a modern touch. A must-have for any contemporary home.',
    snippet2: [
      'Latest technology',
      'Durable stainless steel',
      'Modern touch',
    ],
    image: 'modern_kitchen_2.jpg',
  },
  {
    id: 6,
    title: 'Open-Concept Design',
    snippet: 'An open-concept layout with sleek surfaces and minimal decor makes this kitchen feel spacious and inviting.',
    snippet2: [
      'Spacious layout',
      'Sleek surfaces',
      'Minimalist decor',
    ],
    image: 'modern_kitchen_3.jpg',
  },
  {
    id: 7,
    title: 'Bold Color Accents',
    snippet: 'This kitchen features a mix of modern elements with bold color accents for a vibrant look. Perfect for creative cooks.',
    snippet2: [
      'Modern design elements',
      'Vibrant color palette',
      'Creative inspiration',
    ],
    image: 'contemporary_kitchen_1.avif',
  },
  {
    id: 8,
    title: 'Mixed Materials',
    snippet: 'A combination of wood, metal, and stone gives this kitchen an eclectic, contemporary feel. A great choice for a unique design.',
    snippet2: [
      'Eclectic materials',
      'Contemporary feel',
      'Unique design choices',
    ],
    image: 'contemporary_kitchen_2.jpg',
  },
  {
    id: 9,
    title: 'Geometric Lighting',
    snippet: 'Unique geometric lighting fixtures add a bold statement to this kitchen design. An eye-catching feature for any home.',
    snippet2: [
      'Unique lighting fixtures',
      'Bold design element',
      'Eye-catching aesthetics',
    ],
    image: 'contemporary_kitchen_3.webp',
  },
]);


export const useReservations = () => useState('reservations', () => [] );