'use client';

import Product from "@/components/Product";
import axios from "axios";
import { useEffect, useState } from "react";



const Category = ({params}) => {
  const { id } = params;

  console.log('ID parameter:', id);
  const [idcategories, setIdCategories] = useState("")
  const shop_id = 4426911;
  const api_key = 'd14a7f33728c43f7b5cb51957bdebb07';
  // const api_url = `https://pos.pages.fm/api/v1/shops/${shop_id}/categories?api_key=${api_key}`;
  const api_url = `https://gyomade.vn/api/category/${id}`;

  useEffect(() => {
    axios
      .get(api_url)
      .then((response) => {
        setIdCategories(response.data.id);
        console.log('Fetch data success');
      })
      .catch((error) => {
        console.error('Error fetching data:', error.message);
      });
  }, []);

console.log(idcategories)

  return (
    <div>
     <Product id={idcategories} product={""} />
    </div>
  );
};

export default Category;
