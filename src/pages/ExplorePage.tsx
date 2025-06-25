import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  TrendingUp, 
  Clock, 
  Star, 
  Users, 
  ExternalLink,
  Github,
  Eye,
  Gavel
} from 'lucide-react';

const ExplorePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('trending');

  const projects = [
    {
      id: 1,
      name: 'AI Code Assistant',
      description: 'VS Code extension for AI-powered code completion and bug detection',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'alexchen.eth',
      authorAvatar: 'AC',
      price: '2.4 ETH',
      contributors: 12,
      stars: 156,
      category: 'AI',
      tags: ['AI', 'VSCode', 'TypeScript'],
      status: 'auction',
      timeLeft: '2d 14h',
      revenue: '4.2 ETH',
      featured: true
    },
    {
      id: 2,
      name: 'DeFi Analytics Dashboard',
      description: 'Real-time DeFi protocol analytics and yield tracking platform',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'defi_dev.eth',
      authorAvatar: 'DD',
      price: '1.8 ETH',
      contributors: 8,
      stars: 89,
      category: 'DeFi',
      tags: ['DeFi', 'React', 'Web3'],
      status: 'available',
      revenue: '2.1 ETH',
      featured: false
    },
    {
      id: 3,
      name: 'Smart Contract Auditor',
      description: 'Automated security analysis tool for Solidity smart contracts',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'security_pro.eth',
      authorAvatar: 'SP',
      price: '3.2 ETH',
      contributors: 6,
      stars: 234,
      category: 'Security',
      tags: ['Security', 'Solidity', 'Blockchain'],
      status: 'sold',
      revenue: '5.8 ETH',
      featured: true
    },
    {
      id: 4,
      name: 'NFT Marketplace Builder',
      description: 'No-code platform for creating custom NFT marketplaces',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'nft_builder.eth',
      authorAvatar: 'NB',
      price: '4.1 ETH',
      contributors: 15,
      stars: 312,
      category: 'NFT',
      tags: ['NFT', 'No-Code', 'Marketplace'],
      status: 'auction',
      timeLeft: '5d 8h',
      revenue: '7.3 ETH',
      featured: false
    },
    {
      id: 5,
      name: 'Crypto Portfolio Tracker',
      description: 'Advanced portfolio management with DeFi yield tracking',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'crypto_tracker.eth',
      authorAvatar: 'CT',
      price: '1.5 ETH',
      contributors: 9,
      stars: 178,
      category: 'Fintech',
      tags: ['Portfolio', 'DeFi', 'Analytics'],
      status: 'available',
      revenue: '1.9 ETH',
      featured: false
    },
    {
      id: 6,
      name: 'Web3 Authentication SDK',
      description: 'Easy-to-integrate Web3 authentication for any application',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'auth_dev.eth',
      authorAvatar: 'AD',
      price: '2.7 ETH',
      contributors: 11,
      stars: 267,
      category: 'DevTools',
      tags: ['Authentication', 'SDK', 'Web3'],
      status: 'available',
      revenue: '3.4 ETH',
      featured: true
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'AI', label: 'AI & ML', count: projects.filter(p => p.category === 'AI').length },
    { id: 'DeFi', label: 'DeFi', count: projects.filter(p => p.category === 'DeFi').length },
    { id: 'Security', label: 'Security', count: projects.filter(p => p.category === 'Security').length },
    { id: 'NFT', label: 'NFT', count: projects.filter(p => p.category === 'NFT').length },
    { id: 'DevTools', label: 'Dev Tools', count: projects.filter(p => p.category === 'DevTools').length },
    { id: 'Fintech', label: 'Fintech', count: projects.filter(p => p.category === 'Fintech').length }
  ];

  const sortOptions = [
    { id: 'trending', label: 'Trending' },
    { id: 'newest', label: 'Recently Minted' },
    { id: 'price-high', label: 'Highest Price' },
    { id: 'price-low', label: 'Lowest Price' },
    { id: 'revenue', label: 'Highest Revenue' }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'auction': return 'text-orange-400 bg-orange-600/20 border-orange-500/30';
      case 'available': return 'text-green-400 bg-green-600/20 border-green-500/30';
      case 'sold': return 'text-gray-400 bg-gray-600/20 border-gray-500/30';
      default: return 'text-gray-400 bg-gray-600/20 border-gray-500/30';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'auction': return Gavel;
      case 'available': return Eye;
      case 'sold': return Star;
      default: return Eye;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Explore DevVerse</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Discover tokenized development projects, place bids on innovative solutions, 
          and join the future of developer economics.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Search */}
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search projects, technologies, or creators..."
              className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors"
            />
          </div>
        </div>

        {/* Sort */}
        <div className="flex space-x-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors"
          >
            {sortOptions.map(option => (
              <option key={option.id} value={option.id}>{option.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              selectedCategory === category.id
                ? 'bg-purple-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
            }`}
          >
            {category.label} ({category.count})
          </button>
        ))}
      </div>

      {/* Featured Projects */}
      {selectedCategory === 'all' && (
        <div>
          <h2 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <span>Featured Projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {projects.filter(p => p.featured).slice(0, 3).map((project) => {
              const StatusIcon = getStatusIcon(project.status);
              return (
                <div key={project.id} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="relative">
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                        <StatusIcon className="w-3 h-3 inline mr-1" />
                        {project.status}
                      </span>
                    </div>
                    {project.status === 'auction' && (
                      <div className="absolute top-4 left-4 bg-orange-600/20 text-orange-400 px-2 py-1 rounded-full text-xs font-medium border border-orange-500/30 flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {project.timeLeft}
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 bg-yellow-600/20 text-yellow-400 px-2 py-1 rounded-full text-xs font-medium border border-yellow-500/30 flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {project.authorAvatar}
                      </div>
                      <span className="text-gray-400 text-sm">{project.author}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2">{project.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                      <div className="text-center">
                        <p className="text-green-400 font-bold">{project.price}</p>
                        <p className="text-gray-400 text-xs">Current Price</p>
                      </div>
                      <div className="text-center">
                        <p className="text-blue-400 font-bold">{project.contributors}</p>
                        <p className="text-gray-400 text-xs">Contributors</p>
                      </div>
                      <div className="text-center">
                        <p className="text-purple-400 font-bold">{project.revenue}</p>
                        <p className="text-gray-400 text-xs">Total Revenue</p>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Link
                        to={`/app/project/${project.id}`}
                        className="flex-1 bg-gray-700 hover:bg-gray-600 py-2 rounded-lg text-sm font-medium transition-colors text-center"
                      >
                        View Details
                      </Link>
                      {project.status === 'auction' && (
                        <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-all">
                          Place Bid
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* All Projects */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">
            {selectedCategory === 'all' ? 'All Projects' : categories.find(c => c.id === selectedCategory)?.label}
          </h2>
          <p className="text-gray-400">{filteredProjects.length} projects found</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const StatusIcon = getStatusIcon(project.status);
            return (
              <div key={project.id} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                      <StatusIcon className="w-3 h-3 inline mr-1" />
                      {project.status}
                    </span>
                  </div>
                  {project.status === 'auction' && project.timeLeft && (
                    <div className="absolute top-4 left-4 bg-orange-600/20 text-orange-400 px-2 py-1 rounded-full text-xs font-medium border border-orange-500/30 flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {project.timeLeft}
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {project.authorAvatar}
                    </div>
                    <span className="text-gray-400 text-sm">{project.author}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">{project.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                    <div className="text-center">
                      <p className="text-green-400 font-bold">{project.price}</p>
                      <p className="text-gray-400 text-xs">Price</p>
                    </div>
                    <div className="text-center">
                      <p className="text-blue-400 font-bold">{project.contributors}</p>
                      <p className="text-gray-400 text-xs">Contributors</p>
                    </div>
                    <div className="text-center">
                      <p className="text-orange-400 font-bold">{project.stars}</p>
                      <p className="text-gray-400 text-xs">Stars</p>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Link
                      to={`/app/project/${project.id}`}
                      className="flex-1 bg-gray-700 hover:bg-gray-600 py-2 rounded-lg text-sm font-medium transition-colors text-center"
                    >
                      View Details
                    </Link>
                    {project.status === 'auction' && (
                      <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-all">
                        Bid
                      </button>
                    )}
                    {project.status === 'available' && (
                      <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-sm font-medium transition-all">
                        Buy
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;