import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import DashboardIcon from '@/assets/icons/dashboard.png'
import DashboardActiveIcon from '@/assets/icons/dashboard active.png'
import ProductsIcon from '@/assets/icons/products.png'
import ProductsActiveIcon from '@/assets/icons/products active.png'
import ShopsIcon from '@/assets/icons/shops.png'
import ShopsActiveIcon from '@/assets/icons/shops active.png'
import OrdersIcon from '@/assets/icons/orders.png'
import OrdersActiveIcon from '@/assets/icons/orders active.png'
import AnalyticsIcon from '@/assets/icons/analytics.png'
import AnalyticsActiveIcon from '@/assets/icons/analytics active.png'
import CategoryIcon from '@/assets/icons/category.png'
import CategoryActiveIcon from '@/assets/icons/category active.png'
import ProfileIcon from '@/assets/icons/profile.png'
import ProfileActiveIcon from '@/assets/icons/Profile active.png'
import LogoutIcon from '@/assets/icons/Logout.png'
import LogoutModal from './logout-modal'

interface SidebarItem {
  label: string
  to?: string
  icon: string
  activeIcon: string
  className?: string // inactive icon sizing
  activeClassName?: string // active icon sizing
  onClick?: () => void
}

const Sidebar: React.FC = () => {
  const navigate = useNavigate()
  const [showLogoutModal, setShowLogoutModal] = useState(false)

  const items: SidebarItem[] = [
    { label: 'Dashboard', to: '/dashboard', icon: DashboardIcon, activeIcon: DashboardActiveIcon, className: 'w-4 h-4', activeClassName: 'w-4 h-4' },
    { label: 'Products', to: '/products', icon: ProductsIcon, activeIcon: ProductsActiveIcon, className: 'w-4 h-4', activeClassName: 'w-4 h-4' },
    { label: 'Shops', to: '/shops', icon: ShopsIcon, activeIcon: ShopsActiveIcon, className: 'w-4 h-4', activeClassName: 'w-4 h-4' },
    { label: 'OYRQ Orders', to: '/orders', icon: OrdersIcon, activeIcon: OrdersActiveIcon, className: 'w-4 h-4', activeClassName: 'w-4 h-4' },
    { label: 'Analytics', to: '/analytics', icon: AnalyticsIcon, activeIcon: AnalyticsActiveIcon, className: 'w-4 h-4', activeClassName: 'w-4 h-4' },
    { label: 'Categories', to: '/categories', icon: CategoryIcon, activeIcon: CategoryActiveIcon, className: 'w-4 h-4', activeClassName: 'w-4 h-4' },
    { label: 'Profile', to: '/profile', icon: ProfileIcon, activeIcon: ProfileActiveIcon, className: 'w-4 h-4', activeClassName: 'w-4 h-4' },
  ]

  const handleLogout = () => {
    setShowLogoutModal(true)
  }

  const confirmLogout = () => {
    setShowLogoutModal(false)
    navigate('/')
  }

  const cancelLogout = () => {
    setShowLogoutModal(false)
  }

  return (
    <div className="flex flex-col h-screen justify-between p-4">
      <div className="flex-shrink-0">
        <h1 className="text-3xl mb-6 ml-2 font-brand font-bold text-[#351C75]">OYRQ</h1>
      </div>
      <div className="flex-1 flex flex-col justify-between min-h-0">
        <div className="space-y-4">
          {items.map((item) => (
            <NavLink
              key={item.label}
              to={item.to!}
              className={({ isActive }) =>
                `flex items-center space-x-2 px-4 py-3 rounded-lg font-inter text-sm transition-colors max-w-[205px] mx-auto` +
                (isActive
                  ? ' bg-[#351C75] text-white'
                  : ' bg-[#E9E5F3] text-gray-700 border border-[#351C751F] hover:bg-[#351C751F] hover:text-[#351C75]')
              }
            >
              {({ isActive }) => (
                <>
                  <img
                    src={isActive ? item.activeIcon : item.icon}
                    alt={item.label}
                    className={`${isActive ? item.activeClassName : item.className} flex-shrink-0`}
                  />
                  <span className="font-medium">{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>
        <div className="flex-shrink-0">
          <div className="border-t border-[#351C751F] mb-3"></div>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 px-4 py-3 rounded-lg font-inter text-sm bg-red-100 hover:bg-red-200 transition-colors w-full max-w-[205px] mx-auto"
          >
            <img src={LogoutIcon} alt="Logout" className="w-4 h-4 flex-shrink-0" />
            <span className="font-medium">Log Out</span>
          </button>
        </div>
      </div>

      <LogoutModal
        isOpen={showLogoutModal}
        onConfirm={confirmLogout}
        onCancel={cancelLogout}
      />
    </div>
  )
}

export default Sidebar
