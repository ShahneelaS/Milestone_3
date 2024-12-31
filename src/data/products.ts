
export const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 20,
      image: './public/images/Product 1.png', 
      description: 'This is the description for Product 1',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 30,
      image: './public/images/Product 2.png',
      description: 'This is the description for Product 2',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 40,
      image: './public/images/Product 1.png',
      description: 'This is the description for Product 3',
    },
  ];
  
  // Helper function to get a product by ID
  export const getProductById = (id: number) => {
    return products.find((product) => product.id === id);
  };
  