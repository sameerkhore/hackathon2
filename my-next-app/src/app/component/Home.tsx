import React from 'react';
import Hero from './Herosection';
import ProductCard from './Productcard';

const Home = () => {
  const products = [
    { name: 'Product 1', price: '$20', image: 'https://via.placeholder.com/150' },
    { name: 'Product 2', price: '$30', image: 'https://via.placeholder.com/150' },
    { name: 'Product 3', price: '$25', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <>
      <Hero/>
      <section className="max-w-[1200px] mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, idx) => (
          <ProductCard key={idx} name={product.name} price={product.price} image={product.image} />
        ))}
      </section>
    </>
  );
};

export default Home;
