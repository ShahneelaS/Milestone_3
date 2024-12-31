import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '../../context/CartContext';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const ProductDetailPage = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [measurement, setMeasurement] = useState('');

  const handleAddToCart = () => {
    addToCart({ ...product, quantity, measurement });
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

      <Image
        src={product.image}
        alt={product.name}
        className="w-full h-auto mb-6"
        width={500}
        height={500}
        objectFit="contain"
      />

      <p className="text-lg mb-4">{product.description}</p>
      <p className="text-xl font-semibold">Price: ${product.price}</p>

      <div className="mt-4">
        <label className="block text-lg">Quantity</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="border p-2 rounded"
          min={1}
        />
      </div>

      <div className="mt-4">
        <label className="block text-lg">Measurement</label>
        <input
          type="text"
          value={measurement}
          onChange={(e) => setMeasurement(e.target.value)}
          className="border p-2 rounded"
        />
      </div>

      <button
        onClick={handleAddToCart}
        className="mt-4 bg-lime-800 text-white py-2 px-4 rounded-lg"
      >
        Add to Cart
      </button>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params!;

  try {
    const res = await fetch(`http://localhost:3000/api/products/${id}`);

    if (!res.ok) {
      throw new Error(`Error fetching product: ${res.statusText}`);
    }

    const product = await res.json();
    console.log(product); 

    if (!product) {
      return { notFound: true };
    }

    return { props: { product } };
  } catch (error) {
    console.error("Failed to fetch product:", error);
    return { notFound: true };
  }
};




export default ProductDetailPage;
