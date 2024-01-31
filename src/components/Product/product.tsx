'use client';
import axios from 'axios';
import { groupBy } from 'lodash';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface Product {
  _id: string;
  product_id: string;
  barcode: string | null;
  createdAt: string;
  display_id: string;
  name: string;
  updatedAt: string;
  slug: string;
  images: string[];
  remain_quantity: number;
  retail_price: number;
}

export default function ProductSlide() {
  const [data, setData] = useState<Product[]>([]);

  const fetchData = async (): Promise<Product[]> => {
    try {
      const apiUrl = 'https://gyomade.vn/api/product2';
      const response = await axios.get(apiUrl);

      if (response.status === 200) {
        // Assuming the API returns an array of products
        const products: Product[] = response.data.data;

        const filteredData = products.filter(
          (item: { remain_quantity: number }) => item.remain_quantity > 0,
        );

        return filteredData;
      } else {
        console.error(`Failed to fetch data. Status: ${response.status}`);
        return [];
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
      return [];
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetchData();
      setData(data);
    };

    fetchProducts();
  }, []);

  console.log(data);

  const groupedData = groupBy(data, (item) => item.display_id.slice(0, 5));

  console.log(groupedData);

  return (
    <>
      {/* <div>
        <h1>Product List</h1>
        <ul>
          {data.map((product) => (
            <li key={product._id}>
              {product.name}
            </li>
          ))}
        </ul>
      </div> */}
      <div className="flex flex-wrap gap-4 justify-center">
        {Object.entries(groupedData).map(([displayId, items]) => (
          <div
            key={displayId}
            className="w-1/5 max-w-sm rounded overflow-hidden shadow-lg"
          >
            {items.slice(-1).map((item) => (
              <div key={item.id}>
                {/* <Link href={`/details/${item.product_id}`}>
                  <img className="w-full" src={item.images[0]} alt={item.name} />
                </Link> */}
                <Link href={`/details/${item.slug}`}>
                  <img className="w-full" src={item.images[0]} alt={item.name} />
                </Link>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    {item.name}
                  </div>
                  <p className="text-gray-700 text-base">
                    SKU: {displayId} - {item.retail_price.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
            <div className="px-6 pt-4 pb-2">
              {/* {items.map((item) =>
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
              )} */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
