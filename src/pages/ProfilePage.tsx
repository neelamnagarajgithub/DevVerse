import React, { useState } from 'react';
import { 
  User, 
  Wallet, 
  Github, 
  Mail, 
  Bell, 
  Shield, 
  Edit,
  ExternalLink,
  Copy,
  Settings,
  Award,
  TrendingUp,
  Users,
  Star
} from 'lucide-react';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);

  const profile = {
    name: 'Alex Chen',
    username: 'alexchen',
    email: 'alex@example.com',
    walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
    ensName: 'alexchen.eth',
    githubUsername: 'alexchen-dev',
    bio: 'Full-stack developer passionate about Web3 and decentralized applications. Building the future of developer economics.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    joinDate: 'January 2025',
    location: 'San Francisco, CA'
  };

  const stats = [
    { label: 'Total Revenue', value: '4.2 ETH', icon: TrendingUp, color: 'text-green-400' },
    { label: 'Projects Owned', value: '3', icon: User, color: 'text-blue-400' },
    { label: 'DAO Participation', value: '89%', icon: Users, color: 'text-purple-400' },
    { label: 'Badges Earned', value: '12', icon: Award, color: 'text-orange-400' }
  ];

  const ownedNFTs = [
    {
      id: 1,
      name: 'AI Code Assistant',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=300',
      value: '2.4 ETH',
      type: 'Project NFT'
    },
    {
      id: 2,
      name: 'DeFi Analytics Dashboard',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=300',
      value: '1.8 ETH',
      type: 'Project NFT'
    },
    {
      id: 3,
      name: 'Smart Contract Auditor',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=300',
      value: '3.2 ETH',
      type: 'Project NFT'
    }
  ];

  const badges = [
    {
      id: 1,
      name: 'First Contribution',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=100',
      earned: true
    },
    {
      id: 2,
      name: 'Code Reviewer',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=100',
      earned: true
    },
    {
      id: 3,
      name: 'DAO Participant',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=100',
      earned: true
    }
  ];

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'nfts', label: 'NFT Collection', icon: Star },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-8">
            {/* Profile Info */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-lg font-bold text-white">Profile Information</h3>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2"
                >
                  <Edit className="w-4 h-4" />
                  <span>{isEditing ? 'Save' : 'Edit'}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">Display Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      defaultValue={profile.name}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors"
                    />
                  ) : (
                    <p className="text-white">{profile.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">Username</label>
                  {isEditing ? (
                    <input
                      type="text"
                      defaultValue={profile.username}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors"
                    />
                  ) : (
                    <p className="text-white">@{profile.username}</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">Email</label>
                  {isEditing ? (
                    <input
                      type="email"
                      defaultValue={profile.email}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors"
                    />
                  ) : (
                    <p className="text-white">{profile.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">Location</label>
                  {isEditing ? (
                    <input
                      type="text"
                      defaultValue={profile.location}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors"
                    />
                  ) : (
                    <p className="text-white">{profile.location}</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-400 text-sm font-medium mb-2">Bio</label>
                  {isEditing ? (
                    <textarea
                      rows={3}
                      defaultValue={profile.bio}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors resize-none"
                    />
                  ) : (
                    <p className="text-white">{profile.bio}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Connected Accounts */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-6">Connected Accounts</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Wallet className="w-5 h-5 text-purple-400" />
                    <div>
                      <p className="text-white font-medium">Ethereum Wallet</p>
                      <p className="text-gray-400 text-sm font-mono">{profile.walletAddress}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(profile.walletAddress)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-gradient-to-r from-purple-400 to-blue-400 rounded"></div>
                    <div>
                      <p className="text-white font-medium">ENS Domain</p>
                      <p className="text-gray-400 text-sm">{profile.ensName}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Github className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-white font-medium">GitHub</p>
                      <p className="text-gray-400 text-sm">@{profile.githubUsername}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Badges */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-6">Achievement Badges</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {badges.map((badge) => (
                  <div key={badge.id} className="text-center">
                    <img 
                      src={badge.image} 
                      alt={badge.name}
                      className="w-16 h-16 rounded-xl object-cover mx-auto mb-2"
                    />
                    <p className="text-white text-sm font-medium">{badge.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'nfts':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">Your NFT Collection</h3>
              <p className="text-gray-400">{ownedNFTs.length} items</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ownedNFTs.map((nft) => (
                <div key={nft.id} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-colors">
                  <img 
                    src={nft.image} 
                    alt={nft.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-white font-bold mb-1">{nft.name}</h4>
                    <p className="text-gray-400 text-sm mb-3">{nft.type}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-green-400 font-bold">{nft.value}</span>
                      <button className="text-purple-400 hover:text-purple-300 text-sm transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className="space-y-6">
            {/* Notification Settings */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-6">Notification Preferences</h3>
              <div className="space-y-4">
                {[
                  { id: 'bids', label: 'New bids on your projects', enabled: true },
                  { id: 'dao', label: 'DAO proposal updates', enabled: true },
                  { id: 'revenue', label: 'Revenue share payments', enabled: true },
                  { id: 'badges', label: 'New badge achievements', enabled: false },
                  { id: 'followers', label: 'New followers', enabled: false }
                ].map((setting) => (
                  <div key={setting.id} className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium">{setting.label}</p>
                    </div>
                    <button
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        setting.enabled ? 'bg-purple-600' : 'bg-gray-600'
                      }`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        setting.enabled ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Privacy Settings */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-6">Privacy Settings</h3>
              <div className="space-y-4">
                {[
                  { id: 'profile', label: 'Public profile visibility', enabled: true },
                  { id: 'revenue', label: 'Show revenue statistics', enabled: false },
                  { id: 'activity', label: 'Show activity feed', enabled: true }
                ].map((setting) => (
                  <div key={setting.id} className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium">{setting.label}</p>
                    </div>
                    <button
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        setting.enabled ? 'bg-purple-600' : 'bg-gray-600'
                      }`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        setting.enabled ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Danger Zone */}
            <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-red-400 mb-4">Danger Zone</h3>
              <div className="space-y-4">
                <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Delete Account
                </button>
                <p className="text-red-300 text-sm">
                  This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
          <img 
            src={profile.avatar} 
            alt={profile.name}
            className="w-24 h-24 rounded-xl object-cover"
          />
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-white mb-2">{profile.name}</h1>
            <p className="text-gray-400 mb-4">{profile.bio}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <span>Joined {profile.joinDate}</span>
              <span>•</span>
              <span>{profile.location}</span>
              <span>•</span>
              <span className="text-purple-400">{profile.ensName}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                  <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                </div>
                <Icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-700">
        <nav className="flex space-x-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-purple-500 text-purple-400'
                    : 'border-transparent text-gray-400 hover:text-gray-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
};

export default ProfilePage;