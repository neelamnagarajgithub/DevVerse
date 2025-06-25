import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Plus, 
  Eye, 
  Edit, 
  Coins, 
  Shield, 
  Users, 
  TrendingUp, 
  Clock,
  Star,
  Github,
  ExternalLink
} from 'lucide-react';

const Dashboard = () => {
  const projects = [
    {
      id: 1,
      name: 'AI Code Assistant',
      description: 'VS Code extension for AI-powered code completion',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'minted',
      contributors: 12,
      auctionStatus: 'active',
      daoVotes: 45,
      revenue: '2.4 ETH',
      tags: ['AI', 'VSCode', 'TypeScript']
    },
    {
      id: 2,
      name: 'DeFi Analytics Dashboard',
      description: 'Real-time DeFi protocol analytics and yield tracking',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'unminted',
      contributors: 8,
      auctionStatus: 'none',
      daoVotes: 0,
      revenue: '0 ETH',
      tags: ['DeFi', 'React', 'Web3']
    },
    {
      id: 3,
      name: 'Smart Contract Auditor',
      description: 'Automated security analysis for Solidity contracts',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'minted',
      contributors: 6,
      auctionStatus: 'ended',
      daoVotes: 23,
      revenue: '1.8 ETH',
      tags: ['Security', 'Solidity', 'Blockchain']
    }
  ];

  const stats = [
    { label: 'Total Projects', value: '3', icon: Github, color: 'text-blue-400' },
    { label: 'Total Revenue', value: '4.2 ETH', icon: TrendingUp, color: 'text-green-400' },
    { label: 'Active Auctions', value: '1', icon: Clock, color: 'text-orange-400' },
    { label: 'DAO Votes', value: '68', icon: Users, color: 'text-purple-400' }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Project Dashboard</h1>
          <p className="text-gray-400 mt-2">Manage your tokenized development projects</p>
        </div>
        <Link
          to="/app/mint"
          className="mt-4 sm:mt-0 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 flex items-center"
        >
          <Plus className="w-5 h-5 mr-2" />
          New Project
        </Link>
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

      {/* Projects Grid */}
      <div>
        <h2 className="text-xl font-bold text-white mb-6">Your Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-colors">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  {project.status === 'minted' ? (
                    <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium border border-green-500/30">
                      Minted
                    </span>
                  ) : (
                    <span className="bg-gray-600/20 text-gray-400 px-3 py-1 rounded-full text-sm font-medium border border-gray-500/30">
                      Unminted
                    </span>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">{project.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300">{project.contributors} Contributors</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300">{project.revenue}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300">
                      {project.auctionStatus === 'active' ? 'Active Auction' : 
                       project.auctionStatus === 'ended' ? 'Auction Ended' : 'No Auction'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300">{project.daoVotes} DAO Votes</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2">
                  <Link
                    to={`/app/project/${project.id}`}
                    className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-lg text-sm transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Details</span>
                  </Link>
                  <button className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-lg text-sm transition-colors">
                    <Edit className="w-4 h-4" />
                    <span>Edit</span>
                  </button>
                  {project.status === 'unminted' && (
                    <Link
                      to="/app/mint"
                      className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 px-3 py-2 rounded-lg text-sm transition-colors"
                    >
                      <Coins className="w-4 h-4" />
                      <span>Mint NFT</span>
                    </Link>
                  )}
                  <Link
                    to={`/app/gating/${project.id}`}
                    className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-lg text-sm transition-colors"
                  >
                    <Shield className="w-4 h-4" />
                    <span>Gate Access</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;