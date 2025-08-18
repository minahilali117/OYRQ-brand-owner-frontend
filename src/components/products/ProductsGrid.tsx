import React, { useState } from 'react';
import AddNewProduct from './AddNewProduct';
import EditProduct from './EditProduct';
import DeleteProductModal from '../ui/delete-product-modal';

// Import product images
import BlackJeans from '@/assets/images/black jeans.png';
import BlueTop from '@/assets/images/blue top.png';
import ClassicWhiteShirt from '@/assets/images/classic white shirt.png';
import OversizedHoodie from '@/assets/images/oversized hoodie.png';
import PrintedCottonTee from '@/assets/images/printed cotton tee.png';
import SportsShirt from '@/assets/images/sports shirt.png';
import SweatShirt from '@/assets/images/sweat shirt.png';

// Import action icons
import EditIcon from '@/assets/icons/Edit.png';
import DeleteIcon from '@/assets/icons/Delete.png';
import LowIcon from '@/assets/icons/low.png';

const ProductsGrid: React.FC = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showEditProduct, setShowEditProduct] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState<any>(null);

  const handleDeleteClick = (product: any) => {
    setProductToDelete(product);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    // Placeholder: Only close the modal, do not delete anything
    console.log('Would delete product:', productToDelete?.name);
    setShowDeleteModal(false);
    setProductToDelete(null);
  };

  const products = [
    {
      id: 1,
      name: 'Sports Shirt',
      price: 50,
      stock: 1000,
      category: 'Shirts',
      image: SportsShirt,
      status: 'Active'
    },
    {
      id: 2,
      name: 'Sweat Shirt',
      price: 60,
      stock: 980,
      category: 'Shirts',
      image: SweatShirt,
      status: 'Active'
    },
    {
      id: 3,
      name: 'Blue Top',
      price: 40,
      stock: 50,
      category: 'Shirts',
      image: BlueTop,
      status: 'Active',
      lowStock: true
    },
    {
      id: 4,
      name: 'Classic White Shirt',
      price: 45,
      stock: 1521,
      category: 'Shirts',
      image: ClassicWhiteShirt,
      status: 'Active'
    },
    {
      id: 5,
      name: 'Black Jeans',
      price: 25,
      stock: 1645,
      category: 'Pants',
      image: BlackJeans,
      status: 'Active'
    },
    {
      id: 6,
      name: 'Oversized Hoodie',
      price: 80,
      stock: 506,
      category: 'Jackets',
      image: OversizedHoodie,
      status: 'Active'
    },
    {
      id: 7,
      name: 'Printed Cotton Tee',
      price: 35,
      stock: 980,
      category: 'Shirts',
      image: PrintedCottonTee,
      status: 'Active'
    }
  ];

  if (showAddProduct) {
    return <AddNewProduct onBack={() => setShowAddProduct(false)} />;
  }

  if (showEditProduct && selectedProduct) {
    return <EditProduct onBack={() => setShowEditProduct(false)} productData={selectedProduct} />;
  }

  return (
    <div className="mx-auto max-w-6xl" style={{backgroundColor: '#f6f3fc'}}>
      {/* Search and Add Product Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-3 border border-gray-400 rounded-lg text-sm font-inter focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-[#f6f3fc] text-[#C1C1C1] placeholder-[#C1C1C1]"
          />
          <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <button 
          onClick={() => setShowAddProduct(true)}
          className="ml-4 px-4 py-3 text-white rounded-lg text-sm font-inter font-medium flex items-center space-x-2 hover:opacity-80 transition-opacity" 
          style={{backgroundColor: '#351C75'}}
        >
          <span>+</span>
          <span>ADD NEW PRODUCT</span>
        </button>
      </div>

      {/* Total Products Count */}
      <div className="mb-4">
        <span className="text-gray-600 text-sm font-inter">Total Products <span className="font-semibold text-gray-900">245</span></span>
      </div>

      {/* Products Table */}
      <div className="rounded-xl overflow-hidden">
        {/* Table Header */}
        <div className="bg-[#DFDFDF] px-6 py-3 rounded-md mx-6 mt-2 mb-4 flex items-center">
          <div className="grid grid-cols-12 text-sm font-medium text-[#8C8C8C] font-inter w-full">
            <div className="col-span-4" style={{marginLeft: '0px'}}>Product Name</div>
            <div className="col-span-2" style={{marginLeft: '-10px'}}>Price</div>
            <div className="col-span-2" style={{marginLeft: '-10px'}}>Inventory</div>
            <div className="col-span-2" style={{marginLeft: '18px'}}>Status</div>
            <div className="col-span-2" style={{marginLeft: '65px'}}>Actions</div>
          </div>
        </div>

        {/* Table Body */}
        <div>
          {products.map((product) => (
            <div key={product.id} className="px-6 py-4 border-b border-gray-200 last:border-b-0">
              <div className="grid grid-cols-12 items-center">
                {/* Product Name with Image */}
                <div className="col-span-4 flex items-center space-x-3 mr-8">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                  <div>
                    <p className="font-bold text-gray-900 font-inter">{product.name}</p>
                    <p className="text-sm text-gray-500 font-inter">{product.category}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="col-span-2 mr-4">
                  <span className="font-medium text-gray-900 font-inter">${product.price}</span>
                </div>

                {/* Inventory */}
                <div className="col-span-2 mr-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-gray-900 font-inter">{product.stock}</span>
                    {product.lowStock && (
                      <div className="flex items-center space-x-1 px-2 py-1 rounded-full" style={{backgroundColor: '#DB0000'}}>
                        <span className="text-white text-xs font-medium">Low</span>
                        <img src={LowIcon} alt="Low" className="w-3 h-3" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Status */}
                <div className="col-span-2 mr-2">
                  <span className="text-xs px-3 py-1 rounded-full font-medium" style={{color: '#00BD8B', backgroundColor: '#00BD8B24'}}>
                    {product.status}
                  </span>
                </div>

                {/* Actions */}
                <div className="col-span-2 flex space-x-2">
                  <button 
                    onClick={() => {
                      setSelectedProduct({
                        name: product.name,
                        description: product.name === 'Sports Shirt' ? 
                          'Stay cool and dry with the Elite Dry-Fit Sports Shirt. Designed for maximum performance, this shirt features moisture-wicking fabric, breathable mesh zones, and a lightweight feel. Perfect for workouts, training, and outdoor activities.' :
                          `${product.name} description`,
                        category: product.category,
                        shop: 'The Local Pick',
                        tags: '',
                        price: product.price.toString(),
                        stockQuantity: product.stock.toString(),
                        isActive: product.status === 'Active',
                        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                        colors: ['Blue', 'Red', 'White', 'Black']
                      });
                      setShowEditProduct(true);
                    }}
                    className="px-3 py-2 rounded-md text-sm font-bold flex items-center space-x-1 hover:opacity-80 transition-opacity" 
                    style={{color: '#351C75', backgroundColor: '#351C7533'}}
                  >
                    <img src={EditIcon} alt="Edit" className="w-4 h-4" />
                    <span>EDIT</span>
                  </button>
                  <button 
                    onClick={() => handleDeleteClick(product)}
                    className="px-3 py-2 rounded-md text-sm font-bold flex items-center space-x-1 hover:opacity-80 transition-opacity" 
                    style={{color: '#DB0000', backgroundColor: '#DB000033'}}
                  >
                    <img src={DeleteIcon} alt="Delete" className="w-4 h-4" />
                    <span>DELETE</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Delete Modal */}
      <DeleteProductModal 
        isOpen={showDeleteModal}
        onConfirm={handleDeleteConfirm}
        onCancel={() => {
          setShowDeleteModal(false);
          setProductToDelete(null);
        }}
      />
    </div>
  );
};

export default ProductsGrid;
