import React, { useState } from 'react';
import DeleteProductModal from '../ui/delete-product-modal';

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: string;
  image: string;
  status: string;
}

interface ProductCardProps {
  product: Product;
  onDelete?: (productId: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onDelete }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Stock':
        return 'bg-green-100 text-green-800';
      case 'Low Stock':
        return 'bg-red-100 text-red-800';
      case 'Out of Stock':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleDeleteConfirm = () => {
    // Placeholder: Only close the modal, do not delete anything
    setShowDeleteModal(false);
  };

  return (
    <div className="bg-gray-100 rounded-xl border border-gray-100 overflow-hidden">
      {/* Product Image */}
      <div className="aspect-square overflow-hidden bg-gray-50">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-gray-900 font-inter text-sm leading-tight">{product.name}</h3>
          <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(product.status)}`}>
            {product.status}
          </span>
        </div>
        
        <p className="text-gray-600 text-xs font-inter mb-2">{product.category}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900 font-inter">${product.price}</span>
          <span className="text-sm text-gray-600 font-inter">{product.stock} left</span>
        </div>
        
        {/* Action Buttons */}
        <div className="flex space-x-2 mt-3">
          <button className="flex-1 px-3 py-3 bg-gray-50 text-gray-700 text-xs font-inter rounded-lg hover:bg-gray-100 transition-colors">
            Edit
          </button>
          <button className="flex-1 px-3 py-3 bg-blue-50 text-blue-700 text-xs font-inter rounded-lg hover:bg-blue-100 transition-colors">
            View
          </button>
          <button 
            onClick={() => setShowDeleteModal(true)}
            className="flex-1 px-3 py-3 bg-red-50 text-red-700 text-xs font-inter rounded-lg hover:bg-red-100 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>

      {/* Delete Modal */}
      <DeleteProductModal 
        isOpen={showDeleteModal}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setShowDeleteModal(false)}
      />
    </div>
  );
};

export default ProductCard;
