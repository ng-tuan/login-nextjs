'use client';
import { useRouter } from 'next/router';
import React from 'react';

const DetailsPage = ({params}) => {
  const { id } = params;

  console.log('ID parameter:', id);

  return (
    <div>
      <h1>Details Page</h1>
      <p>Item ID: {id}</p>
    </div>
  );
};

export default DetailsPage;
