import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import ProductsGrid from '@/components/products/ProductsGrid';

const ProductsPage: React.FC = () => {
  return (
    <DashboardLayout title="Products">
      <div className="px-4">
        <ProductsGrid />
      </div>
    </DashboardLayout>
  );
};

export default ProductsPage;
