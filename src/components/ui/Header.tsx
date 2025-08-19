import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NotificationIcon from '@/assets/icons/Notification.png'
import ProfileImage from '@/assets/images/pfp.png'
import NotificationDropdown from './NotificationDropdown'

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const [showNotifications, setShowNotifications] = useState(false)
  const navigate = useNavigate();

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications)
  }

  const handleProfileClick = () => {
    navigate('/profile');
  }

  return (
    <div className="bg-[#F6F3FB] border-b border-gray-200 px-6 py-4 pt-6 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-gray-800 font-inter">{title}</h1>
      
      <div className="flex items-center space-x-4">
        {/* Notification Icon */}
        <div className="relative">
          <button 
            onClick={toggleNotifications}
            className="relative p-1.5 bg-[#F1EDF7] hover:bg-[#E8E0F0] rounded-lg transition-colors"
          >
            <img 
              src={NotificationIcon} 
              alt="Notifications" 
              className="w-7 h-7"
            />
            {/* Notification red dot */}
            <span className="absolute top-0 right-0 bg-red-500 rounded-full w-2.5 h-2.5"></span>
          </button>
          
          <NotificationDropdown 
            isOpen={showNotifications} 
            onClose={() => setShowNotifications(false)} 
          />
        </div>
        
        {/* Profile Image */}
        <div
          className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200 hover:border-[#351C75] transition-colors cursor-pointer"
          onClick={handleProfileClick}
          role="button"
          tabIndex={0}
          aria-label="Go to profile"
        >
          <img
            src={ProfileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Header
