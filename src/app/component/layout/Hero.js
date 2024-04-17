import Image from 'next/image';
import React from 'react';
import RightIcons from '../icons/RightIcons';

const Hero = () => {
  return (
    <section className="hero">
      <div className="py-12">
        <h1 className="text-4xl font-semibold leading-loose">
          Everything <br /> is better <br /> with a{' '}
          <span className="text-primary">Pizza</span>
        </h1>
        <p className="my-6 text-sm">
          Pizza is the missing piece that make every day complet, a simple yet
          delicious joy in life
        </p>
        <div className="flex gap-4 text-sm">
          <button className="bg-primary uppercase text-white px-8 py-2 rounded-full flex gap-2 text-sm items-center">
            Order Now <RightIcons />
          </button>
          <button className="flex gap-2 py-2 text-gray-600 font-semibold">
            Learn More <RightIcons />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          alt="Pizza"
          src="/pizza1.png"
          layout={'fill'}
          objectFit={'contain'}
        />
      </div>
    </section>
  );
};

export default Hero;
