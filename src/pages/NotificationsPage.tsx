import React, { useState } from 'react';
import { 
  Bell, 
  Gavel, 
  Vote, 
  Coins, 
  Users, 
  Award, 
  Settings,
  Check,
  X,
  Filter,
  MoreHorizontal
} from 'lucide-react';

const NotificationsPage = () => {
  const [filter, setFilter] = useState('all');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'bid',
      title: 'New bid on AI Code Assistant',
      message: 'Someone placed a bid of 2.6 ETH on your project',
      time: '2 minutes ago',
      read: false,
      icon: Gavel,
      color: 'text-orange-400',
      bgColor: 'bg-orange-600/20',
      borderColor: 'border-orange-500/30'
    },
    {
      id: 2,
      type: 'dao',
      title: 'DAO proposal passed',
      message: 'The "Add GPT-4 Integration" proposal has been approved with 78% support',
      time: '1 hour ago',
      read: false,
      icon: Vote,
      color: 'text-green-400',
      bgColor: 'bg-green-600/20',
      borderColor: 'border-green-500/30'
    },
    {
      id: 3,
      type: 'revenue',
      title: 'Revenue share received',
      message: 'You received 0.15 ETH from DeFi Analytics Dashboard',
      time: '3 hours ago',
      read: true,
      icon: Coins,
      color: 'text-green-400',
      bgColor: 'bg-green-600/20',
      borderColor: 'border-green-500/30'
    },
    {
      id: 4,
      type: 'badge',
      title: 'New badge earned!',
      message: 'You earned the "Code Reviewer" badge for reviewing 50+ pull requests',
      time: '1 day ago',
      read: true,
      icon: Award,
      color: 'text-purple-400',
      bgColor: 'bg-purple-600/20',
      borderColor: 'border-purple-500/30'
    },
    {
      id: 5,
      type: 'follower',
      title: 'New follower',
      message: 'crypto_dev.eth started following your projects',
      time: '2 days ago',
      read: true,
      icon: Users,
      color: 'text-blue-400',
      bgColor: 'bg-blue-600/20',
      borderColor: 'border-blue-500/30'
    },
    {
      id: 6,
      type: 'bid',
      title: 'Auction ending soon',
      message: 'Your Smart Contract Auditor auction ends in 6 hours',
      time: '3 days ago',
      read: true,
      icon: Gavel,
      color: 'text-orange-400',
      bgColor: 'bg-orange-600/20',
      borderColor: 'border-orange-500/30'
    },
    {
      id: 7,
      type: 'dao',
      title: 'New DAO proposal',
      message: 'A new proposal "Mobile App Development" is now open for voting',
      time: '1 week ago',
      read: true,
      icon: Vote,
      color: 'text-blue-400',
      bgColor: 'bg-blue-600/20',
      borderColor: 'border-blue-500/30'
    }
  ]);

  const filters = [
    { id: 'all', label: 'All', count: notifications.length },
    { id: 'unread', label: 'Unread', count: notifications.filter(n => !n.read).length },
    { id: 'bid', label: 'Auctions', count: notifications.filter(n => n.type === 'bid').length },
    { id: 'dao', label: 'DAO', count: notifications.filter(n => n.type === 'dao').length },
    { id: 'revenue', label: 'Revenue', count: notifications.filter(n => n.type === 'revenue').length },
    { id: 'badge', label: 'Badges', count: notifications.filter(n => n.type === 'badge').length }
  ];

  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !notification.read;
    return notification.type === filter;
  });

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center space-x-3">
            <Bell className="w-8 h-8" />
            <span>Notifications</span>
            {unreadCount > 0 && (
              <span className="bg-red-500 text-white text-sm px-2 py-1 rounded-full">
                {unreadCount}
              </span>
            )}
          </h1>
          <p className="text-gray-400 mt-2">Stay updated with your projects, auctions, and DAO activities</p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2"
            >
              <Check className="w-4 h-4" />
              <span>Mark All Read</span>
            </button>
          )}
          <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2">
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {filters.map((filterOption) => (
          <button
            key={filterOption.id}
            onClick={() => setFilter(filterOption.id)}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              filter === filterOption.id
                ? 'bg-purple-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
            }`}
          >
            {filterOption.label} ({filterOption.count})
          </button>
        ))}
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {filteredNotifications.length === 0 ? (
          <div className="text-center py-12">
            <Bell className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-400 mb-2">No notifications</h3>
            <p className="text-gray-500">You're all caught up! Check back later for updates.</p>
          </div>
        ) : (
          filteredNotifications.map((notification) => {
            const Icon = notification.icon;
            return (
              <div
                key={notification.id}
                className={`bg-gray-800 rounded-xl p-6 border transition-all hover:border-gray-600 ${
                  notification.read ? 'border-gray-700' : notification.borderColor
                } ${
                  notification.read ? '' : notification.bgColor
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-2 rounded-lg ${notification.bgColor} border ${notification.borderColor}`}>
                    <Icon className={`w-5 h-5 ${notification.color}`} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className={`font-medium mb-1 ${
                          notification.read ? 'text-gray-300' : 'text-white'
                        }`}>
                          {notification.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-2">{notification.message}</p>
                        <p className="text-gray-500 text-xs">{notification.time}</p>
                      </div>
                      
                      <div className="flex items-center space-x-2 ml-4">
                        {!notification.read && (
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        )}
                        <div className="relative">
                          <button className="text-gray-400 hover:text-white p-1 rounded">
                            <MoreHorizontal className="w-4 h-4" />
                          </button>
                          {/* Dropdown menu would go here */}
                        </div>
                      </div>
                    </div>
                    
                    {/* Action buttons for unread notifications */}
                    {!notification.read && (
                      <div className="flex space-x-2 mt-3">
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-xs font-medium transition-colors flex items-center space-x-1"
                        >
                          <Check className="w-3 h-3" />
                          <span>Mark as read</span>
                        </button>
                        <button
                          onClick={() => deleteNotification(notification.id)}
                          className="text-red-400 hover:text-red-300 px-3 py-1 rounded text-xs font-medium transition-colors flex items-center space-x-1"
                        >
                          <X className="w-3 h-3" />
                          <span>Dismiss</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Load More */}
      {filteredNotifications.length > 0 && (
        <div className="text-center">
          <button className="bg-gray-800 hover:bg-gray-700 border border-gray-700 px-6 py-3 rounded-lg font-medium transition-colors">
            Load More Notifications
          </button>
        </div>
      )}
    </div>
  );
};

export default NotificationsPage;