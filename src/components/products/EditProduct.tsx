import React, { useState } from 'react';

// Import product images
import SportsShirt from '@/assets/images/sports shirt.png';
import SizeChart from '@/assets/images/size-chart.jpg';

interface EditProductProps {
  onBack: () => void;
  productData?: {
    name: string;
    description: string;
    category: string;
    shop: string;
    tags: string;
    price: string;
    stockQuantity: string;
    isActive: boolean;
    sizes: string[];
    colors: string[];
  };
}

const EditProduct: React.FC<EditProductProps> = ({ onBack, productData: initialData }) => {
  const [productData, setProductData] = useState({
    name: initialData?.name || 'Sports Shirt',
    description: initialData?.description || 'Stay cool and dry with the Elite Dry-Fit Sports Shirt. Designed for maximum performance, this shirt features moisture-wicking fabric, breathable mesh zones, and a lightweight feel. Perfect for workouts, training, and outdoor activities.',
    category: initialData?.category || 'Shirt',
    shop: initialData?.shop || 'The Local Pick',
    tags: initialData?.tags || '',
    price: initialData?.price || '100',
    stockQuantity: initialData?.stockQuantity || '1000',
    isActive: initialData?.isActive ?? true,
    sizes: initialData?.sizes || ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: initialData?.colors || ['Blue', 'Red', 'White', 'Black']
  });

  const [newSize, setNewSize] = useState('');
  const [newColor, setNewColor] = useState('');
  const [discountEnabled, setDiscountEnabled] = useState(true);
  const [discountValue, setDiscountValue] = useState('50');

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

  const removeSize = (index: number) => {
    setProductData(prev => ({
      ...prev,
      sizes: prev.sizes.filter((_, i) => i !== index)
    }));
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

  const removeColor = (index: number) => {
    setProductData(prev => ({
      ...prev,
      colors: prev.colors.filter((_, i) => i !== index)
    }));
  };

  const handleSave = () => {
    console.log('Updated product data:', productData);
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
        <h1 className="text-3xl font-bold text-gray-900 font-inter">Edit Product</h1>
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm font-inter focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-black"
              />
            </div>

            {/* Product Description */}
            <div>
              <label className="block text-sm font-medium text-[#8C8C8C] font-inter mb-2">
                Product Description
              </label>
              <textarea
                placeholder="Enter description"
                value={productData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm font-inter focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-white text-black"
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
                <option value="Shirt">Shirt</option>
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
                <option value="The Local Pick">The Local Pick</option>
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
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg text-sm font-inter focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-black"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
              </div>
              {/* Display existing tags */}
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-300 text-black rounded-sm text-sm flex items-center">
                  eco-friendly
                  <button className="ml-2 text-gray-400 hover:text-gray-600">×</button>
                </span>
                <span className="px-3 py-1 bg-gray-300 text-black rounded-sm text-sm flex items-center">
                  trending
                  <button className="ml-2 text-gray-400 hover:text-gray-600">×</button>
                </span>
              </div>
            </div>

            {/* Active Toggle */}
            <div className="flex items-center justify-between p-4 rounded-lg bg-white border border-gray-300">
              <span className="text-sm font-bold text-gray-700 font-inter">Active</span>
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
            <div className="flex items-center space-x-4">
              {/* Existing Product Image */}
              <div className="relative">
                <img 
                  src={SportsShirt} 
                  alt="Sports Shirt"
                  className="w-24 h-24 rounded-lg object-cover"
                />
              </div>
              {/* Add New Image Button */}
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm font-inter focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-black"
              />
            </div>

            {/* Add Discount Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="addDiscount"
                checked={discountEnabled}
                onChange={(e) => setDiscountEnabled(e.target.checked)}
                className="h-4 w-4 text-[#351C75] focus:ring-[#351C75] border-gray-300 rounded"
              />
              <label htmlFor="addDiscount" className="ml-2 text-sm font-medium text-[#8C8C8C] font-inter">
                Add Discount
              </label>
            </div>

            {/* Discount Value */}
            {discountEnabled && (
              <div>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    placeholder="Discount value"
                    value={discountValue}
                    onChange={(e) => setDiscountValue(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-sm font-inter focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-black"
                  />
                  <span className="text-[#8C8C8C] text-sm">%</span>
                </div>
              </div>
            )}

            {/* Sizes */}
            <div>
              <label className="block text-sm font-medium text-[#8C8C8C] font-inter mb-2">
                Sizes
              </label>
              <div className="flex items-center space-x-2 mb-2">
                <input
                  type="text"
                  placeholder="Add size"
                  value={newSize}
                  onChange={(e) => setNewSize(e.target.value)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-sm font-inter focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-black"
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
                <div className="flex flex-wrap gap-2">
                  {productData.sizes.map((size, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-300 text-black rounded-full text-sm flex items-center">
                      {size}
                      <button 
                        onClick={() => removeSize(index)}
                        className="ml-2 text-gray-400 hover:text-gray-600"
                      >
                        ×
                      </button>
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
                onChange={(e) => { setNewColor(e.target.value); addColor(); }}
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg text-sm font-inter focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white mb-2 ${newColor ? 'text-black' : 'text-[#C1C1C1]'}`}
              >
                <option value="">Add color</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
                <option value="Black">Black</option>
                <option value="White">White</option>
              </select>
              {productData.colors.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {productData.colors.map((color, index) => (
                    <div key={index} className="flex items-center px-3 py-1 bg-gray-300 rounded-full">
                      <div 
                        className="w-6 h-6 rounded-full border border-gray-300 mr-2"
                        style={{backgroundColor: color.toLowerCase()}}
                      />
                      <span className="text-sm text-black mr-2">{color}</span>
                      <button 
                        onClick={() => removeColor(index)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Size Chart */}
            <div>
              <label className="block text-sm font-medium text-[#8C8C8C] font-inter mb-2">
                Size Chart
              </label>
              <div className="relative">
                <img 
                  src={SizeChart} 
                  alt="Size Chart"
                  className="w-24 h-24 rounded-lg object-cover"
                />
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm font-inter focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-black"
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
              className="w-full max-w-md px-20 py-3 text-white rounded-lg text-sm font-inter font-medium hover:opacity-90 transition-opacity"
              style={{backgroundColor: '#351C75'}}
            >
              SAVE CHANGES
            </button>
          </div>
        </div>
    </div>
  );
};

export default EditProduct;
