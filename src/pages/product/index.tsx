import { products } from '../../data/products'; 
import Link from 'next/link';
import Image from 'next/image'; 

const ProductList = () => {
  return (
    <div>
      <h1>All Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/product/${product.id}`}>
              <a>
                <h2>{product.name}</h2>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200} 
                  height={200} 
                  objectFit="contain" 
                />
                <p>${product.price}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
