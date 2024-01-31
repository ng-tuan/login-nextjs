'use client';
import Cart from '@/components/Cart';
import Navbar from '@/components/Navbar';
import axios from 'axios';
import React, { ReactNode, useEffect, useState } from 'react';

interface ProductDetail {
  [x: string]: ReactNode;
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

interface DetailsPageProps {
  params: {
    id: string;
  };
}

const DetailsPage: React.FC<DetailsPageProps> = ({ params }) => {
  const { id } = params;
  const shop_id = 4426911;
  const api_key = 'd14a7f33728c43f7b5cb51957bdebb07';
  const [productDetail, setProductDetails] = useState<ProductDetail | null>(
    null,
  );
  const [productPrices, setProductPrices] = useState<
    ProductDetail | (() => ProductDetail)
  >();
  const [loading, setLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Step 1: Fetch data from API 1 to get product_id
        const response1 = await axios.get(
          `https://gyomade.vn/api/product2/${id}`,
        );
        const product_id = response1.data.product_id;

        const retail_price = response1.data.retail_price;

        setProductPrices(retail_price);
        setProductDetails(response1.data[0]);
        // Step 2: Fetch data from API 2 using the obtained product_id
        const response2 = await axios.get(
          `https://pos.pages.fm/api/v1/shops/${shop_id}/products/${product_id}/?api_key=${api_key}`,
        );

        // Ensure that the received data matches the expected interface
        const productData: ProductDetail = response2.data.data;
        setProductDetails(productData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error.message);
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!productDetail) {
    return <div>Data not found</div>;
  }
  console.log(productDetail);

  const getColorOptions = () => {
    const colorSet = new Set();
    productDetail?.variations?.forEach((variation) => {
      variation.fields.forEach((field) => {
        if (field.name === 'Màu') {
          colorSet.add(field.value);
        }
      });
    });
    return Array.from(colorSet);
  };

  const getSizeOptions = () => {
    const sizeSet = new Set();
    productDetail?.variations?.forEach((variation) => {
      variation.fields.forEach((field) => {
        if (field.name === 'Size') {
          sizeSet.add(field.value);
        }
      });
    });
    return Array.from(sizeSet);
  };

  const filteredVariations = productDetail.variations.filter((variation) => {
    const colorMatch = selectedColor
      ? variation.fields.some((field) => field.value === selectedColor)
      : true;
    const sizeMatch = selectedSize
      ? variation.fields.some((field) => field.value === selectedSize)
      : true;
    return colorMatch && sizeMatch;
  });

  // const filteredVariations = (productDetail?.variations || []).filter(
  //   (variation) => {
  //     const colorMatch = selectedColor
  //       ? variation.fields.some((field) => field.value === selectedColor)
  //       : true;
  //     const sizeMatch = selectedSize
  //       ? variation.fields.some((field) => field.value === selectedSize)
  //       : true;
  //     return colorMatch && sizeMatch;
  //   },
  // );

  const handleAddToCart = (selectedVariation) => {
    const newItem = {
      product_id: selectedVariation.product_id,
      variation_id: selectedVariation.id,
      quantity: 1,
      weight: selectedVariation.weight,
    };

    setCartItems([...cartItems, newItem]);
  };

  const handleToggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col">
        <div className="container">
          <div className="bg-blue-500 p-4 text-white">Slider</div>

          <div className="flex mt-10">
            <div className="w-3/12 bg-green-300 p-4">
              <div>
                <label htmlFor="colorDropdown">Color:</label>
                <select
                  id="colorDropdown"
                  onChange={(e) => setSelectedColor(e.target.value)}
                  value={selectedColor}
                >
                  {getColorOptions().map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
                <label htmlFor="sizeDropdown">Size:</label>
                <select
                  id="sizeDropdown"
                  onChange={(e) => setSelectedSize(e.target.value)}
                  value={selectedSize}
                >
                  {getSizeOptions().map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                {filteredVariations.slice(0, 1).map((variation) => (
                  <div key={variation.id}>
                    <p>Name: {productDetail.name}</p>
                    <p>Display ID: {variation.display_id}</p>
                    <p>Price: {variation.retail_price}</p>
                  </div>
                ))}
              </div>

              <div className="btn">
                <div>
                  {filteredVariations.length > 0 && (
                    <button
                      onClick={() => handleAddToCart(filteredVariations[0])}
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>

              <button onClick={handleToggleCart}>
                {showCart ? 'Hide Cart' : 'Show Cart'}
              </button>
            </div>
            {showCart && (
              <Cart cartItems={cartItems} setCartItems={setCartItems} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
