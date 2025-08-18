import React from 'react'
import NotificationIcon from '@/assets/icons/Notification.png'

interface NotificationDropdownProps {
  isOpen: boolean
  onClose: () => void
}

const NotificationDropdown: React.FC<NotificationDropdownProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  const notifications = [
    {
      id: 1,
      title: "Order Delivered!",
      message: "Order #OBD12234223 has been delivered.",
      time: "Today"
    },
    {
      id: 2,
      title: "Order Shipped!",
      message: "Order #OBD12234223 has been shipped.",
      time: "Today"
    },
    {
      id: 3,
      title: "Order In Process!",
      message: "Order #OBD12234223 has been in process.",
      time: "Today"
    },
    {
      id: 4,
      title: "New Order!",
      message: "New Order #OBD12234223 has been received.",
      time: "Today"
    },
    {
      id: 5,
      title: "New Product!",
      message: "New product added to store.",
      time: "Today"
    },
    {
      id: 6,
      title: "Order Delivered!",
      message: "Order #OBD12234223 has been delivered.",
      time: "05 Aug, 2025"
    },
    {
      id: 7,
      title: "New Category!",
      message: "New category added to list.",
      time: "05 Aug, 2025"
    }
  ]

  const todayNotifications = notifications.filter(n => n.time === "Today")
  const olderNotifications = notifications.filter(n => n.time !== "Today")

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-40" 
        onClick={onClose}
      />
      
      {/* Dropdown */}
      <div className="absolute top-full right-0 mt-2 w-96 bg-[#F6F3FB] rounded-2xl shadow-2xl z-50 max-h-96 overflow-y-auto">
        <div className="p-4">
          {/* Today Section */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-[#8C8C8C] mb-3">Today</h4>
            {todayNotifications.map((notification) => (
              <div key={notification.id} className="flex items-start space-x-3 mb-4">
                <div className="w-10 h-10 bg-[#DBDBDB] rounded-full flex items-center justify-center flex-shrink-0">
                  <img 
                    src={NotificationIcon} 
                    alt="Notification" 
                    className="w-5 h-5"
                  />
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-800 text-sm">{notification.title}</h5>
                  <p className="text-[#8C8C8C] text-xs">{notification.message}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Older Section */}
          <div>
            <h4 className="text-sm font-semibold text-[#8C8C8C] mb-3">05 Aug, 2025</h4>
            {olderNotifications.map((notification) => (
              <div key={notification.id} className="flex items-start space-x-3 mb-4">
                <div className="w-10 h-10 bg-[#DBDBDB] rounded-full flex items-center justify-center flex-shrink-0">
                  <img 
                    src={NotificationIcon} 
                    alt="Notification" 
                    className="w-5 h-5"
                  />
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-800 text-sm">{notification.title}</h5>
                  <p className="text-[#8C8C8C] text-xs">{notification.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default NotificationDropdown
