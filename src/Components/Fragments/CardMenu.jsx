import { useState } from 'react';

export const CardMenu = ({ children }) => {
  return (
    <div className='group cursor-pointer snap-start snap-always border border-gray-200 rounded-3xl p-5 hover:border-gray-300 hover:shadow-lg transition-all duration-300'>
      {children}
    </div>
  );
};

export const Header = ({ image }) => {
  return (
    <div className='relative overflow-hidden rounded-2xl aspect-square'>
      <img
        className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out'
        src={image}
        alt='Menu Item'
      />
      <div className='absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300' />
    </div>
  );
};

export const Body = ({ name, children }) => {
  return (
    <div className='mt-4'>
      <h3 className='text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300'>
        {name}
      </h3>
      <p className='text-sm text-gray-600 leading-relaxed line-clamp-2'>
        {children}
      </p>
    </div>
  );
};

export const Footer = ({ price }) => {
  return (
    <div className='mt-3'>
      <p className='text-2xl font-bold text-gray-900'>{price}</p>
    </div>
  );
};

CardMenu.Header = Header;
CardMenu.Body = Body;
CardMenu.Footer = Footer;