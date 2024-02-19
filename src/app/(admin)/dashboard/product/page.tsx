'use client';
import Navbar from '@/components/Navbar';
import axios from 'axios';
import { groupBy } from 'lodash';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Sidebar2 from '../components/Sidebar';
import Link from 'next/link';

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

export default function ProductList2() {
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

  const router = useRouter();

  const handleImageClick = (item: Product) => {
    router.push(`/dashboard/product/edit/${item.slug}`);
  };

  return (
    <>
      <div className="flex">
        {/* Sidebar */}
        <aside className="shadow w-64">
          <Sidebar2 />
        </aside>

        {/* Content Area */}
        <div className="flex-1">
          {/* Header */}
          <Navbar />

          {/* Page Content */}
          <div className="mx-auto p-4 overflow-auto h-full">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b text-left">Image</th>
                    <th className="py-2 px-4 border-b text-left">
                      Product Name
                    </th>
                    <th className="py-2 px-4 border-b text-left">SKU</th>
                    <th className="py-2 px-4 border-b text-left">
                      Retail Price
                    </th>
                    <th className="py-2 px-4 border-b text-left">Content</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(groupedData).map(([displayId, items]) => (
                    <tr key={displayId} className="border-b">
                      {items.slice(-1).map((item) => (
                        <React.Fragment key={item.id}>
                          <td className="py-2 px-4">
                            <a>
                              <img
                                className="w-16 h-16 object-cover"
                                src={item.images[0]}
                                alt={item.name}
                                onClick={() => handleImageClick(item)}
                              />
                            </a>
                          </td>
                          <td className="py-2 px-4">
                            <a>
                              <div
                                className="font-bold text-gray-800"
                                onClick={() => handleImageClick(item)}
                              >
                                {item.name}
                              </div>
                            </a>
                          </td>
                          <td className="py-2 px-4">{displayId}</td>
                          <td className="py-2 px-4">
                            {item.retail_price.toLocaleString()}
                          </td>
                          <td className="py-2 px-4">
                            {item.content === null ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="text-red-500 text-base w-6 h-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M6 18 18 6M6 6l12 12"
                                />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="text-green-500 w-6 h-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="m4.5 12.75 6 6 9-13.5"
                                />
                              </svg>
                            )}
                          </td>
                        </React.Fragment>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
