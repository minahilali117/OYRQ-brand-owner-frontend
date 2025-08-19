import React from 'react'
import OrdersIcon from '@/assets/icons/total orders.png'
import TotalRevenueIcon from '@/assets/icons/total revenue.png'
import LowStockIcon from '@/assets/icons/low stock.png'
import MiniGraphIcon from '@/assets/icons/mini graph.png'
import ArrowLowStock from '@/assets/icons/arrow low stock.png'

const DashboardCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 mx-auto max-w-6xl">
      {/* Total Orders Card */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-2">
          <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
            <img src={OrdersIcon} alt="Orders" className="w-5 h-5" />
          </div>
          <div className="flex items-center space-x-1">
            <img src={MiniGraphIcon} alt="Graph" className="w-17 h-7" />
            <span className="text-green-500 font-poppins font-medium">+12%</span>
          </div>
        </div>
        <div>
          <p className="text-gray-500 text-xs font-inter mb-0.5">Total Orders</p>
          <h3 className="text-xl font-bold text-gray-900 font-inter">184</h3>
        </div>
      </div>

      {/* Total Revenue Card */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-2">
          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
            <img src={TotalRevenueIcon} alt="Revenue" className="w-5 h-5" />
          </div>
          <div className="flex items-center space-x-1">
            <img src={MiniGraphIcon} alt="Graph" className="w-17 h-7" />
            <span className="text-green-500 font-poppins font-medium">+20%</span>
          </div>
        </div>
        <div>
          <p className="text-gray-500 text-xs font-inter mb-0.5">Total Revenue</p>
          <h3 className="text-xl font-bold text-gray-900 font-inter">$1084</h3>
        </div>
      </div>

      {/* Low Stock Products Card */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-2">
          <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
            <img src={LowStockIcon} alt="Low Stock" className="w-5 h-5" />
          </div>
          <div className="flex items-center justify-center" style={{width: '24px', height: '24px', marginTop: '6px'}}>
            <img src={ArrowLowStock} alt="Arrow" style={{width: '18px', height: '18px', objectFit: 'contain'}} />
          </div>
        </div>
        <div>
          <p className="text-gray-500 text-xs font-inter mb-0.5">Low Stock Products</p>
          <h3 className="text-xl font-bold text-gray-900 font-inter">4</h3>
        </div>
      </div>
    </div>
  )
}

export default DashboardCards
