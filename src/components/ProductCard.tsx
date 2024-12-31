import React from "react";
import Link from "next/link";
import Image from "next/image"; 
import { Product } from "../types";

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  return (
    <div className="border p-4 rounded-lg">
      <Link href={`/product/${product.id}`}>
        <Image
          src={product.image}
          alt={product.name}
          width={500} 
          height={400} 
          className="w-full h-64 object-cover"
        />
        <h3 className="text-lg mt-2">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>
        <p className="font-bold text-lg mt-2">${product.price}</p>
      </Link>
      <button
        onClick={() => addToCart(product)}
        className="mt-4 bg-lime-800 text-white py-2 px-4 rounded-lg"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
