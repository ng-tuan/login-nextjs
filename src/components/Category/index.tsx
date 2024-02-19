'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { map } from 'lodash';
import Link from 'next/link';
import Card from './card';



export default function Category1() {
  const shop_id = 4426911;
  const api_key = 'd14a7f33728c43f7b5cb51957bdebb07';
  // const api_url = `https://pos.pages.fm/api/v1/shops/${shop_id}/categories?api_key=${api_key}`;
  const api_url = `https://gyomade.vn/api/category`;

  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios
      .get(api_url)
      .then((response) => {
        // Assuming your response.data is an array of CategoryItem
        setCategories(response.data.data);
        console.log('Fetch data success');
      })
      .catch((error) => {
        console.error('Error fetching data:', error.message);
      });
  }, []);

  const formatText = (originalText: string): string => {
    const lastHyphenIndex = originalText.lastIndexOf('-');
    if (lastHyphenIndex !== -1) {
      return originalText.slice(lastHyphenIndex + 1).trim();
    }
    return originalText;
  };

  console.log(categories);

  return (
    <>
      {/* <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 sm:py-12">
        <div className="max-w-screen-md mx-auto">
          <div className="grid grid-cols-4 gap-6">
            {categories.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div> */}
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">
              Danh mục sản phẩm
            </h2>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
              {map(categories,(item) => (
                <>
                  <Card item={item} />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
