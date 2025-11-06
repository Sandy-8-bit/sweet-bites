import React, { useEffect, useState } from 'react';
import itemImage from "/menu/menu.jpg"; 

// utils/preloadImages.js

const menus = [
  {
    id: 1,
    name: 'Cake',
    image: '/menu/cake.jpg',
    stars: 4.7,
    description: 'Indulge in our freshly baked cakes — moist, rich, and perfect for any celebration.',
    price: 450
  },
  {
    id: 2,
    name: 'Cupcakes',
    image: '/menu/cupcake.webp',
    stars: 4.6,
    description: 'Delightful mini cakes topped with creamy frosting — the perfect sweet treat for all ages.',
    price: 120
  },
  {
    id: 3,
    name: 'Muffins',
    image: '/menu/muffins.jpg',
    stars: 4.5,
    description: 'Fluffy muffins packed with flavour — ideal for a morning coffee or afternoon snack.',
    price: 90
  },
  {
    id: 4,
    name: 'Brownies',
    image: '/menu/browine.jpg',
    stars: 4.8,
    description: 'Decadent chocolate brownies with a gooey centre — pure indulgence for chocolate lovers.',
    price: 150
  },
  {
    id: 5,
    name: 'Chocolates',
    image: '/menu/choco.jpg',
    stars: 4.4,
    description: 'Hand-crafted assorted chocolates — a luxe treat for yourself or to gift.',
    price: 200
  },
  {
    id: 6,
    name: 'Healthy Cookies',
    image: '/menu/cookieeee.avif',
    stars: 4.3,
    description: 'Wholesome cookies made with healthier ingredients — guilt-free and delicious.',
    price: 110
  },
  {
    id: 7,
    name: 'Donuts',
    image: '/menu/donuts.jpg',
    stars: 4.2,
    description: 'Soft ring donuts with glazed or filled options — classic comfort in every bite.',
    price: 80
  },
  {
    id: 8,
    name: 'Chocolate Bouquet',
    image: '/menu/rose.jpg',
    stars: 4.5,
    description: ' curated chocolate bouquet — perfect for sharing or gifting.',
    price: 300
  }
];

const CardMenu = ({ menu }) => {
  return (
    <div className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-3 cursor-pointer border border-gray-100">
      
      {/* Gradient Overlay Effect */}
      <div className="absolute inset-0 transition-all duration-500 z-10 pointer-events-none" />

      {/* Image Container */}
      <div className="relative overflow-hidden h-48 sm:h-64 md:h-72">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <img
          src={menu.image}
          alt={menu.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      {/* Content */}
      <div className="relative p-4 sm:p-6 md:p-8 z-10 text-center sm:text-left">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-red-600 transition-colors duration-300">
          {menu.name}
        </h3>

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed ">
          {menu.description}
        </p>
      </div>
    </div>
  );
};





export default function MenuSection() {

    const handleMoreItemsClick = () => {
    // Open image in a new tab
    const imageUrl = itemImage;
    window.open(imageUrl, "_blank");
  };


  return (
    <section id="menu" className="px-5 py-24 lg:px-20 bg-gradient-to-b from-white to-red-50">
      {/* Header */}
  <div className="px-6 py-10">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h3 className="text-3xl font-bold text-gray-800 mb-2">
            Featured <span className="text-red-500">Items</span>
          </h3>
          <div className="w-24 h-1 bg-red-500 rounded-full"></div>
        </div>

        <button
          onClick={handleMoreItemsClick}
          className="bg-red-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-red-600 transition-all duration-300 shadow-md"
        >
          Check Menu
        </button>
      </div>
    </div>



      {/* Menu Grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-2">
        {menus.map((menu) => (
          <CardMenu key={menu.id} menu={menu} />
        ))}
      </div>

      {/* Bottom CTA */}
    <div className="mt-12 sm:mt-16 text-center bg-gradient-to-r from-red-500 to-red-600 rounded-2xl sm:rounded-3xl p-6 sm:p-12 text-white shadow-2xl">
  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
    Can't find what you're looking for?
  </h3>
  <p className="text-base sm:text-lg md:text-xl mb-5 sm:mb-6 opacity-90">
    We offer custom orders for special occasions!
  </p>
<button
  onClick={() => window.location.href = "https://wa.me/918431854288?text=Hi!%20I%20would%20like%20to%20place%20an%20order."}
  className="bg-white text-red-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold sm:font-bold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105"
>
  Contact Us for Custom Orders
</button>


</div>

    </section>
  );
}