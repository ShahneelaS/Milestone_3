"use client";

import React, { useEffect, useState } from "react";
//import ProductCard from "../components/ProductCard";
import { Product } from "../types";
import { useCart } from "../context/CartContext";
import Image from "next/image"; 

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {/* Welcome Section */}
      <div className="bg-lime-200 text-center py-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl">Welcome to My E-Commerce Site</h1>
      </div>

      {/* Top Categories Section */}
      <div className="bg-lime-200 text-center py-8">
        <h2 className="text-2xl mb-4">Top Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8">
          <div className="bg-lime-100 p-4 rounded-lg shadow-md">
            <Image
              src="/images/Nike Air Force.png"
              alt="Nike Air Force"
              width={500}
              height={500}
              className="bg-lime-100 w-full h-64 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Nike Air Force</h3>
            <p className="text-lg text-gray-600">$20</p>
            <button
              onClick={() =>
                addToCart({
                  id: 1,
                  name: "Nike Air Force",
                  price: 20,
                  image: "/images/Nike Air Force.png",
                  description: "Nike Air Force",
                })
              }
              className="mt-4 px-4 py-2 bg-lime-800 text-white rounded"
            >
              Add to Cart
            </button>
          </div>
          <div className="bg-lime-100 p-4 rounded-lg shadow-md">
            <Image
              src="/images/Nike Air Max Pulse.png"
              alt="Nike Air Max Pulse"
              width={500}
              height={500}
              className="bg-lime-100 w-full h-64 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Nike Air Max Pulse</h3>
            <p className="text-lg text-gray-600">$30</p>
            <button
              onClick={() =>
                addToCart({
                  id: 2,
                  name: "Nike Air Max Pulse",
                  price: 30,
                  image: "/images/Nike Air Max Pulse.png",
                  description: "Nike Air Max Pulse",
                })
              }
              className="mt-4 px-4 py-2 bg-lime-800 text-white rounded"
            >
              Add to Cart
            </button>
          </div>
          <div className="bg-lime-100 p-4 rounded-lg shadow-md">
            <Image
              src="/images/Nike Dunk Low Retro.png"
              alt="Nike Dunk Low Retro"
              width={500}
              height={500}
              className="bg-lime-100 w-full h-64 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Nike Dunk Low Retro</h3>
            <p className="text-lg text-gray-600">$40</p>
            <button
              onClick={() =>
                addToCart({
                  id: 3,
                  name: "Nike Dunk Low Retro",
                  price: 40,
                  image: "/images/Nike Dunk Low Retro.png",
                  description: "Nike Dunk Low Retro",
                })
              }
              className="mt-4 px-4 py-2 bg-lime-800 text-white rounded"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="bg-lime-200 text-center py-8">
        <h2 className="text-2xl">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="bg-lime-100 p-4 rounded-lg shadow-md">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="bg-lime-100 w-full h-64 object-cover mb-4"
                />
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-lg text-gray-600">${product.price}</p>
                <button
                  onClick={() => addToCart(product)} // Add product to cart
                  className="mt-4 px-4 py-2 bg-lime-800 text-white rounded"
                >
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </div>
      </div>

      {/* Our Products Section */}
      <div className="bg-lime-200 text-center py-8">
        <h2 className="text-2xl mb-4">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
          <div className="bg-lime-100 p-4 rounded-lg shadow-md">
            <Image
              src="/images/Women basketball jersey.png"
              alt="Product 1"
              width={500}
              height={500}
              className="bg-lime-100 w-full h-64 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Women basketball jersey</h3>
            <p className="text-lg text-gray-600">$25</p>
            <button
              onClick={() =>
                addToCart({
                  id: 4,
                  name: "Women basketball jersey",
                  price: 25,
                  image: "/images/Women basketball jersey.png",
                  description: "Product 1 Description",
                })
              }
              className="mt-4 px-4 py-2 bg-lime-800 text-white rounded"
            >
              Add to Cart
            </button>
          </div>
          <div className="bg-lime-100 p-4 rounded-lg shadow-md">
            <Image
              src="/images/Woven jacket.png"
              alt="Product 2"
              width={500}
              height={500}
              className="bg-lime-100 w-full h-64 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Woven jacket</h3>
            <p className="text-lg text-gray-600">$35</p>
            <button
              onClick={() =>
                addToCart({
                  id: 5,
                  name: "Woven jacket",
                  price: 35,
                  image: "/images/Woven jacket.png",
                  description: "Product 2 Description",
                })
              }
              className="mt-4 px-4 py-2 bg-lime-800 text-white rounded"
            >
              Add to Cart
            </button>
          </div>
          <div className="bg-lime-100 p-4 rounded-lg shadow-md">
            <Image
              src="/images/Kids Shoes.png"
              alt="Product 3"
              width={500}
              height={500}
              className="bg-lime-100 w-full h-64 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Kids Shoes</h3>
            <p className="text-lg text-gray-600">$50</p>
            <button
              onClick={() =>
                addToCart({
                  id: 6,
                  name: "Kids Shoes",
                  price: 50,
                  image: "/images/Kids Shoes.png",
                  description: "Product 3 Description",
                })
              }
              className="mt-4 px-4 py-2 bg-lime-800 text-white rounded"
            >
              Add to Cart
            </button>
          </div>
          <div className="bg-lime-100 p-4 rounded-lg shadow-md">
            <Image
              src="/images/Men&apos;s Short-sleeve running top.png"
              alt="Product 4"
              width={500}
              height={500}
              className="bg-lime-100 w-full h-64 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Men&apos;s Short-sleeve running top</h3>
            <p className="text-lg text-gray-600">$40</p>
            <button
              onClick={() =>
                addToCart({
                  id: 7,
                  name: "Men&apos;s Short-sleeve running top",
                  price: 40,
                  image: "/images/Men&apos;s Short-sleeve running top.png",
                  description: "Product 4 Description",
                })
              }
              className="mt-4 px-4 py-2 bg-lime-800 text-white rounded"
            >
              Add to Cart
            </button>
          </div>
          <div className="bg-lime-100 p-4 rounded-lg shadow-md">
            <Image
              src="/images/LSC.png"
              alt="Product 5"
              width={500}
              height={500}
              className="bg-lime-100 w-full h-64 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Library stool chair</h3>
            <p className="text-lg text-gray-600">$60</p>
            <button
              onClick={() =>
                addToCart({
                  id: 8,
                  name: "Library stool chair",
                  price: 60,
                  image: "/images/LSC.png",
                  description: "Product 5 Description",
                })
              }
              className="mt-4 px-4 py-2 bg-lime-800 text-white rounded"
            >
              Add to Cart
            </button>
          </div>
          <div className="bg-lime-100 p-4 rounded-lg shadow-md">
            <Image
              src="/images/Nike Swoosh.png"
              alt="Product 6"
              width={500}
              height={500}
              className="bg-lime-100 w-full h-64 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Nike Swoosh</h3>
            <p className="text-lg text-gray-600">$45</p>
            <button
              onClick={() =>
                addToCart({
                  id: 9,
                  name: "Nike Swoosh",
                  price: 45,
                  image: "/images/Nike Swoosh.png",
                  description: "Product 6 Description",
                })
              }
              className="mt-4 px-4 py-2 bg-lime-800 text-white rounded"
            >
              Add to Cart
            </button>
          </div>
          <div className="bg-lime-100 p-4 rounded-lg shadow-md">
            <Image
              src="/images/Golden Lamp.png"
              alt="Golden Lamp"
              width={500}
              height={500}
              className="bg-lime-100 w-full h-64 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Golden Lamp</h3>
            <p className="text-lg text-gray-600">$35</p>
            <button
              onClick={() =>
                addToCart({
                  id: 10,
                  name: "Golden Lamp",
                  price: 35,
                  image: "/images/Golden Lamp.png",
                  description: "Golden Lamp",
                })
              }
              className="mt-4 px-4 py-2 bg-lime-800 text-white rounded"
            >
              Add to Cart
            </button>
          </div>
          <div className="bg-lime-100 p-4 rounded-lg shadow-md">
            <Image
              src="/images/Lamp.png"
              alt="Lamp"
              width={500}
              height={500}
              className="bg-lime-100 w-full h-64 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Lamp</h3>
            <p className="text-lg text-gray-600">$25</p>
            <button
              onClick={() =>
                addToCart({
                  id: 11,
                  name: "Lamp",
                  price: 25,
                  image: "/images/Lamp.png",
                  description: "Lamp",
                })
              }
              className="mt-4 px-4 py-2 bg-lime-800 text-white rounded"
            >
              Add to Cart
            </button>
          </div>
          </div>
          </div>
        {/* Testimonial Section */}
      <div className="text-center py-8 bg-lime-200">
        <h2 className="text-2xl mb-4">What Our Customers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
          <div className="bg-lime-100 p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-600">&quot;This is the best store I have ever shopped at. Fast delivery and excellent customer service!&quot;</p>
            <h4 className="mt-4 text-xl font-semibold">John Doe</h4>
            <p className="text-gray-500">Customer</p>
          </div>
          <div className="bg-lime-100 p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-600">&quot;Amazing quality products at reasonable prices. I will definitely return for more purchases!&quot;</p>
            <h4 className="mt-4 text-xl font-semibold">Jane Smith</h4>
            <p className="text-gray-500">Customer</p>
          </div>
          <div className="bg-lime-100 p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-600">&quot;Great shopping experience! The product range is vast, and the checkout process is seamless.&quot;</p>
            <h4 className="mt-4 text-xl font-semibold">Mike Johnson</h4>
            <p className="text-gray-500">Customer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
