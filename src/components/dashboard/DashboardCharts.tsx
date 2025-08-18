import React, { useState } from 'react'

const DashboardCharts: React.FC = () => {
  const [ordersYear, setOrdersYear] = useState('2025')
  const [revenueYear, setRevenueYear] = useState('2025')
  const [ordersDropdownOpen, setOrdersDropdownOpen] = useState(false)
  const [revenueDropdownOpen, setRevenueDropdownOpen] = useState(false)

  const years = ['2025', '2024', '2023', '2022']

  // Sample data for orders chart - corrected August value to match the design
  const ordersData = [
    { month: 'JAN', value: 750 },
    { month: 'FEB', value: 800 },
    { month: 'MAR', value: 720 },
    { month: 'APR', value: 780 },
    { month: 'MAY', value: 900 },
    { month: 'JUN', value: 1000 },
    { month: 'JUL', value: 850 },
    { month: 'AUG', value: 436 }  // Changed from 350 to 436 to match the design
  ]

  const maxOrderValue = Math.max(...ordersData.map(d => d.value))

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 mx-auto max-w-6xl overflow-hidden">
      {/* Orders Chart */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-semibold text-gray-900 font-inter">Orders</h3>
          <div className="relative">
            <button
              onClick={() => setOrdersDropdownOpen(!ordersDropdownOpen)}
              className="flex items-center space-x-1 px-2 py-1 bg-gray-50 rounded-lg text-xs font-inter text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <span>{ordersYear}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {ordersDropdownOpen && (
              <div className="absolute right-0 mt-2 w-20 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => {
                      setOrdersYear(year)
                      setOrdersDropdownOpen(false)
                    }}
                    className="block w-full text-left px-3 py-2 text-sm font-inter text-gray-700 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {year}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Chart Area */}
        <div className="relative h-60">
          {/* Dotted grid lines */}
          <div className="absolute inset-0 ml-12 mr-4 mt-3 mb-8">
            <div className="h-full relative">
              {[0, 1, 2, 3, 4, 5].map((line) => (
                <div
                  key={line}
                  className="absolute w-full border-t border-dotted border-gray-300"
                  style={{ top: `${(line / 6) * 100}%` }}
                />
              ))}
            </div>
          </div>
          
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 h-full flex flex-col text-xs text-gray-500 font-inter" style={{height: 'calc(100% - 16px)', justifyContent: 'flex-start'}}>
            <span style={{position: 'absolute', top: '0%', transform: 'translateY(-50%)'}}>1200</span>
            <span style={{position: 'absolute', top: '20%', transform: 'translateY(-50%)'}}>1000</span>
            <span style={{position: 'absolute', top: '40%', transform: 'translateY(-50%)'}}>800</span>
            <span style={{position: 'absolute', top: '60%', transform: 'translateY(-50%)'}}>600</span>
            <span style={{position: 'absolute', top: '80%', transform: 'translateY(-50%)'}}>400</span>
            <span style={{position: 'absolute', top: '100%', transform: 'translateY(-50%)'}}>0</span>
          </div>
          
          <div className="ml-12 mr-4 h-full flex items-end justify-between pb-8 relative">
            {ordersData.map((data, index) => (
              <div key={data.month} className="flex flex-col items-center" style={{ width: '12.5%' }}>
                <div className="w-full flex flex-col items-center mb-3 relative">
                  {/* Highlighted bar with value - only for August */}
                  {index === 7 && (
                    <div className="absolute -top-8 text-white text-sm px-3 py-1.5 rounded-full font-inter font-medium z-10" style={{backgroundColor: '#00BD8B'}}>
                      436
                    </div>
                  )}
                  <div 
                    className="rounded-lg"
                    style={{ 
                      height: `${(data.value / 1200) * 200}px`,
                      width: '32px',
                      minHeight: '32px',
                      backgroundColor: index === 7 ? '#00BD8B' : '#351C75'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          {/* X-axis labels for Orders chart, moved down to match Revenue chart */}
          <div className="absolute bottom-0 left-12 right-4 flex justify-between text-xs text-gray-500 font-inter pb-2">
            {ordersData.map((data) => (
              <span key={data.month} className="w-8 text-center" style={{letterSpacing: '0.5px'}}>{data.month}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-semibold text-gray-900 font-inter">Revenue</h3>
          <div className="relative">
            <button
              onClick={() => setRevenueDropdownOpen(!revenueDropdownOpen)}
              className="flex items-center space-x-1 px-2 py-1 bg-gray-50 rounded-lg text-xs font-inter text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <span>{revenueYear}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {revenueDropdownOpen && (
              <div className="absolute right-0 mt-2 w-20 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => {
                      setRevenueYear(year)
                      setRevenueDropdownOpen(false)
                    }}
                    className="block w-full text-left px-3 py-2 text-sm font-inter text-gray-700 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {year}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Chart Area */}
        <div className="relative h-60">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between py-3 text-xs text-gray-500 font-inter">
            <span>$12k</span>
            <span>$10k</span>
            <span>$8k</span>
            <span>$6k</span>
            <span>$4k</span>
            <span>$2k</span>
            <span>0</span>
          </div>
          
          {/* Chart container */}
          <div className="ml-8 h-full relative">
            <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="revenueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#00BD8B" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#00BD8B" stopOpacity="0.05" />
                </linearGradient>
              </defs>
              
              {/* Revenue curve */}
              <path
                d="M 20 200 Q 80 120 140 140 Q 200 160 260 80 Q 320 100 380 140"
                fill="none"
                stroke="#00BD8B"
                strokeWidth="3"
                strokeLinecap="round"
              />
              
              {/* Fill area under curve */}
              <path
                d="M 20 200 Q 80 120 140 140 Q 200 160 260 80 Q 320 100 380 140 L 380 280 L 20 280 Z"
                fill="url(#revenueGradient)"
              />
              
              {/* Data points */}
              <circle cx="380" cy="140" r="4" fill="#00BD8B" />
              
              {/* Highlighted point with label */}
              <g>
                <circle cx="380" cy="140" r="6" fill="#00BD8B" stroke="white" strokeWidth="2" />
                <rect x="350" y="115" width="28" height="16" rx="8" fill="#351C75" />
                <text x="364" y="125" textAnchor="middle" fill="white" fontSize="8" fontFamily="Inter" fontWeight="500">$8k</text>
              </g>
            </svg>
            
            {/* X-axis labels */}
            <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-gray-500 font-inter px-1">
              <span>JAN</span>
              <span>FEB</span>
              <span>MAR</span>
              <span>APR</span>
              <span>MAY</span>
              <span>JUN</span>
              <span>JUL</span>
              <span>Aug</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardCharts