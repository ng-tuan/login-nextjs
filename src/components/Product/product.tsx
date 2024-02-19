'use client';
import axios from 'axios';
import { groupBy } from 'lodash';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { tns } from 'tiny-slider';

interface Product {
  id: Key | null | undefined;
  content: ReactNode;
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

export default function ProductList() {
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

  const sliderRefs = useRef([]);

  useEffect(() => {
    Object.entries(groupedData).forEach(([displayId, items], index) => {
      const slider = tns({
        container: sliderRefs.current[index],
        items: 3,
        slideBy: 'page',
        axis: 'horizontal',
        mouseDrag: true,
        controls: false,
        swipeAngle: false,
        speed: 400,
        nav: false,
        autoWidth: true
      });

      return () => {
        slider.destroy();
      };
    });
  }, [groupedData]);
  return (
    <>
      {/* <div className="flex flex-wrap gap-4 justify-center">
        {Object.entries(groupedData).map(([displayId, items]) => (
          <div
            key={displayId}
            className="w-1/5 max-w-sm rounded overflow-hidden shadow-lg"
          >
            {items.slice(-1).map((item) => (
              <div key={item.id}>
                <Link href={`/details/${item.slug}`}>
                  <img
                    className="w-full"
                    src={item.images[0]}
                    alt={item.name}
                  />
                </Link>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{item.name}</div>
                  <p className="text-gray-700 text-base">
                    SKU: {displayId} - {item.retail_price.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
            <div className="px-6 pt-4 pb-2">
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
      </div> */}

      {/* <div className="flex flex-wrap justify-center">
        {Object.entries(groupedData).map(([displayId, items], index) => (
          <div
            key={displayId}
            className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 max-w-sm rounded overflow-hidden shadow-lg"
          >
            <div
              ref={(el) => (sliderRefs.current[index] = el)}
              className="product-slider"
            >
              {items.map((item) => (
                <div key={item.id} className="tns-item">
                  <Link href={`/details/${item.slug}`}>
                    <img
                      className="w-full"
                      src={item.images[0]}
                      alt={item.name}
                    />
                  </Link>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{item.name}</div>
                    <p className="text-gray-700 text-base">
                      SKU: {displayId} - {item.retail_price.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div> */}

      {/* <div>
        {Object.entries(groupedData).map(([displayId, items], index) => (
          <div
            key={displayId}
            className="max-w-sm rounded overflow-hidden shadow-lg"
          >
            <div
              ref={(el) => (sliderRefs.current[index] = el)}
              className="product-slider"
            >
              {items.map((item) => (
                <div key={item.id} className="item tns-item" style={{backgroundColor:"green"}}>
                  <Link href={`/details/${item.slug}`}>
                    <img
                      className="w-full"
                      src={item.images[0]}
                      alt={item.name}
                    />
                  </Link>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{item.name}</div>
                    <p className="text-gray-700 text-base">
                      SKU: {displayId} - {item.retail_price.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div> */}
      <div id="mouse-drag2_wrapper" className="flex justify-center w-full">
        <div className="container w-full">
          <div className="mx-auto w-full">
            <div className="slider w-full" id="mouse-drag2-ow">
              <div id="mouse-drag2-mw" className="tns-ovh">
                <div className="tns-inner w-full" id="mouse-drag2-iw">
                  <div
                    className="mouse-drag2 tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal"
                    id="mouse-drag2"
                  >
                    {Object.entries(groupedData).map(
                      ([displayId, items], index) => (
                        <div
                          key={displayId}
                          className="max-w-sm rounded overflow-hidden shadow-lg"
                        >
                          <div
                            ref={(el) => (sliderRefs.current[index] = el)}
                            className="product-slider"
                          >
                            {items.map((item) => (
                              // <div
                              //   key={item.id}
                              //   className="item tns-item"
                              //   style={{ backgroundColor: 'green' }}
                              // >
                              //   <Link href={`/details/${item.slug}`}>
                              //     <img
                              //       className="w-full"
                              //       src={item.images[0]}
                              //       alt={item.name}
                              //     />
                              //   </Link>
                              //   <div className="px-6 py-4">
                              //     <div className="font-bold text-xl mb-2">
                              //       {item.name}
                              //     </div>
                              //     <p className="text-gray-700 text-base">
                              //       SKU: {displayId} -{' '}
                              //       {item.retail_price.toLocaleString()}
                              //     </p>
                              //   </div>
                              // </div>
                              <div
                                key={item.id}
                                className="item tns-item"
                                aria-hidden="false"
                                tabIndex={0}
                              >
                                <div className="img img-4">
                                  <Link href={`/details/${item.slug}`}>
                                    <img
                                      className="w-full"
                                      src={item.images[0]}
                                      alt={item.name}
                                    />
                                  </Link>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ),
                    )}

                    {/* Slide 1 */}

                    {/* Slide 2 */}
                    {/* <div
                    className="item tns-item"
                    aria-hidden="false"
                    tabIndex={0}
                  >
                    <div className="img img-5">
                      <Image
                        src="/slider/slider5.jpg"
                        alt="slider"
                        width={1550}
                        height={500}
                        layout="responsive"
                      />
                    </div>
                
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
