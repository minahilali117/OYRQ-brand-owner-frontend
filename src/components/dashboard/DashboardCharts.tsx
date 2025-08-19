import React from 'react'
import ordersChartImg from '@/assets/images/orders chart.png'
import revenueChartImg from '@/assets/images/revenue chart.png'

const DashboardCharts: React.FC = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-8 py-4">
      {/* Orders: keep full half width on large screens */}
      <img
        src={ordersChartImg}
        alt="Orders Chart"
        className="w-full lg:w-1/2 h-auto object-contain rounded-xl shadow-sm"
      />

      {/* Revenue: slightly narrower + subtle scale on large screens, moved up and right */}
      <div className="w-full lg:w-[49%] flex justify-end items-start relative">
        <img
          src={revenueChartImg}
          alt="Revenue Chart"
          className="h-auto object-contain rounded-xl shadow-sm transform lg:scale-96 transition-transform"
          style={{ marginTop: '1px', marginRight: '-35px', width: '100%' }}
        />
      </div>
    </div>
  )
}

export default DashboardCharts
