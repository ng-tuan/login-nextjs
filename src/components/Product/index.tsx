'use client';
import { groupBy, map } from 'lodash';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface ProductProps {
  id: number;
  product: string;
}

const Product: React.FC<ProductProps> = ({ id }) => {
  const [productData, setProductData] = useState<any | null>(null);

  async function getData(id: number) {
    const shop_id = 4426911;
    const api_key = 'd14a7f33728c43f7b5cb51957bdebb07';
    const page_size = 100
    const api_url = `https://pos.pages.fm/api/v1/shops/${shop_id}/products/variations?api_key=${api_key}&category_id[]=${id}&page_size=${page_size}`;

    const res = await fetch(api_url);

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(id);

        const filteredData = data.data.filter(
          (item: { remain_quantity: number }) => item.remain_quantity > 0,
        );
        setProductData(filteredData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);


  const groupedData = groupBy(productData, 'product.display_id');

  return (
    <>
      <div className="flex flex-wrap gap-4 justify-center">
        {Object.entries(groupedData).map(([displayId, items]) => (
          <div
            key={displayId}
            className="w-1/5 max-w-sm rounded overflow-hidden shadow-lg"
          >
            {/* Render only the first item in the group */}
            {items.slice(0, 1).map((item) => (
              <div key={item.id}>
                {/* <img
                  className="w-full"
                  src={item.images[0]} // Assuming the first image in the array is the main image
                  alt={item.product.name}
                /> */}
                <Link href={`/details/${item.product_id}`}>
                  <img
                    className="w-full"
                    src={item.images[0]} // Assuming the first image in the array is the main image
                    alt={item.product.name}
                  />
                </Link>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    {item.product.name}
                  </div>
                  <p className="text-gray-700 text-base">
                    SKU: {displayId} - {item.retail_price.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
            {/* Render all items in the group for fields */}
            <div className="px-6 pt-4 pb-2">
              {/* You can customize this part based on your data */}
              {items.map((item) =>
                item.fields.map(
                  (field: {
                    id: React.Key | null | undefined;
                    name: any;
                    value: any;
                  }) => (
                    <span
                      key={field.id}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                      {`${field.name}: ${field.value}`}
                    </span>
                  ),
                ),
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
