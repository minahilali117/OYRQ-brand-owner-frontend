import React, { useState } from 'react';

interface AddNewProductProps {
  onBack: () => void;
}

const AddNewProduct: React.FC<AddNewProductProps> = ({ onBack }) => {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    category: '',
    shop: '',
    tags: '',
    price: '',
    stockQuantity: '',
    isActive: true,
    sizes: [] as string[],
    colors: [] as string[]
  });

  const [newSize, setNewSize] = useState('');
  const [newColor, setNewColor] = useState('');

  const handleInputChange = (field: string, value: string | boolean) => {
    setProductData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const addSize = () => {
    if (newSize.trim()) {
      setProductData(prev => ({
        ...prev,
        sizes: [...prev.sizes, newSize.trim()]
      }));
      setNewSize('');
    }
  };

  const addColor = () => {
    if (newColor.trim()) {
      setProductData(prev => ({
        ...prev,
        colors: [...prev.colors, newColor.trim()]
      }));
      setNewColor('');
    }
  };

  const handleSave = () => {
    console.log('Product data:', productData);
    // Handle save logic here
  };

  return (
    <div className="mx-auto max-w-6xl min-h-screen" style={{backgroundColor: '#f6f3fc'}}>
      {/* Header */}
      <div className="flex flex-col items-start">
        <button 
          onClick={onBack}
          className="flex items-center font-bold text-sm mb-4"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <h1 className="text-3xl font-bold text-gray-900 font-inter">Add New Product</h1>
      </div>

        {/* Centered Form Sections */}
        <div className="flex flex-col items-center">
          {/* Basic Info Section */}
          <div className="p-4 mb-3 w-full max-w-2xl">
            <h2 className="text-xl font-bold text-gray-900 font-inter mb-3">Basic Info</h2>
          
          <div className="space-y-4">
            {/* Product Name */}
            <div>
              <label className="block text-sm font-medium text-[#8C8C8C] font-inter mb-2">
                Product Name
              </label>
              <input
                type="text"
                placeholder="Enter name"
                value={productData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm font-inter focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-black placeholder:text-[#C1C1C1]"
              />
            </div>

            {/* Product Description */}
            <div>
              <label className="block text-sm font-medium text-[#8C8C8C] font-inter mb-2">
                Product Description
              </label>
              <input
                type="text"
                placeholder="Enter description"
                value={productData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm font-inter focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-black placeholder:text-[#C1C1C1]"
              />
            </div>

            {/* Product Category */}
            <div>
              <label className="block text-sm font-medium text-[#8C8C8C] font-inter mb-2">
                Product Category
              </label>
              <select
                value={productData.category}
                onChange={(e) => handleInputChange('category', e.target.value)}
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg text-sm font-inter focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white ${productData.category ? 'text-black' : 'text-[#C1C1C1]'}`}
              >
                <option value="">Select category</option>
                <option value="Shirts">Shirts</option>
                <option value="Pants">Pants</option>
                <option value="Jackets">Jackets</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>

            {/* Shop */}
            <div>
              <label className="block text-sm font-medium text-[#8C8C8C] font-inter mb-2">
                Shop
              </label>
              <select
                value={productData.shop}
                onChange={(e) => handleInputChange('shop', e.target.value)}
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg text-sm font-inter focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white ${productData.shop ? 'text-black' : 'text-[#C1C1C1]'}`}
              >
                <option value="">Select shop</option>
                <option value="Main Store">Main Store</option>
                <option value="Online Store">Online Store</option>
                <option value="Outlet">Outlet</option>
              </select>
            </div>

            {/* Tags */}
            <div>
              <label className="block text-sm font-medium text-[#8C8C8C] font-inter mb-2">
                Tags
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter tag"
                  value={productData.tags}
                  onChange={(e) => handleInputChange('tags', e.target.value)}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg text-sm font-inter focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-black placeholder:text-[#C1C1C1]"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
              </div>
              {/* Tag display with dark background */}
              {productData.tags && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {productData.tags.split(',').map((tag, index) => (
                    tag.trim() && (
                      <span key={index} className="px-3 py-1 bg-gray-700 text-white rounded-full text-sm">
                        {tag.trim()}
                      </span>
                    )
                  ))}
                </div>
              )}
            </div>

            {/* Active Toggle */}
            <div className="flex items-center justify-between p-4 rounded-lg bg-white border border-gray-300">
              <span className="text-sm font-bold text-black font-inter">Active</span>
              <button
                onClick={() => handleInputChange('isActive', !productData.isActive)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  productData.isActive ? 'bg-[#351C75]' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    productData.isActive ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="flex justify-center w-full">
          <div className="w-full max-w-2xl border-b border-[#DBDBDB] mb-3"></div>
        </div>

          {/* Product Media Section */}
          <div className="p-4 mb-3 w-full max-w-2xl">
            <h2 className="text-lg font-semibold text-gray-900 font-inter mb-4">Product Media</h2>
          
          <div>
            <label className="block text-sm font-medium text-[#8C8C8C] font-inter mb-2">
              Product Image
            </label>
            <div className="w-24 h-24 border-2 border-solid border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-gray-400 transition-colors bg-white">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="flex justify-center w-full">
          <div className="w-full max-w-2xl border-b border-[#DBDBDB] mb-3"></div>
        </div>

          {/* Pricing & Variants Section */}
          <div className="p-4 mb-3 w-full max-w-2xl">
            <h2 className="text-lg font-semibold text-gray-900 font-inter mb-4">Pricing & Variants</h2>
          
          <div className="space-y-4">
            {/* Price */}
            <div>
              <label className="block text-sm font-medium text-[#8C8C8C] font-inter mb-2">
                Price
              </label>
              <input
                type="number"
                placeholder="Enter price"
                value={productData.price}
                onChange={(e) => handleInputChange('price', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm font-inter focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-black placeholder:text-[#C1C1C1]"
              />
            </div>

            {/* Add Discount Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="addDiscount"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="addDiscount" className="ml-2 text-sm font-medium text-[#8C8C8C] font-inter">
                Add Discount
              </label>
            </div>

            {/* Sizes */}
            <div>
              <label className="block text-sm font-medium text-[#8C8C8C] font-inter mb-2">
                Sizes
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Add size"
                  value={newSize}
                  onChange={(e) => setNewSize(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-sm font-inter focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-black placeholder:text-[#C1C1C1]"
                />
                <button
                  onClick={addSize}
                  className="px-4 py-3 text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
              </div>
              {productData.sizes.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {productData.sizes.map((size, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-300 text-black rounded-full text-sm">
                      {size}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Colors */}
            <div>
              <label className="block text-sm font-medium text-[#8C8C8C] font-inter mb-2">
                Colors
              </label>
              <select
                value={newColor}
                onChange={(e) => setNewColor(e.target.value)}
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg text-sm font-inter focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white ${newColor ? 'text-black' : 'text-[#C1C1C1]'}`}
              >
                <option value="">Add color</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
                <option value="Black">Black</option>
                <option value="White">White</option>
              </select>
              {productData.colors.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {productData.colors.map((color, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-300 text-black rounded-full text-sm">
                      {color}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Size Chart */}
            <div>
              <label className="block text-sm font-medium text-[#8C8C8C] font-inter mb-2">
                Size Chart
              </label>
              <div className="w-24 h-24 border-2 border-solid border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-gray-400 transition-colors bg-white">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="flex justify-center w-full">
          <div className="w-full max-w-2xl border-b border-[#DBDBDB] mb-3"></div>
        </div>

          {/* Inventory Section */}
          <div className="p-4 mb-3 w-full max-w-2xl">
            <h2 className="text-lg font-semibold text-gray-900 font-inter mb-4">Inventory</h2>
          
          <div>
            <label className="block text-sm font-medium text-[#8C8C8C] font-inter mb-2">
              Stock Quantity
            </label>
            <input
              type="number"
              placeholder="Enter quantity"
              value={productData.stockQuantity}
              onChange={(e) => handleInputChange('stockQuantity', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm font-inter focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-black placeholder:text-[#C1C1C1]"
            />
          </div>
        </div>
        
        {/* Divider */}
        <div className="flex justify-center w-full">
          <div className="w-full max-w-2xl border-b border-[#DBDBDB] mb-4"></div>
        </div>

          {/* Save Button */}
          <div className="flex justify-center w-full max-w-2xl">
            <button
              onClick={() => { handleSave(); onBack(); }}
              className="w-full max-w-md px-15 py-3 text-white rounded-md text-sm font-inter font-medium hover:opacity-90 transition-opacity"
              style={{backgroundColor: '#351C75'}}
            >
              SAVE
            </button>
          </div>
        </div>
    </div>
  );
};

export default AddNewProduct;
