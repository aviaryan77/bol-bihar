import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '@/services';

function Header() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="inline-block w-full border-b border-blue-400 py-8">
        <div className="block md:float-left">
          <Link href="/">
            <span className="curser-pointer flex items-center text-4xl font-bold text-white">
              <div className="mr-2 h-16 w-16 flex-none rounded-full border-b border-r border-gray-50">
                <img
                  alt={'bol bihar logo'}
                  height="120px"
                  width="120px"
                  className="rounded-full align-middle "
                  src={'/logo.png'}
                />
              </div>
              Bol Bihar
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span className="mt-2 ml-4 align-middle text-white md:float-right">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
