import { useState } from 'react';
import Image from 'next/image';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
};

const ProductPage = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.name} to the cart`);
    // Logic to add the product to cart (could use CartContext here)
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <Image 
        src={product.image} 
        alt={product.name} 
        width={500} 
        height={500} 
        objectFit="contain" 
      />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>

      <div>
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min="1"
        />
      </div>

      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductPage;
