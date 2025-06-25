import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  Code2, 
  Home, 
  Coins, 
  Gavel, 
  Users, 
  Shield, 
  Vote, 
  User, 
  Compass, 
  Bell,
  Menu,
  X,
  Wallet,
  Plus
} from 'lucide-react';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/app', icon: Home },
    { name: 'Explore', href: '/app/explore', icon: Compass },
    { name: 'Auctions', href: '/app/auctions', icon: Gavel },
    { name: 'Contributors', href: '/app/contributors', icon: Users },
    { name: 'DAO', href: '/app/dao', icon: Vote },
    { name: 'Profile', href: '/app/profile', icon: User },
    { name: 'Notifications', href: '/app/notifications', icon: Bell },
  ];

  const isActive = (href: string) => {
    if (href === '/app') {
      return location.pathname === '/app';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-900/80" onClick={() => setSidebarOpen(false)} />
        <div className="fixed inset-y-0 left-0 w-64 bg-gray-800 p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <Code2 className="w-8 h-8 text-purple-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                DevVerse
              </span>
            </div>
            <button onClick={() => setSidebarOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive(item.href)
                      ? 'bg-purple-600/20 text-purple-400 border border-purple-500/30'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:w-64 lg:bg-gray-800 lg:p-6 lg:flex lg:flex-col">
        <div className="flex items-center space-x-2 mb-8">
          <Code2 className="w-8 h-8 text-purple-400" />
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            DevVerse
          </span>
        </div>
        
        <nav className="flex-1 space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive(item.href)
                    ? 'bg-purple-600/20 text-purple-400 border border-purple-500/30'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-gray-700 pt-6">
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all">
            <Wallet className="w-5 h-5" />
            <span>Connect Wallet</span>
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <div className="sticky top-0 z-40 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
          <div className="flex items-center justify-between px-4 py-4">
            <button
              className="lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-2 bg-gray-800 rounded-lg px-3 py-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm text-gray-300">Connected</span>
              </div>
              <button className="relative">
                <Bell className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>

      {/* Floating New Project Button */}
      <Link
        to="/app/mint"
        className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 transform hover:scale-110 z-30"
      >
        <Plus className="w-6 h-6" />
      </Link>
    </div>
  );
};

export default Layout;