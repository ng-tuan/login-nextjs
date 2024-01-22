'use client';

import Product from "@/components/Product";

const Category = ({params}) => {
  const { id } = params;

  console.log('ID parameter:', id);

  return (
    <div>
     <Product id={id} product={""} />
    </div>
  );
};

export default Category;
