import type { NextApiRequest, NextApiResponse } from 'next';

const products = [
  { id: 1, name: 'Library stool chair', price: 20, image: '/images/Library stool chair.png', description: 'Library stool chair' },
  { id: 2, name: 'Wing Chair', price: 30, image: '/images/Wing Chair.png', description: 'Wing Chair' },
  { id: 3, name: 'Wooden Chair', price: 40, image: '/images/Wooden Chair.png', description: 'Wooden Chair' },
  { id: 4, name: 'Dandy Chair', price: 30, image: '/images/Dandy Chair.png', description: 'Dandy Chair' },
 
];

// API handler
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query } = req;

  // If the method is GET and there's an id in the query, return the product with that id
  if (method === 'GET') {
    const { id } = query;

    // If an id is provided, return the product with that id
    if (id) {
      const product = products.find(p => p.id === parseInt(id as string));
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    } else {
      // If no id is provided, return all products
      res.status(200).json(products);
    }
  } else {
    // For unsupported methods, return a 405 (Method Not Allowed)
    res.status(405).json({ message: `Method ${method} not allowed` });
  }
}
