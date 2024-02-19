'use client';
import axios from 'axios';
import { map } from 'lodash';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type CategoryItem = {
  id: number;
  text: string;
  item: string;
  // Add other properties as needed
};

const Category: React.FC = () => {
  const [categories, setCategories] = useState<CategoryItem[]>([]);

  const shop_id = 4426911;
  const api_key = 'd14a7f33728c43f7b5cb51957bdebb07';
  const api_url = `https://pos.pages.fm/api/v1/shops/${shop_id}/categories?api_key=${api_key}`;

  useEffect(() => {
    axios
      .get(api_url)
      .then((response) => {
        setCategories(response.data.data);
        console.log('Fetch data success');
      })
      .catch((error) => {
        console.error('Error fetching data:', error.message);
      });
  }, [api_url]);

  const formatText = (originalText: string): string => {
    const lastHyphenIndex = originalText.lastIndexOf('-');
    return lastHyphenIndex !== -1
      ? originalText.slice(lastHyphenIndex + 1).trim()
      : originalText;
  };

  return (
    <>
      {map(categories, (item) => (
        <Link href={`/category/${item.id}`} key={item.id}>
          <div className="group">
            <h2 className={`mb-3 text-2xl font-semibold`}>
              {formatText(item.text)}{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Find in-depth information about Next.js features and API.
            </p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Category;
